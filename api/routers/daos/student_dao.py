from typing import List 
from uuid import UUID, uuid4
from dbinstance import db 
from pydantic import BaseModel, TypeAdapter, Field
from schemas.student_schema import FormInfo, ParentData, StudentDemographics, Student
class StudentDAO: 
    # this is the name of the tables that
    # youll be referencing 
   collection_name = "Student" 

   def create(self, student_create: Student) -> Student: 
        data = student_create.dict()
        gen_uuid = uuid4()
        data["studentID"] = str(gen_uuid)
        data["tutorID"] = str(student_create.tutorID)
        data["studentDemographic"]["studentID"] = str(gen_uuid)
        data["studentProgress.student_progress_ID"] = str(gen_uuid)

        print(data["studentID"])
        doc_ref = db.collection(self.collection_name).document(str(gen_uuid))
        doc_ref.set(data)
        return self.get_student(student_create.studentID)
    
   def get_student(self, id: str) -> Student:
        doc_ref = db.collection(self.collection_name).document(str(id))
        doc = doc_ref.get()
        if doc.exists:
            return Student(**doc.to_dict())
        return 
    
   def get_form_information(self, id: str) -> map:
        doc_ref = db.collection(self.collection_name).document(str(id))
        doc = doc_ref.get()
        if doc.exists:
            # Get the specific field (key) you want
            print(doc)

            specific_value = doc.to_dict().get('form_info', None)
            print(specific_value)
            return specific_value
        else:
            print("No such document exists.")

