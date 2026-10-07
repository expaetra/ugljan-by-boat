# Backend (v2 scaffold)

This directory holds the prepared structure for version 2 of Ugljan by Boat: an NLP booking assistant. It is intentionally thin right now: the business runs one boat, and at that scale a phone call converts better than a booking engine. The owner plans to expand the fleet next season, and when several boats need scheduling, this scaffold becomes the implementation plan.

## Planned architecture

```
frontend (React) --> FastAPI --> PostgreSQL
                       |
                       +--> nlp/ (intent + slots + dates)
```

| Piece | Status | Purpose |
| --- | --- | --- |
| `app/main.py` | working | FastAPI app with a health endpoint |
| `app/config.py` | working | Settings via pydantic-settings, env-driven |
| `app/core/service_types.py` | working | The service catalogue (rental, taxi, excursions, sunset tours) |
| `app/services/availability.py` | working | Interval-overlap logic: which time ranges are free to book |
| `app/routers/availability.py` | working | `GET /availability?start=&end=` backed by the logic above (in-memory blocked times for now) |
| `app/routers/bookings.py`, `app/routers/assistant.py` | planned | REST endpoints for bookings and the assistant |
| `app/models/`, `app/schemas/` | planned | SQLAlchemy models and Pydantic schemas for bookings and blocked time |
| `app/nlp/` | planned | The assistant core: intent classification, slot filling, date resolution with `dateparser`, clarification questions |
| `notebooks/` | planned | Dataset building, model training or prompting, evaluation |
| `data/` | planned | Train and test utterances for the NLP module |

## How v2 will work

A visitor writes a message like "is the boat free next Saturday afternoon for 4 people?". The NLP module classifies the intent (availability question), fills the slots (date, time of day, party size), resolves "next Saturday" to a concrete date, and either answers from the availability service or asks a clarifying question. Bookings and blocked time live in PostgreSQL; the same availability logic backs a calendar in the frontend (prepared in `frontend/src/components/_later/`).

## Running what exists

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
# health check:        http://localhost:8000/health
# availability check:  http://localhost:8000/availability?start=2026-07-01T09:00&end=2026-07-01T13:00
# interactive docs:    http://localhost:8000/docs
```
