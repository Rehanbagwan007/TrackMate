//import create from 'zustand'

import { create } from 'zustand';
import api from './api'

type LoginPayload = { email: string; password: string }

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
  login: async (payload: LoginPayload) => {
    const { email, password } = payload
    const data = await api.login(email, password)
    set({ token: data.token, user: data.user })
    return data
  },
  clearAuth: () => set({ user: { id: null, name: null, email: null, role: null, instituteId: null }, token: null }),
}))

// Notes:
// - Frontend must never store Supabase keys or talk to Supabase directly.
// - `instituteId` is provided by backend in the authenticated user context and persisted here.
