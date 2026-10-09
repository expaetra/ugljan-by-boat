# Ugljan by Boat

**Live site: [ugljanbyboat.com](https://ugljanbyboat.com)**

A booking site for a boat rental and tours business on the island of Ugljan, in the Zadar archipelago, Croatia. Built as paid client work. The site has served the business since 2025; this React version replaced the original WordPress build in July 2026, cutting hosting costs by ~60%. It brings in bookings through phone, WhatsApp, Viber and the contact form.

<img width="1270" height="600" alt="website-screenshot-ubb" src="https://github.com/user-attachments/assets/7116addf-cef6-4e23-92d1-19383cebe0ef" />


## What it does

The site covers four services: boat rental, taxi boat, excursions and sunset tours. Each has its own page with pricing and photo galleries. The goal is to get a visitor to send a booking enquiry, either by tapping a contact channel or through the contact form.

Visits are tracked with self-hosted [Umami](https://umami.is/) analytics. No cookies nor Google.

## Tech stack

| Layer | Technology |
| --- | --- |
| Frontend | React 18, Vite, Tailwind CSS 4, React Router 6 |
| Serving | nginx (SPA) behind Caddy 2 with automatic HTTPS |
| Infrastructure | Docker Compose on a DigitalOcean droplet |
| Analytics | Self-hosted Umami on `data.ugljanbyboat.com` |
| Backend (v2 scaffold) | FastAPI, SQLAlchemy, PostgreSQL 16 (see roadmap below) |

## Architecture

```
                        +--------------- DigitalOcean droplet ----------+
Internet --> Caddy 2 ---|--> nginx --> React SPA (static build)         |
 (HTTPS, auto-TLS)      |--> Umami (data.ugljanbyboat.com)              |
                        +-----------------------------------------------+
```

Deploying is one command: `git pull && docker compose -f docker-compose.prod.yml up -d --build`.

The photos and the hero video are committed to the repo on purpose. It is a small fixed set of assets, and keeping them in git means the whole site is a single deploy artifact with no CDN to pay for or depend on. If the media library grows with the business, the next step will include moving to object storage.

## Design decisions

- **All business facts live in one file**, `frontend/src/lib/siteConfig.js`: prices, phone numbers, routes. When the owner changes a price, exactly one line changes.
- **The contact form doesn't trust its input.** Length limits, control character stripping, a minimum fill time to catch bots, and a timeout on sending.
- **Everything runs in containers**, so dev and prod behave the same and Caddy takes care of certificates on its own.

## Roadmap: v2, an NLP booking assistant

The owner plans to expand the fleet next season. With several boats, availability stops being something you can settle over the phone and becomes a scheduling problem. That is why the repo already contains the scaffold for v2 in `backend/`:

- A FastAPI + PostgreSQL service with routers for bookings, availability and an assistant endpoint
- An NLP module (`backend/app/nlp/`) for parsing booking requests written in natural language: intent classification, slot filling and date resolution with `dateparser`
- A notebook pipeline (`backend/notebooks/`) for building the utterance dataset, training and evaluation
- Working interval-overlap availability logic that will back the calendar

The scaffold is thin today (which is deliberate). With one boat, a phone call converts better than a booking engine. The structure is there so that v2 is an implementation and not a rewrite.

## Running locally

```bash
git clone https://github.com/expaetra/ugljan-by-boat.git
cd ugljan-by-boat

# Frontend only (fastest for UI work)
cd frontend && npm install && npm run dev

# Full stack with Docker
cp .env.example .env   # set a real Postgres password
docker compose up --build
```

## About

Designed, built, deployed and run by [Petra Ivas](https://ivas.is) for a client in Lukoran, Ugljan.
