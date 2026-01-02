// Placeholder file describing Classroom model usage for future attendance.
// Actual DB model defined in Prisma schema; this helper centralizes future logic.

export type Classroom = {
  id: string
  instituteId: string
  name: string
  latitude: number
  longitude: number
  radiusMeters: number
}

// Use this file later to add business logic for classroom management
