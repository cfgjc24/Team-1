from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from api.schemas.student import *

app = FastAPI()


class Tutor(BaseModel):
    first_name: str = None
    last_name: str = None
    assigned_high_school: str = None
    email: str = None
    phone_number: str = None 
    college: str = None
    assigned_students: list = []

     


items = []





@app.get("/")
def root():
    return {"Hello": "World"}


@app.post("/items")
def create_item(item: Item):
    items.append(item)
    return items


@app.get("/items", response_model=list[Item])
def list_items(limit: int = 10):
    return items[0:limit]


@app.get("/items/{item_id}", response_model=Item)
def get_item(item_id: int) -> Item:
    if item_id < len(items):
        return items[item_id]
    else:
        raise HTTPException(status_code=404, detail=f"Item {item_id} not found")