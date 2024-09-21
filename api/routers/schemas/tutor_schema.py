from pydantic import BaseModel
from schemas.student_schema import *


class Tutor(BaseModel):
    first_name: str = None
    last_name: str = None
    assigned_high_school: str = None
    email: str = None
    phone_number: str = None 
    college: str = None
    assigned_students: list = []
    TutorID: str = None