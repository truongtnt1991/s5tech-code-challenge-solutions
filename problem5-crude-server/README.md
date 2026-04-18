# Problem 5: Crude Server

A simple CRUD backend server built with Express and TypeScript. The application uses Prisma ORM with SQLite for data persistence and follows a layered architecture with controllers, services, and middleware.

## Overview

This service exposes RESTful APIs to manage resources. It demonstrates:

- CRUD operations
- Database integration using Prisma
- Structured architecture (routes, controllers, services)
- Centralized error handling
- Consistent API response format

## Tech Stack

- Node.js
- Express
- TypeScript
- Prisma ORM
- SQLite
- Swagger (OpenAPI)

## Setup

Install dependencies:

`npm install`

## Environment Variables

Create a `.env` file based on `.env.example`:

Then update values if needed:

NODE_ENV=development
PORT=3000
LOG_LEVEL=info
CORS_ORIGIN=*
DATABASE_URL="file:./dev.db"

## Prisma Setup

Generate Prisma client:

`npm run prisma:generate`

Run database migration (development):

`npm run prisma:migrate`

## Run Application

Start development server:

`npm run dev`

Build project:

`npm run build`

Start production server:

`npm run start`

Server runs at:

http://localhost:3000

## Swagger API Documentation

Swagger UI is available at:

http://localhost:3000/api/docs

## Deployment

Full deployment flow:

1. Install dependencies

`npm install`

2. Generate Prisma client

`npm run prisma:generate`

3. Apply migrations

`npm run prisma:deploy`

4. Build application

`npm run build`

5. Start server

`npm run start`

## API Endpoints

### Create Resource

POST /resources

Request body:

{
  "name": "Sample Resource",
  "description": "Optional description"
}

Response:

{
  "success": true,
  "message": "Resource created successfully",
  "statusCode": 201,
  "data": {
    "id": "uuid",
    "name": "Sample Resource",
    "description": "Optional description",
    "createdAt": "ISO date",
    "updatedAt": "ISO date"
  }
}

---

### List Resources

GET /resources

Optional query:

GET /resources?name=sample

Response:

{
  "success": true,
  "message": "Resources fetched successfully",
  "statusCode": 200,
  "data": [{
    "id": "uuid",
    "name": "Sample Resource",
    "description": "Optional description",
    "createdAt": "ISO date",
    "updatedAt": "ISO date"
  }]
}

---

### Get Resource Detail

GET /resources/:id

Response:

{
  "success": true,
  "message": "Resource fetched successfully",
  "statusCode": 200,
  "data": {
    "id": "uuid",
    "name": "Sample Resource",
    "description": "Optional description",
    "createdAt": "ISO date",
    "updatedAt": "ISO date"
  }
}

---

### Update Resource

PUT /resources/:id

Request body:

{
  "name": "Updated name",
  "description": "Updated description"
}

Response:

{
  "success": true,
  "message": "Resource updated successfully",
  "statusCode": 200,
  "data": {
    "id": "uuid",
    "name": "Updated name",
    "description": "Updated description",
    "createdAt": "ISO date",
    "updatedAt": "ISO date"
  }
}

---

### Delete Resource

DELETE /resources/:id

Response:

{
  "success": true,
  "message": "Resource deleted successfully",
  "statusCode": 200
}

---

### Health Check

GET /api/health

GET /api/health/detailed

## Testing with cURL

Create resource:

curl -X POST http://localhost:3000/resources \
-H "Content-Type: application/json" \
-d '{"name":"Test","description":"Demo"}'

Get all resources:

curl http://localhost:3000/resources

Get detail:

curl http://localhost:3000/resources/{id}

Update:

curl -X PUT http://localhost:3000/resources/{id} \
-H "Content-Type: application/json" \
-d '{"name":"Updated"}'

Delete:

curl -X DELETE http://localhost:3000/resources/{id}

## Prisma Notes

- prisma migrate dev is used in development
- prisma migrate deploy is used in production
- prisma generate generates the Prisma client