# main.py
from fastapi import FastAPI
from app.v1.api import router as v1_router
from infobip_channels.sms.channel import SMSChannel

app = FastAPI(description="API for TrailGuide", version="1.0")

# Including API version 1
app.include_router(v1_router, prefix="/v1")

@app.get("/")
async def root():
    return {"message": "Hello World"}
