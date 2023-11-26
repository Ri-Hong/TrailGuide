# /v1/endpoints/infobipSend.py

from fastapi import APIRouter
# from core.schemas.schema import /Canvas
import os
from infobip_channels.sms.channel import SMSChannel
from dotenv import load_dotenv

load_dotenv()  # This loads the variables from .env into the environment

router = APIRouter()

@router.post("/")
async def infobipSend():
    channel = SMSChannel.from_auth_params({
        "base_url": os.environ.get('INFOBIP_BASE_URL'),
        "api_key": os.environ.get('INFOBIP_API_KEY'),
    })

    sms_response = channel.send_sms_message({
        "messages": [{
            "destinations": [{
                "to": os.environ.get('RIS_PHONE_NUMBER')
                }],
            "from": os.environ.get('INFOBIP_PHONE_NUMBER'),
            "text": "Hi! I'm your first Infobip message. Have a lovely day!"
                }
            ]
        }
    )

    print(sms_response)

    # return sms_response
    return "Hello World"
