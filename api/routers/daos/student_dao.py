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
        #populating student progress default vall - has own UUID 
        data["studentProgress"]["student_progress_ID"] = str(uuid4())

        #populating demographics 
        data["studentDemographic"]["studentID"] = str(gen_uuid)
        # student demographic has own uuid
        data["studentDemographic"]["demographicID"] = str(uuid4())
        

        print(data["studentID"])
        doc_ref = db.collection(self.collection_name).document(str(gen_uuid))
        doc_ref.set(data)
        return self.get_student(student_create.studentID)
    


   #edits the modules that they have done 
    def edit_module_completion_status(self, id: str,  updated_module: int, student_update: Student) :
        data = student_update.dict()
        doc_ref = db.collection(self.collection_name).document(str(id))
        
        # update the following module 
        if(updated_module == 1):
            data["studentProgress"]["module1"] = True
        elif(updated_module == 2):
            data["studentProgress"]["module2"] = True
        elif(updated_module == 3):
            data["studentProgress"]["module3"] = True
        elif(updated_module == 4):
            data["studentProgress"]["module4"] = True
        elif(updated_module == 5):
            data["studentProgress"]["module5"] = True
        elif(updated_module == 6):
            data["studentProgress"]["module6"] = True
        elif(updated_module == 7):
            data["studentProgress"]["module7"] = True
        elif(updated_module == 8):
            data["studentProgress"]["module8"] = True

        doc_ref.update(data)
        return self.get_student(id)

    def get_students(self) -> List[Student]:
        student_ref = db.collection(self.collection_name)
        return [
            Student(**doc.get().to_dict())
            for doc in student_ref.list_documents()
            if doc.get().to_dict()
        ]
        
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


    # Retrieve the parent information of a student by studentID.
    def get_parent_info(self, id: str) -> map:
        doc_ref = db.collection(self.collection_name).document(str(id))
        doc = doc_ref.get()
        if doc.exists:
            doc_dict = doc.to_dict()
            parent_info = doc_dict.get('parent_data', None)           
            return parent_info              
        else:
            print("No such student exists.")
        return None

    # Retrieve the high school information of a student by studentID.
    def get_high_school_info(self, id: str) -> str:
        doc_ref = db.collection(self.collection_name).document(str(id))
        doc = doc_ref.get()
        if doc.exists:
            high_school_info = doc.to_dict().get('high_school', None)           
            return high_school_info
        else:
            print("No such student exists.")
        return None
