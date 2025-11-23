
export interface EnrollmentRequest {
  id: string;
  email: string;
  name: string;
  departmentId: string;
  role: string;
  status: string;
  approverId?: string;
}
