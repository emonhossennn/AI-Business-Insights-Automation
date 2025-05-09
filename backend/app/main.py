from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import openai
import pandas as pd
from sklearn.ensemble import IsolationForest
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure OpenAI
openai.api_key = os.getenv("OPENAI_API_KEY")

# Initialize FastAPI app
app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Sample route for AI insights
@app.get("/insight/")
def get_insight(data: str):
    try:
        # Mock data processing and AI generation (replace with your logic)
        insight = "The revenue dropped due to high churn in the mobile segment."
        return {"insight": insight}
    except Exception as e:
        return {"error": str(e)}

# Running the FastAPI server with Uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
