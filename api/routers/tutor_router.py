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

team_id = "cfg-team1-46273"
app = FastAPI(title=f"Firestore FastAPI: {team_id}", version="0.0.1")


@router.post("/tutor", response_model=Tutor, tags=["tutor_schema"])
def create_item(tutor_create: Tutor = Body(...)) -> Tutor:
    return tutor_service.create_item(tutor_create)

@router.get("/tutors", response_model=List[Tutor], tags=["tutor_schema"])
def list_items() -> List[Tutor]:
    tutors = tutor_service.list_tutors()
    if not tutors:
        raise HTTPException(status_code=404, detail="Tutors not found.")
    return tutors

@router.get("/students", response_model=List[Student], tags=["student"])
def get_students() -> List[Student]:
    students = student_service.list_students()
    if not students:
        raise HTTPException(status_code=404, detail="Students were  not found.")
    return students 

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


# Get highschool info
@router.get("/get_high_school_info", response_model=str, tags=["highSchoolInfo"])
def get_high_school_info(id: str) -> str:
    highSchoolInfo = student_service.get_high_school_info(id)
    if not highSchoolInfo:
        raise HTTPException(status_code=404, detail="High school information not found.")
    return highSchoolInfo


# Get parent data
@router.get("/get_parent_info", response_model=ParentData, tags=["parentInfo"])
def get_parent_info(id: str) -> ParentData:
    parentInfo = student_service.get_parent_info(id)
    if not parentInfo: 
        raise HTTPException(status_code=404, detail="Parent info not found.")
    return parentInfo


@router.put("/update_student_progress/{id}/{module_number}", response_model=Student,  tags=["student"])
def edit_module_completion_status(id: str, module_number: int, student_update: Student = Body(...)) -> Student:
    student = student_service.get_student(id)
    if not student:
        raise HTTPException(status_code=404, detail="Student not found.")
    return student_service.edit_module_completion_status(id, module_number, student_update)


@router.put("/update_student_progress/{id}/{module_number}", response_model=Student,  tags=["student"])
def edit_module_completion_status(id: str, module_number: int, student_update: Student = Body(...)) -> Student:
    student = student_service.get_student(id)
    if not student:
        raise HTTPException(status_code=404, detail="Student not found.")
    return student_service.edit_module_completion_status(id, module_number, student_update)


app.include_router(router)