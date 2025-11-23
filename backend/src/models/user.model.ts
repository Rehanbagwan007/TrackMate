
export interface InstituteAdmin {
  id: string;
  email: string;
}

export interface HOD {
  id: string;
  email: string;
  name: string;
  departmentId: string;
}

export interface Faculty {
  id: string;
  email: string;
  name: string;
  departmentId: string;
}

export interface Student {
  id: string;
  email: string;
  name: string;
  departmentId: string;
  facultyId: string;
}
