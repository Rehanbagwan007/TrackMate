
import { useEffect, useState } from 'react'
import { listDepartments, createHod, listHods } from '@/lib/api'
import { useAuthStore } from '@/lib/useAuthStore'

const HOD = () => {
  const { token } = useAuthStore()
  const [departments, setDepartments] = useState<any>([])
  const [hods, setHods] = useState<any>([])
  const [newHod, setNewHod] = useState({ name: '', email: '', password: '', departmentId: '' })

  useEffect(() => {
    if (token) {
      listDepartments(token).then(setDepartments)
      listHods(token).then(setHods)
    }
  }, [token])

  const handleCreateHod = async () => {
    if (!token) return
    await createHod(token, newHod)
    listHods(token).then(setHods) // Refresh HODs list
    setNewHod({ name: '', email: '', password: '', departmentId: '' }) // Reset form
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">HOD Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">All HODs</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <ul>
              {hods.map((hod: any) => (
                <li key={hod.id} className="border-b py-2 flex justify-between items-center">
                  <span>{hod.name} ({hod.email}) - {hod.department?.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Create New HOD</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" value={newHod.name} onChange={(e) => setNewHod({ ...newHod, name: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" value={newHod.email} onChange={(e) => setNewHod({ ...newHod, email: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" value={newHod.password} onChange={(e) => setNewHod({ ...newHod, password: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <select value={newHod.departmentId} onChange={(e) => setNewHod({ ...newHod, departmentId: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <option value="">Select Department</option>
                {departments.map((dept: any) => (
                  <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))}
              </select>
            </div>
            <button onClick={handleCreateHod} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Create HOD</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HOD
