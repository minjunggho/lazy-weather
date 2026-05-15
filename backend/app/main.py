from fastapi import FastAPI

app = FastAPI(title="Lazy Weather API")

@app.get("/")
def root():
    return {"message": "Lazy Weather API is running"}