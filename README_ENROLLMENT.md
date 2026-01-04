TrackMate Enrollment & Multi-tenant Backend Notes
===============================================

Overview
--------
- Multi-tenant model: single DB, shared schema, tenant isolation via `instituteId`.
- Backend (Express + TypeScript) is the only layer talking to Supabase & the DB.
- Prisma used as ORM; Prisma schema in `prisma/schema.prisma`.

Quick setup
-----------
1. Set env variables:

```
DATABASE_URL="postgresql://..."  # Supabase Postgres
SUPABASE_URL="https://..."
SUPABASE_SERVICE_ROLE_KEY="..."
JWT_SECRET="replace-with-secure-secret"
```

2. Generate Prisma client and push schema:

```
npx prisma generate
npx prisma db push
```

3. Run seed (creates example institute + admin):

```
node -r ts-node/register prisma/seed.ts
```

Design highlights
-----------------
- Every record includes `instituteId` and Prisma queries in services must filter by it.
- Composite unique constraints enforce `email` uniqueness per `instituteId`.
- Role hierarchy enforced in service layer (no direct liberties to frontend).
- Supabase storage uses path-per-institute (e.g., `instituteId/...`) or bucket-per-institute if needed.

Files added
-----------
- `prisma/schema.prisma` — schema with Institute, User, Department, StudentAcademicProfile, FacultySubject
- `prisma/seed.ts` — seed example institute + institute admin
- `backend/src/prisma/client.ts` — Prisma client wrapper
- `backend/src/lib/supabaseClient.ts` — Supabase client + storage path helper
- `backend/src/middleware/auth.ts` — JWT auth middleware & role guard
- `backend/src/middleware/tenant.ts` — tenant assertion helper
- `backend/src/services/enrollmentService.ts` — Enrollment logic (createDepartment, createHod, createFaculty, enrollStudent)
- `frontend/src/lib/useAuthStore.ts` — Zustand snippet for storing user + institute context

Future device integration
-------------------------
- `User` model includes nullable `faceData`, `rfidUid`, `biometricTemplate` placeholders.
- Devices should call backend-only endpoints (protected) to update these fields — backend will validate institute and device credentials.
- Consider separate secure service/microservice for biometric storage and matching (avoid storing raw images in DB).

Security & tenant-isolation checklist
-----------------------------------
- Always inject `instituteId` server-side from authenticated user.
- Prisma queries in service layer MUST include `instituteId` filtering.
- Never accept `instituteId` from the frontend.
- Use composite unique constraints to prevent cross-tenant collisions (e.g., `@@unique([instituteId, email])`).



