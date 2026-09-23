"""Availability endpoints."""

from datetime import datetime

from fastapi import APIRouter

from app.services.availability import is_free

router = APIRouter(prefix="/availability", tags=["availability"])

# TODO: replace with blocked times read from the database
_BLOCKED: list[tuple[datetime, datetime]] = []


@router.get("")
def check(start: datetime, end: datetime) -> dict[str, bool]:
    return {"free": is_free(start, end, _BLOCKED)}
