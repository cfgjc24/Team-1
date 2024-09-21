from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, TypeAdapter, Field
from typing_extensions import TypedDict

app = FastAPI()

# this is a dictionary for form information in the student obj
class FormInfo(TypedDict):
    address_line_1: str
    address_line_2: str 
    city: str
    country: str
    state: str
    zipcode: str

class StudentProgress(BaseModel):
    is_onboarded: bool = False
    modules_completed: int = 0
    studentID: str = None
    student_progress_ID: str = None
    is_graduated: bool = False



#this is a dictionary for parent data information that is used in the 
#student object 
class ParentData(TypedDict):
    parent_email: str
    parent_name: str
    parent_phone_number: str

class StudentDemographics(BaseModel):
    race:str = None 
    gender:str = None 
    sexuality:str = None
    hasDisability:bool = False
    is_first_gen:bool = False
    age:int = 0
    demographicID: str = None
    studentID: str = None

class Student(BaseModel):

    # this will be populated when students are created 
    # reference this for dictionary https://docs.pydantic.dev/2.3/usage/types/dicts_mapping/
    form_info: FormInfo = None 
    parent_data: ParentData = None
    first_name: str = None
    last_name: str = None
    high_school: str = None
    DateOfBirth: str = None
    email: str = None
    phone_number: str = None 
    studentDemographic: StudentDemographics = None 
    studentProgress: StudentProgress = None
    tutorID: str = None
    studentID: str = None
    


# put request (upload the student data)

#get request to get the demographic info 

# get email

# get first / last name
 
 # get form information 
 # get the high school 
 #get parent data (dictionary)
