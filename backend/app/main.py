"""FastAPI application entry point."""

from fastapi import FastAPI

from app.routers import availability

app = FastAPI(title="Ugljan by Boat API", version="0.1.0")
app.include_router(availability.router)


@app.get("/health", tags=["ops"])
def health() -> dict[str, str]:
    return {"status": "ok"}
