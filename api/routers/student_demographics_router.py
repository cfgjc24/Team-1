from typing import List

from fastapi import FastAPI, APIRouter, Body, HTTPException
from pydantic.types import UUID4

from dbinstance import db
from schemas.student_demographics_schema import StudentDemographics
from services.student_demographics_services import StudentDemographicService

router = APIRouter()
student_dem_service = StudentDemographicService()

app = FastAPI(title=f"Firestore FastAPI: {"cfg-team1-46273"}", version="0.0.1")

@router.post("/studentDemographics", response_model=StudentDemographics, tags=["student_demographics_schema"])
def create_item(student_demographics_create: StudentDemographics= Body(...)) -> StudentDemographics:
    return student_dem_service.create_item(student_demographics_create)

@router.get("/studentDemographics", response_model=List[StudentDemographics], tags=["student_demographics_schema"])
def list_items() -> List[StudentDemographics]:
    student_demographics = student_dem_service.list_student_demographics()
    if not student_demographics:
        raise HTTPException(status_code=404, detail="Student demographics not found.")
    return tutors


app.include_router(router)