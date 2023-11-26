# /v1/endpoints/infobipSend.py

from fastapi import APIRouter
import logging

# from core.schemas.schema import /Canvas
import os
# from infobip_channels.sms.channel import SMSChannel
from dotenv import load_dotenv

logging.basicConfig(level=logging.INFO)

from pydantic import BaseModel, Field
from typing import List, Optional

class PriceInfo(BaseModel):
    pricePerMessage: float
    currency: str

class Message(BaseModel):
    messageId: str
    from_number: str = Field(..., alias='from')  # Using alias
    to: str
    text: str
    cleanText: str
    keyword: Optional[str]
    receivedAt: str
    smsCount: int
    price: PriceInfo
    callbackData: Optional[str]

class InfobipResponse(BaseModel):
    results: List[Message]
    messageCount: int
    pendingMessageCount: int

load_dotenv()  # This loads the variables from .env into the environment

router = APIRouter()

# @router.post("/")
# async def infobipReceive(body: InfobipResponse):
@router.post("/")
async def infobipReceive(body: InfobipResponse):
    print(body)  # This will print the entire request body
    # You can access and process the data as needed
    # For example: print(body.results[0].text)
    return "Received message"
