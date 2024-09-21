from typing import List
from uuid import UUID

from dbinstance import db
from schemas.student import StudentDemographics


class StudentDemographicsDAO:
    collection_name = "StudentDemographics"

    def create(self, demographics: StudentDemographics) -> StudentDemographics:
        data = demographics.dict()
        data["demographicID"] = str(Field(default_factory=uuid4))  
        doc_ref = db.collection(self.collection_name).document(str(demographics.demographicID))
        doc_ref.set(data)  
        return self.get(demographics.demographicID)  
    
    def get(self, demographicID: UUID) -> StudentDemographics:
        doc_ref = db.collection(self.collection_name).document(str(demographicID))
        doc = doc_ref.get()
        if doc.exists:
            return StudentDemographics(**doc.to_dict())
        return None

    def list(self) -> List[Item]:
        items_ref = db.collection(self.collection_name)
        return [
            Item(**doc.get().to_dict())
            for doc in items_ref.list_documents()
            if doc.get().to_dict()
        ]

    def update(self, demographicID: UUID, demographics_update: StudentDemographics) -> StudentDemographics:
        data = demographics_update.dict()
        doc_ref = db.collection(self.collection_name).document(str(demographicID))
        doc_ref.update(data)
        return self.get(demographicID)


    def delete(self, id: UUID) -> None:
        db.collection(self.collection_name).document(str(id)).delete()

    # Gets age demographic
    def get_age(self, demographicID: UUID) -> Optional[int]:
        demographics = self.get(demographicID)
        if demographics:
            return demographics.age
        return None
    # Updates age demographic
    def update_age(self, demographicID: UUID, age: int) -> Optional[StudentDemographics]:
        doc_ref = db.collection(self.collection_name).document(str(demographicID))
        doc_ref.update({"age": age})
        return self.get(demographicID)

    # Gets gender demographic
    def get_gender(self, demographicID: UUID) -> Optional[str]:
        demographics = self.get(demographicID)
        if demographics:
            return demographics.gender
        return None

    # Gets disability status demographic
    def get_disability_status(self, demographicID: UUID) -> Optional[bool]:
        demographics = self.get(demographicID)
        if demographics:
            return demographics.hasDisability
        return None

    # Gets race demographic
    def get_race(self, demographicID: UUID) -> Optional[str]:
        demographics = self.get(demographicID)
        if demographics:
            return demographics.race
        return None
    # gets sexuality demographic
    def get_sexuality(self, demographicID: UUID) -> Optional[str]:
        demographics = self.get(demographicID)
        if demographics:
            return demographics.sexuality
        return None