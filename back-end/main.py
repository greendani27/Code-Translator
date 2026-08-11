from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import genai
from dotenv import load_dotenv
import os

load_dotenv("environment.env")

app = FastAPI()

url = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=url,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

class Input(BaseModel):
    code: str
    toLanguage: str
    fromLanguage: str


def translateCode(
    code: str,
    firstLanguage: str,
    finalLanguage: str
) -> str:

    prompt = f"""
    Eres un experto traductor de código fuente.

    Convierte el siguiente código de {firstLanguage} a {finalLanguage}.
    
    Instrucciones estrictas:
    1. Devuelve ÚNICAMENTE el código traducido.
    2. No incluyas explicaciones, textos introductorios ni bloques explicativos.
    3. Mantén la misma lógica de negocio y utiliza las convenciones recomendadas del lenguaje destino.

    Código a traducir:

    {code}
    """

    response = client.models.generate_content(
        model="gemini-3.5-flash",
        contents=prompt
    )

    return response.text


@app.post("/convertCode")
def convertCode(data: Input):

    code = data.code
    toLanguage = data.toLanguage
    fromLanguage = data.fromLanguage

    modifiedText = translateCode(
        code,
        fromLanguage,
        toLanguage
    )

    print(modifiedText)

    return {
        "modifiedText": modifiedText
    }