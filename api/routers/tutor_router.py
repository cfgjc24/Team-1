from typing import List

from fastapi import FastAPI, APIRouter, Body, HTTPException
from pydantic.types import UUID4

from dbinstance import db
from schemas.tutor_schema import Tutor
from services.tutor_service import TutorService

router = APIRouter()
tutor_service = TutorService()

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


app.include_router(router)