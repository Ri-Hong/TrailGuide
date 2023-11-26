from fastapi import APIRouter
from .endpoints import infobipSend, infobipReceive

router = APIRouter()

router.include_router(infobipSend.router, tags=["infobipSend"], prefix="/infobipSend")
router.include_router(infobipReceive.router, tags=["infobipReceive"], prefix="/infobipReceive")
