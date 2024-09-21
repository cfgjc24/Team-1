from typing import List 
from uuid import UUID

from daos.student_dao import StudentDAO
from schemas.student_schema import FormInfo, ParentData, StudentDemographics, Student

student_dao = StudentDAO()

class StudentService:
    def create_student(self, Student) -> Student: 
        return student_dao.create(Student)

    def get_student(self, id: str):
        return student_dao.get_student(id)

    def get_form_information(self, id: str):
        return student_dao.get_form_information(id)
    
  
    