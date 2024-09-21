from typing import List 
from uuid import UUID
from routers.dbinstance import db 
from pydantic import BaseModel, TypeAdapter, Field
from student_schema import FormInfo, ParentData, StudentDemographics, Student
class StudentDAO: 
    # this is the name of the tables that
    # youll be referencing 
   collection_name = "Student" 

   def create(self, student_create: Student) -> Student: 
        data = student_create.dict()
        data["studentID"] = str(Field(default_factor=uuid4))
        data["tutorID"] = str(student_create.tutorID)
        doc_ref = db.collection(self.collection_name).document(str(student_create.studentID))
        doc_ref.set(data)
        return self.get(student_create.studentID)



