from sqlalchemy import create_engine, Column, Integer, String, Text, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime, timezone
import os

# Database URL - use PostgreSQL in production, SQLite in development
database_url = os.getenv("DATABASE_URL", "sqlite:///./home_hero.db")

# Handle Railway's PostgreSQL URL format
if database_url.startswith("postgres://"):
    database_url = database_url.replace("postgres://", "postgresql://", 1)

# Create engine with appropriate settings
if database_url.startswith("postgresql://"):
    engine = create_engine(database_url)
else:
    # SQLite settings
    engine = create_engine(
        database_url, connect_args={"check_same_thread": False}
    )
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


class ContactSubmission(Base):
    __tablename__ = "contact_submissions"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    country_code = Column(String, nullable=False)
    phone_number = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    # You can add more fields later if needed
    # status = Column(String, default="new")
    # assigned_handyman = Column(String, nullable=True)


# Create the database tables
def create_tables():
    Base.metadata.create_all(bind=engine)


# Dependency to get database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
