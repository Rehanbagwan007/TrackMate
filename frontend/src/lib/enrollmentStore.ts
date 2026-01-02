import { create } from 'zustand'

import * as api from './api'
import { useAuthStore } from './useAuthStore'

type Dept = any
type Hod = any
type Faculty = any
type Student = any

type EnrollmentState = {
  departments: Dept[]
  hods: Hod[]
  faculty: Faculty[]
  students: Student[]
  loading: boolean
  error: string | null
  loadAll: () => Promise<void>
  createDepartment: (payload: any) => Promise<any>
  createHod: (payload: any) => Promise<any>
  createFaculty: (payload: any) => Promise<any>
  enrollStudent: (payload: any) => Promise<any>
}

export const useEnrollmentStore = create<EnrollmentState>((set, get) => ({
  departments: [],
  hods: [],
  faculty: [],
  students: [],
  loading: false,
  error: null,
  loadAll: async () => {
    const token = useAuthStore.getState().token
    if (!token) return
    set({ loading: true, error: null })
    try {
      const [departments, hods, faculty, students] = await Promise.all([
        api.listDepartments(token),
        api.listHods(token),
        api.listFaculty(token),
        api.listStudents(token),
      ])
      set({ departments, hods, faculty, students })
    } catch (err: any) {
      set({ error: String(err?.message || err) })
    } finally {
      set({ loading: false })
    }
  },
  createDepartment: async (payload) => {
    const token = useAuthStore.getState().token
    if (!token) throw new Error('Not authenticated')
    const res = await api.createDepartment(token, payload)
    get().loadAll()
    return res
  },
  createHod: async (payload) => {
    const token = useAuthStore.getState().token
    if (!token) throw new Error('Not authenticated')
    const res = await api.createHod(token, payload)
    get().loadAll()
    return res
  },
  createFaculty: async (payload) => {
    const token = useAuthStore.getState().token
    if (!token) throw new Error('Not authenticated')
    const res = await api.createFaculty(token, payload)
    get().loadAll()
    return res
  },
  enrollStudent: async (payload) => {
    const token = useAuthStore.getState().token
    if (!token) throw new Error('Not authenticated')
    const res = await api.createStudent ? await api.createStudent(token, payload) : await fetch(`${(import.meta.env.VITE_API_BASE || 'http://localhost:4000/api')}/enrollment/students`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(payload) }).then(r => r.json())
    get().loadAll()
    return res
  }
}))
