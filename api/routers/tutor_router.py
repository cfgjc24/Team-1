from typing import List

from fastapi import FastAPI, APIRouter, Body, HTTPException
from pydantic.types import UUID4

from dbinstance import db
from schemas.tutor_schema import Tutor
from services.tutor_service import TutorService

router = APIRouter()
tutor_service = TutorService()

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

@router.get("/tutors/{id}", response_model=Tutor, tags=["tutor_schema"])
def get_item(id: UUID4) -> Tutor:
    item = tutor_service.get_item(id)
    if not item:
        raise HTTPException(status_code=404, detail=" not found.")
    return item

@router.put("/tutors/{id}", response_model=Tutor, tags=["tutor_schema"])
def update_item(id: UUID4, item_update: Tutor = Body(...)) -> Tutor:
    tutor = tutor_service.get_item(id)
    if not tutor:
        raise HTTPException(status_code=404, detail="Item not found.")
    return tutor_service.update_item(id, item_update)


app.include_router(router)