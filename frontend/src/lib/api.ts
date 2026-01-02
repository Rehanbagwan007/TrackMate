import { API_BASE_URL } from './config';

export async function login(email, password) {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    throw new Error('Login failed');
  }
  return res.json();
}

export async function me(token) {
  const res = await fetch(`${API_BASE_URL}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }
  return res.json();
}

export async function listDepartments(token: string) {
  const res = await fetch(`${API_BASE_URL}/enrollment/departments`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function createDepartment(token: string, data: any) {
    const res = await fetch(`${API_BASE_URL}/enrollment/departments`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res.json();
}

export async function createHod(token: string, data: any) {
  const res = await fetch(`${API_BASE_URL}/enrollment/hod`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function listHods(token: string) {
  const res = await fetch(`${API_BASE_URL}/admin/hods`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function listFaculty(token: string) {
    const res = await fetch(`${API_BASE_URL}/enrollment/faculty`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
}

export async function createFaculty(token: string, data: any) {
    const res = await fetch(`${API_BASE_URL}/enrollment/faculty`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res.json();
}

export async function listStudents(token: string) {
    const res = await fetch(`${API_BASE_URL}/enrollment/students`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
}

export async function createStudent(token: string, data: any) {
    const res = await fetch(`${API_BASE_URL}/enrollment/students`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res.json();
}

export async function fetchStudentDashboard(token: string) {
    const res = await fetch(`${API_BASE_URL}/student/dashboard`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
}

export async function fetchHODDashboard(token: string) {
  const res = await fetch(`${API_BASE_URL}/hod/dashboard`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch HOD dashboard');
  }
  return res.json();
}
