from typing import List

from fastapi import FastAPI, APIRouter, Body, HTTPException
from pydantic.types import UUID4
from schemas.student_schema import FormInfo, ParentData, StudentDemographics, Student
from services.student_service import StudentService

from dbinstance import db
from schemas.tutor_schema import Tutor
from services.tutor_service import TutorService

router = APIRouter()
tutor_service = TutorService()
student_service = StudentService()

app = FastAPI(title=f"Firestore FastAPI: {"cfg-team1-46273"}", version="0.0.1")

@router.post("/tutor", response_model=Tutor, tags=["tutor_schema"])
def create_item(tutor_create: Tutor = Body(...)) -> Tutor:
    return tutor_service.create_item(tutor_create)

@router.get("/tutors", response_model=List[Tutor], tags=["tutor_schema"])
def list_items() -> List[Tutor]:
    tutors = tutor_service.list_tutors()
    if not tutors:
        raise HTTPException(status_code=404, detail="Tutors not found.")
    return tutors


@router.post("/student", response_model=Student, tags=["student"])
def create_student(student_create: Student = Body(...)) -> Student: 
    return student_service.create_student(student_create)

@router.get("/student", response_model=Student, tags=["student"])
def get_student(id: str) -> Student: 
    student = student_service.get_student(id)
    if not student: 
        raise HTTPException(status_code=404, detail="Students not found.")
    return student

@router.get("/get_student_form_info", response_model=FormInfo, tags=["formInfo"])
def get_student_form_info(id: str) -> FormInfo:
    formInfo = student_service.get_form_information(id)
    if not formInfo: 
        raise HTTPException(status_code=404, detail="Student form info  not found.")
    return formInfo

@router.get("/get_first_last_name", response_model=[], tags=["formInfo"])
def get_student_form_info(id: str) -> []:
    formInfo = student_service.get_first_last_name(id)
    if not formInfo: 
        raise HTTPException(status_code=404, detail="Student first and last name not found.")
    return formInfo


app.include_router(router)