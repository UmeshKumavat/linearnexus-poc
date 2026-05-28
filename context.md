# Project Context: LinearNexus AI CRM

## Project Overview
LinearNexus AI CRM is an AI-powered Customer Relationship Management (CRM) platform designed to automatically convert incoming emails into contacts, leads, and activity histories.

## Current State: Module 1 (Project Setup + Base UI Foundation)
We are currently setting up Module 1:
- Establishing a monorepo structure with `frontend/` (Next.js, TS, Tailwind CSS, App Router) and `backend/` (NestJS, TS).
- Creating all foundational static pages, high-fidelity responsive layouts, and basic placeholder data.
- Creating a modular backend structure with configuration settings and an operational health endpoint.

## Workspace Layout
- `frontend/`: Web client built on Next.js 14+ (App Router).
- `backend/`: API services built on NestJS.
- `context.md`: This project context and log file (root).
- `README.md`: Development commands and overview (root).

## Execution Logs & Changes Made
- **2026-05-28**: Completed Module 1 Setup:
  - Scaffolded Next.js (App Router, TS, Tailwind CSS) and NestJS (TS) in folders `frontend/` and `backend/`.
  - Created reusable frontend components: `AppSidebar`, `TopNavbar`, `DashboardLayout` for structural layout; and `StatCard`, `Badge`, `DataTable`, `EmptyState`, `PageHeader` for data representation.
  - Implemented Client Routes: `/login`, `/dashboard`, `/inbox`, `/contacts`, `/leads`, `/settings` with custom styling and mock data.
  - Designed split-screen LoginPage with full branding and marketing canvas.
  - Formulated environment templates (`.env.local.example`, `.env.example`).
  - Created modular NestJS backend structure: initialized config loading (`src/config/env.config.ts`) and configured GET `/api/health` check endpoints.
  - Verified backend compilation (`npm run build` succeeds) and frontend compilation (`npm run build` succeeds).
  - **CRM UI Redesign**: Redesigned workspace appearance based on reference screenshot details:
    - Updated sidebar to a clean white background (`#FFFFFF`) with light gray inactive icons and primary blue (`#2563EB`) rounded highlights for active states.
    - Revamped headers to circular user profile elements, envelope icons, and magnifying search inputs.
    - Transformed the Leads list view into a high-fidelity card-based Kanban board grid grouped by columns (New, Contacted, Qualified, Proposal).
    - Polished overall spacing, margins, borders, shadows, and badges on Dashboard, Inbox, Contacts, and Settings.
    - Re-designed the Leads page into a high-fidelity 4-column Kanban Board (New, Contacted, Qualified, Proposal) showing lead details with initials avatars, phone/email icons, score status ratings, and action controls.
    - Updated shadows (`shadow-saas`), scrollbars, borders, DataTable padding, and StatCard color themes (dark navy text `#2B3674`, gray text `#A3AED0`, brand blue `#2563EB`) to establish premium aesthetics.

## Future Plans & Integrations
- **Module 2 (Gmail & Sync Engine)**: IMAP/SMTP sync, Gmail OAuth, and queueing with BullMQ/Redis.
- **Module 3 (AI Enrichment & Classification)**: LLM (Gemini/Groq) parsing of emails, automated contact creation, and lead scoring.
- **Module 4 (Contact Timeline & Activity history)**: Unified timeline, activity log, and communications details.
- **Module 5 (AI Email Draft & Replying)**: Suggested drafts, thread view, and draft editing.
- **Module 6 (Dashboard & Analytics Reporting)**: Charts, metrics, response times, and sales pipeline analytics.
