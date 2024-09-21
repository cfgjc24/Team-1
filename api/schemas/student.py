from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class StudentDemographics(BaseModel):
    race:str = None 
    gender:str = None 
    sexuality:str = None
    hasDisability:bool = False
    is_first_gen:bool = False
    age:int = 0
    demographicID: int = 0
    studentID: int = 0

class Student(BaseModel):
    first_name: str = None
    last_name: str = None
    high_school: str = None
    DOB: str = None
    parent_name: str = None
    parent_email: str = None
    parent_phone_number: str = None
    email: str = None
    phone_number: str = None 
    address_line_one: str = None 
    address_line_two: str = None
    city: str = None 
    state: str = None 
    country: str = None
    zip_code:str = None 
    studentDemographic: StudentDemographics = None 
    studentProgress: StudentProgress = None
    tutorID: int = 0
    studentID: int = 0
    

class StudentProgress(BaseModel):
    is_onboarded: bool = False
    modules_completed: int = 0
    studentID: int = 0
    student_progress_ID: int = 0
    is_graduated: bool = False





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