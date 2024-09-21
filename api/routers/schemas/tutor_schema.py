from pydantic import BaseModel
from dataclasses import dataclass, field
from uuid import UUID, uuid4
from schemas.student import *


class Tutor(BaseModel):
    first_name: str = None
    last_name: str = None
    assigned_high_school: str = None
    email: str = None
    phone_number: str = None 
    college: str = None
    assigned_students: list = []
    TutorID: str = str(uuid4()) 