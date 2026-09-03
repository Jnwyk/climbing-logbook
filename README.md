# Climbing Logbook

Climbing Logbook is a full-stack application designed as a comprehensive tool
for recording and reviewing a wide variety of climbing ascents.

![alt text](image.png)

## Features

- Create an account and sign in.
- Explore climbing areas and crags.
- Add your own climbing areas and crags. _(In progress)_
- Record ascents with a date, style, grade, rating, and personal notes.
- Browse routes and review their ascent histories. _(In progress)_

## Tech stack

- **Frontend:** React, TypeScript, Vite, and Tailwind CSS
- **Backend:** Node.js, Express, TypeScript, and Prisma ORM
- **Database:** PostgreSQL

## Project structure

```text
climbing-logbook/
|-- client/          # React frontend
|-- server/          # Express API, Prisma schema, migrations, and tests
|-- compose.yaml     # Local Docker services
`-- README.md
```

## Getting started

### Prerequisites

- Node.js 24 or newer
- npm
- PostgreSQL
- Docker Desktop and Docker Compose (for the planned container workflow)

### Environment variables

Create `server/.env`:

```dotenv
PORT=8000
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/DATABASE
JWT_SECRET=replace-with-a-long-random-value
```

Create `client/.env.development`:

```dotenv
VITE_API_URL=http://localhost:8000
```

### Run locally

Install the backend dependencies, apply the database migrations, seed the
database, and start the API:

```powershell
cd server
npm install
npx prisma migrate deploy
npx prisma db seed
npm run dev
```

In another terminal, install and start the frontend:

```powershell
cd client
npm install
npm run dev
```

Open the URL printed by Vite, normally
[http://localhost:5173](http://localhost:5173). The API runs at
[http://localhost:8000](http://localhost:8000).

### Run with Docker

> Docker support is in progress. `compose.yaml` is available, but the client
> and server Dockerfiles still need to be added before this workflow can run.

Once the Docker build files are available, copy `.env.example` to `.env`, set
secure credentials, and run:

```powershell
docker compose up --build
```

The planned container endpoints are:

- Frontend: [http://localhost:3000](http://localhost:3000)
- API: [http://localhost:8080](http://localhost:8080)
- PostgreSQL: `localhost:5333`

Stop the containers with:

```powershell
docker compose down
```
