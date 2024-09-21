import os
import time
from typing import Any, Callable
from datetime import datetime

from api.routers import tutor_router
from logger import logger
from schemas.health import HealthcheckResponse


from fastapi import FastAPI, Request, APIRouter


from routers import admin, student, health



os.environ["TZ"] = "UTC"
router = APIRouter()
#
#   create the api
#
app = FastAPI(title=f"Firestore FastAPI: {"cfg-team1-46273"}", version="0.0.1")

@router.get("/healthcheck", response_model=HealthcheckResponse, tags=["health"])
def healthcheck() -> HealthcheckResponse:
    message = "healthy"
    logger.debug(message)
    return HealthcheckResponse(
        message=message,
        version="0.0.1",
        time=datetime.now(),
    )

app.include_router(router)