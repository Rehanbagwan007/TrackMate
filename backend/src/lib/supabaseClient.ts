import { createClient } from '@supabase/supabase-js'

// Backend-only Supabase client using service role key
const url = process.env.SUPABASE_URL || ''
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

if (!url || !key) {
  // do not throw here; let runtime error surface in operations
  console.warn('SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set — storage operations will fail')
}

export const supabase = createClient(url, key)

// Storage strategy: one bucket (e.g., "institutes") and path-per-institute: `${instituteId}/...`
// Alternatively create a bucket per institute programmatically if desired.

export function storagePathForInstitute(instituteId: string, path = '') {
  return `${instituteId}/${path}`.replace(/(^\/|\/\/$)/g, '')
}
