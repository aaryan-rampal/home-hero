from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional


class ContactSubmissionCreate(BaseModel):
    name: str
    email: str  # Will validate email format in the endpoint
    country_code: str
    phone_number: str
    description: str


class ContactSubmissionResponse(BaseModel):
    id: int
    name: str
    email: str
    country_code: str
    phone_number: str
    description: str
    created_at: datetime

    class Config:
        from_attributes = True
