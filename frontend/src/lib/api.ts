import { get } from 'lodash'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000/api'

async function handleResponse(res: Response) {
  const data = await res.json();
  if (!res.ok) {
    throw new Error(get(data, 'error', `API request failed with status ${res.status}`));
  }
  return data;
}

function headers(token?: string) {
  const h: Record<string,string> = { 'Content-Type': 'application/json' };
  if (token) h['Authorization'] = `Bearer ${token}`;
  return h;
}

export async function login(email: string, password: string) {
  const res = await fetch(`${API_BASE}/auth/login`, { method: 'POST', headers: headers(), body: JSON.stringify({ email, password }) });
  return handleResponse(res);
}

export async function me(token: string) {
  const res = await fetch(`${API_BASE}/auth/me`, { headers: headers(token) });
  return handleResponse(res);
}

export async function fetchStudentDashboard(token: string) {
  const res = await fetch(`${API_BASE}/auth/me`, { headers: headers(token) });
  const user = await handleResponse(res);
  // Placeholder data as before
  return { upcomingClasses: [], announcements: [], user };
}

export async function createDepartment(token: string, payload: any) {
  const res = await fetch(`${API_BASE}/enrollment/departments`, { method: 'POST', headers: headers(token), body: JSON.stringify(payload) });
  return handleResponse(res);
}

export async function listDepartments(token: string) {
  const res = await fetch(`${API_BASE}/enrollment/departments`, { headers: headers(token) });
  return handleResponse(res);
}

export async function listHods(token: string) {
  const res = await fetch(`${API_BASE}/enrollment/hods`, { headers: headers(token) });
  return handleResponse(res);
}

export async function createHod(token: string, payload: any) {
  const res = await fetch(`${API_BASE}/enrollment/hods`, { method: 'POST', headers: headers(token), body: JSON.stringify(payload) });
  return handleResponse(res);
}

export async function createFaculty(token: string, payload: any) {
  const res = await fetch(`${API_BASE}/enrollment/faculty`, { method: 'POST', headers: headers(token), body: JSON.stringify(payload) });
  return handleResponse(res);
}

export async function listFaculty(token: string) {
  const res = await fetch(`${API_BASE}/enrollment/faculty`, { headers: headers(token) });
  return handleResponse(res);
}

export async function listStudents(token: string) {
  const res = await fetch(`${API_BASE}/enrollment/students`, { headers: headers(token) });
  return handleResponse(res);
}

export async function createStudent(token: string, payload: any) {
  const res = await fetch(`${API_BASE}/enrollment/students`, { method: 'POST', headers: headers(token), body: JSON.stringify(payload) });
  return handleResponse(res);
}

export default { login, me, fetchStudentDashboard, createDepartment, listDepartments, listHods, createHod, createFaculty, listFaculty, listStudents, createStudent };
