from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import ContactSubmission, create_tables, get_db
from schemas import ContactSubmissionCreate, ContactSubmissionResponse
from typing import List
import re

# Create the database tables on startup
create_tables()

app = FastAPI(
    title="Home Hero API",
    description="Backend API for Home Hero - Connecting homeowners with handymen",
    version="1.0.0",
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],  # Add your frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def validate_email(email: str) -> bool:
    """Simple email validation"""
    pattern = r"^[^\s@]+@[^\s@]+\.[^\s@]+$"
    return re.match(pattern, email) is not None


@app.get("/")
async def read_root():
    return {"message": "Welcome to Home Hero API", "status": "running"}


@app.post("/contact", response_model=ContactSubmissionResponse)
async def create_contact_submission(
    contact_data: ContactSubmissionCreate, db: Session = Depends(get_db)
):
    """Submit a contact form"""

    # Validate email
    if not validate_email(contact_data.email):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Please provide a valid email address",
        )

    # Validate phone number (basic validation)
    phone_digits = re.sub(r"\D", "", contact_data.phone_number)
    if len(phone_digits) < 10 or len(phone_digits) > 15:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Phone number must be between 10-15 digits",
        )

    # Create database entry
    db_submission = ContactSubmission(
        name=contact_data.name.strip(),
        email=contact_data.email.lower().strip(),
        country_code=contact_data.country_code,
        phone_number=contact_data.phone_number.strip(),
        description=contact_data.description.strip(),
    )

    db.add(db_submission)
    db.commit()
    db.refresh(db_submission)

    return db_submission


@app.get("/contact/submissions", response_model=List[ContactSubmissionResponse])
async def get_all_submissions(db: Session = Depends(get_db)):
    """Get all contact submissions (admin endpoint)"""
    submissions = (
        db.query(ContactSubmission).order_by(ContactSubmission.created_at.desc()).all()
    )
    return submissions


@app.get(
    "/contact/submissions/{submission_id}", response_model=ContactSubmissionResponse
)
async def get_submission(submission_id: int, db: Session = Depends(get_db)):
    """Get a specific contact submission"""
    submission = (
        db.query(ContactSubmission)
        .filter(ContactSubmission.id == submission_id)
        .first()
    )
    if not submission:
        raise HTTPException(status_code=404, detail="Submission not found")
    return submission


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "message": "Home Hero API is running"}
