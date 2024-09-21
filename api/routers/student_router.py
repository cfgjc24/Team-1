from typing import List 
from fastapi import APIRouter, Body, HTTPException 
from pydantic.types import UUID4
from schemas.student_schema import  Student
from service.student_service import StudentService

router = APIRouter()
student_service = StudentService()


@router.post("/student", response_model=Student, tags=["student"])
def create_student(student_create: Student = Body(...)) -> Item: 
    return student_service.create_student(student_create)
