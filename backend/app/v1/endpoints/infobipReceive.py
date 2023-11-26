# /v1/endpoints/infobipSend.py

from fastapi import APIRouter
# import logging

# from core.schemas.schema import /Canvas
import os
# from infobip_channels.sms.channel import SMSChannel
from dotenv import load_dotenv

# logging.basicConfig(level=logging.INFO)

from pydantic import BaseModel, Field
from typing import List, Optional

from app.v1.functions.getLLMResponse import getLLMResponse
from app.v1.functions.sendSMS import sendSMS


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

@router.post("/")
async def infobipReceive(body: InfobipResponse):
    palm_response = ""
    if body.results:  # Check if there is at least one message
        message = body.results[0].cleanText
        print("Received message: " + message)

        # Assuming getLLMResponse is a function that returns a string
        palm_response = getLLMResponse(message)
        print("PaLM Response: " + palm_response)
        
        sendSMS(palm_response)

    return "Query Response" + palm_response
