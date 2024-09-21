from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class StudentDemographics(BaseModel):
    race:str = None 
    gender:str = None 
    sexuality:str = None
    disability:str = None 
    first_gen:bool = False

class Student(BaseModel):
    first_name: str = None
    last_name: str = None
    high_school: str = None
    email: str = None
    phone_number: str = None 
    adress: str = None 
    city: str = None 
    state: str = None 
    zip_code:str = None 
    studentDemographic: StudentDemographics = None 