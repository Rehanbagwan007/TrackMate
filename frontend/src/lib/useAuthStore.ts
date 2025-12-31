import create from 'zustand'

type UserContext = {
  id: string | null
  name: string | null
  email: string | null
  role: string | null
  instituteId: string | null
}

type AuthState = {
  user: UserContext
  token: string | null
  setAuth: (user: UserContext, token: string) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: { id: null, name: null, email: null, role: null, instituteId: null },
  token: null,
  setAuth: (user, token) => set({ user, token }),
  clearAuth: () => set({ user: { id: null, name: null, email: null, role: null, instituteId: null }, token: null }),
}))

// Notes:
// - Frontend must never store Supabase keys or talk to Supabase directly.
// - `instituteId` is provided by backend in the authenticated user context and persisted here.
