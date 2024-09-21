from datetime import datetime
from fastapi import APIRouter

from logger import logger
from schemas.health import HealthcheckResponse

router = APIRouter()