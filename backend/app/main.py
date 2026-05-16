from fastapi import FastAPI

app = FastAPI(title="Lazy Weather API")

@app.get("/")
def root():
    return {"message": "Lazy Weather API is running"}

@app.get("/weather-advice/{city}")
def get_weather_advice(city: str):
    return {
        "city": "Berkeley",
        "today_temp_c": 18,
        "yesterday_temp_c": 15,
        "difference_c": 3,
        "comparison": "warmer",
        "advice": "Today is a little warmer than yesterday. A light layer should be enough."
        }