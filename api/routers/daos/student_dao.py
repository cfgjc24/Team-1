from dataclasses import dataclass, field
from typing import List
from uuid import UUID, uuid4

from dbinstance import db
from schemas.tutor_schema import Tutor
from schemas.student_schema import Student
class TutorDAO:
    collection_name = "Tutor"

    def create(self, tutor_create: Tutor) -> Tutor:
        data = tutor_create.dict()
        data["TutorID"] = str(field(default_factory=uuid4))
        doc_ref = db.collection(self.collection_name).document(str(tutor_create.TutorID))
        doc_ref.set(data)
        return self.get(tutor_create.TutorID)

    def get(self, id: UUID) -> Tutor:
        doc_ref = db.collection(self.collection_name).document(str(id))
        doc = doc_ref.get()
        if doc.exists:
            return Tutor(**doc.to_dict())
        return None

    def list(self) -> List[Tutor]:
        tutors_ref = db.collection(self.collection_name)
        return [
            Tutor(**doc.get().to_dict())
            for doc in tutors_ref.list_documents()
            if doc.get().to_dict()
        ]

    # def update(self, id: UUID, item_update: Tutor) -> Tutor:
    #     data = item_update.dict()
    #     doc_ref = db.collection(self.collection_name).document(str(id))
    #     doc_ref.update(data)
    #     return self.get(id)

    # def delete(self, id: UUID) -> None:
    #     db.collection(self.collection_name).document(str(id)).delete()