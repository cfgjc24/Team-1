from typing import List 
from uuid import UUID

from daos.student_dao import StudentDAO
from student_schema import FormInfo, ParentData, StudentDemographics, Student

student_dao = StudentDAO()

class StudentService:
    def create_student(self, Student) -> Student: 
        return student_dao.create(Student)
    
    