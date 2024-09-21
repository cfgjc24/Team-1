from typing import List
from uuid import UUID

from dbinstance import db
from schemas.tutor_schema import Tutor
from daos.tutor import TutorDAO

tutor_dao = TutorDAO()


class TutorService:
    def create_item(self, tutor_create: Tutor) -> Tutor:
        return tutor_dao.create(tutor_create)

    # def get_item(self, id: UUID) -> Item:
    #     return tutor_dao.get(id)

    def list_tutors(self) -> List[Tutor]:
        return tutor_dao.list()

    # def update_item(self, id: UUID, item_update: ItemUpdate) -> Item:
    #     return item_dao.update(id, item_update)

    # def delete_item(self, id: UUID) -> None:
    #     return item_dao.delete(id)