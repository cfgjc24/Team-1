from typing import List
from uuid import UUID

from dbinstance import db
from schemas.student_demographics_schema import StudentDemographics
from daos.studentDemographics import StudentDemographicsDAO

student_demographics_dao = StudentDemographicsDAO()

class StudentDemographicService:
    def create_item(self, student_dem_create: StudentDemographics) -> StudentDemographics:
        return student_demographics_dao.create(student_dem_create)

    def list_student_demographics(self) -> List[StudentDemographics]:
        return student_demographics_dao.list()