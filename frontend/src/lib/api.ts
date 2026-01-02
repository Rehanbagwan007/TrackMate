import { get } from 'lodash'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000/api'

function headers(token?: string) {
  const h: Record<string,string> = { 'Content-Type': 'application/json' }
  if (token) h['Authorization'] = `Bearer ${token}`
  return h
}

export async function login(email: string, password: string) {
  const res = await fetch(`${API_BASE}/auth/login`, { method: 'POST', headers: headers(), body: JSON.stringify({ email, password }) })
  const data = await res.json()
  if (!res.ok) throw new Error(get(data,'error', 'Login failed'))
  return data
}

export async function me(token: string) {
  const res = await fetch(`${API_BASE}/auth/me`, { headers: headers(token) })
  const data = await res.json()
  if (!res.ok) throw new Error(get(data,'error', 'Failed to fetch user'))
  return data
}

export async function fetchStudentDashboard(token: string) {
  // simple aggregated endpoint not implemented on backend yet; use user/me + enrollment endpoints
  // For now return minimal placeholders to the UI; backend endpoints can be expanded.
  const res = await fetch(`${API_BASE}/auth/me`, { headers: headers(token) })
  const user = await res.json()
  return { upcomingClasses: [], announcements: [], user }
}

export async function createDepartment(token: string, payload: any) {
  const res = await fetch(`${API_BASE}/enrollment/departments`, { method: 'POST', headers: headers(token), body: JSON.stringify(payload) })
  return res.json()
}

export async function listDepartments(token: string) {
  const res = await fetch(`${API_BASE}/enrollment/departments`, { headers: headers(token) })
  return res.json()
}

export async function listHods(token: string) {
  const res = await fetch(`${API_BASE}/enrollment/hods`, { headers: headers(token) })
  return res.json()
}

export async function createHod(token: string, payload: any) {
  const res = await fetch(`${API_BASE}/enrollment/hods`, { method: 'POST', headers: headers(token), body: JSON.stringify(payload) })
  return res.json()
}

export async function createFaculty(token: string, payload: any) {
  const res = await fetch(`${API_BASE}/enrollment/faculty`, { method: 'POST', headers: headers(token), body: JSON.stringify(payload) })
  return res.json()
}

export async function listFaculty(token: string) {
  const res = await fetch(`${API_BASE}/enrollment/faculty`, { headers: headers(token) })
  return res.json()
}

export async function listStudents(token: string) {
  const res = await fetch(`${API_BASE}/enrollment/students`, { headers: headers(token) })
  return res.json()
}

export async function createStudent(token: string, payload: any) {
  const res = await fetch(`${API_BASE}/enrollment/students`, { method: 'POST', headers: headers(token), body: JSON.stringify(payload) })
  return res.json()
}

export default { login, me, fetchStudentDashboard, createDepartment, listDepartments, listHods, createHod, createFaculty, listFaculty, listStudents, createStudent }
