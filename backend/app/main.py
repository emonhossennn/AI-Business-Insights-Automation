from fastapi import FastAPI
from pydantic import BaseModel
import openai
import pandas as pd
from sklearn.ensemble import IsolationForest

# Initialize FastAPI app
app = FastAPI()

# Sample route for AI insights
@app.get("/insight/")
def get_insight(data: str):
    # Mock data processing and AI generation (replace with your logic)
    insight = "The revenue dropped due to high churn in the mobile segment."
    return {"insight": insight}

# Running the FastAPI server with Uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
