# LinearNexus AI CRM

LinearNexus AI CRM is a modern, high-fidelity AI-powered Customer Relationship Management (CRM) system. It parses incoming email communications to automatically catalog contacts, log active leads, score interest, and track client interactions.

## Project Structure

This project is set up as a monorepo containing:
- **`frontend/`**: Next.js (App Router, Tailwind CSS, TypeScript)
- **`backend/`**: NestJS (TypeScript, Modular architecture)

---

## Tech Stack

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

### Backend
- **Framework**: NestJS
- **Language**: TypeScript
- **Configuration**: Built-in config mapping

---

## Getting Started

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **npm** installed on your system.

### 2. Environment Setup

Copy the example environment files in both folders:

**Frontend Environment:**
```bash
cd frontend
cp .env.local.example .env.local
```

**Backend Environment:**
```bash
cd backend
cp .env.example .env
```

Fill in the appropriate configuration keys as requested.

### 3. Installation & Run

#### Run Frontend
Navigate to the `frontend/` directory, install packages, and start the development server:
```bash
cd frontend
npm install
npm run dev
```
The frontend application will run on [http://localhost:3000](http://localhost:3000).

#### Run Backend
Navigate to the `backend/` directory, install packages, and start the NestJS server:
```bash
cd backend
npm install
npm run start:dev
```
The backend API server will run on [http://localhost:4000](http://localhost:4000).

---

## API Documentation

- **GET `/api/health`**: Returns system operational status.
  ```json
  {
    "status": "ok",
    "service": "linearnexus-backend",
    "timestamp": "2026-05-28T16:10:00Z"
  }
  ```

---

## Modules Directory Map

1. **Module 1**: Project Setup + Base UI Foundation (Current)
2. **Module 2**: Gmail & IMAP/SMTP Sync Engine (BullMQ + Redis)
3. **Module 3**: AI Enrichment & Categorization (Gemini & Groq API)
4. **Module 4**: Interactive Contacts Timeline & Activity Feeds
5. **Module 5**: AI Response Suggestion Engine (Drafting & Thread reply)
6. **Module 6**: Metrics Analytics & Pipeline Reporting
