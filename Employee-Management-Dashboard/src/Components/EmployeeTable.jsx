import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { EmployeeContext } from '../Utils/Context'
import SearchFilter from './SearchFilter'
import PrintButton from './printButton'

function EmployeeTable() {

  const { employees, setEmployees } = useContext(EmployeeContext)

  const [search, setSearch] = useState("")
  const [gender, setGender] = useState("")
  const [status, setStatus] = useState("")

  // DELETE with confirmation
  const deleteEmployee = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?\nThis action cannot be undone."
    )

    if (confirmDelete) {
      const updated = employees.filter(e => e.id !== id)
      setEmployees(updated)
    }
  }

  // FILTER LOGIC
  const filteredEmployees = employees.filter(emp => {
    const matchName = emp.name.toLowerCase().includes(search.toLowerCase())
    const matchGender = gender ? emp.gender === gender : true
    const matchStatus = status ? emp.active === (status === "Active") : true

    return matchName && matchGender && matchStatus
  })

  return (
    <div className='p-4 sm:p-6 w-full min-h-screen bg-zinc-200 flex flex-col items-center'>

      <h1 className='text-2xl sm:text-4xl font-bold mt-4'>
        Employee List
      </h1>

      {/* SEARCH + FILTERS + PRINT */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center w-full max-w-4xl">

        <SearchFilter search={search} setSearch={setSearch} />

        <select
          className="border px-3 py-2 rounded-lg"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          className="border px-3 py-2 rounded-lg"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <PrintButton />
      </div>

      {/* TABLE */}
      {filteredEmployees.length === 0 ? (
        <p className='text-center mt-20 text-xl text-gray-600'>
          No employees found !!
        </p>
      ) : (
        <div className='shadow-xl p-4 mt-8 bg-white rounded-xl w-full max-w-5xl overflow-x-auto'>

          <table className='min-w-[700px] w-full border text-sm'>
            <thead className='bg-gray-100'>
              <tr>
                <th className="px-3 py-2">Image</th>
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">Gender</th>
                <th className="px-3 py-2">State</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map(emp => (
                <tr key={emp.id} className="text-center border-t hover:bg-gray-50 transition">

                  <td className="p-2">
                    <img
                      src={emp.image}
                      className="w-10 h-10 mx-auto rounded-full object-cover"
                      alt={emp.name}
                    />
                  </td>

                  <td className="font-medium">{emp.name}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.state}</td>

                  <td>
                    <span className={`px-2 py-1 rounded text-xs font-semibold 
                      ${emp.active ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
                      {emp.active ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td className="flex justify-center gap-2 py-2">

                    <button
                      onClick={() => deleteEmployee(emp.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                    >
                      Delete
                    </button>

                    <Link to={`/edit/${emp.id}`}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition">
                        Edit
                      </button>
                    </Link>

                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  )
}

export default EmployeeTable
