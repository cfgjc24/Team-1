from typing import List 
from uuid import UUID, uuid4
from dbinstance import db 
from pydantic import BaseModel, TypeAdapter, Field
from schemas.student_schema import FormInfo, ParentData, StudentDemographics, Student, StudentProgress
class StudentDAO: 
    # this is the name of the tables that
    # youll be referencing 
   collection_name = "Student" 

    

   def create(self, student_create: Student) -> Student: 
        data = student_create.dict()
        gen_uuid = uuid4()


        # setting up the new student 
        data["studentID"] = str(gen_uuid)
        data["tutorID"] = str(student_create.tutorID)

        # creating the objects to go inside the create new student 
        
        data["studentProgress"][""]

        data["studentDemographic"]["studentID"] = str(gen_uuid)
        

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
            specific_value = doc.to_dict().get('form_info', None)
            return specific_value
        else:
            print("No such document exists.")

   def get_first_last_name(self, id: str) -> []:
        doc_ref = db.collection(self.collection_name).document(str(id))
        doc = doc_ref.get()
        if doc.exists:
            doc_dict  = doc.to_dict()
            first_last_name = [doc_dict.get('first_name'), doc_dict.get('last_name')]
            print(first_last_name)
            return first_last_name
        else: 
            print("no such entry exists in student table")



