from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

url = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=url,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class input(BaseModel):
    body: str

@app.post("/convertCode")
def convertCode(data: input):
    inputText = data.body

    modifiedText = inputText.upper()

    return {"modifiedText": modifiedText}
