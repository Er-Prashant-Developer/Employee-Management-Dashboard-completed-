import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { EmployeeContext } from '../Utils/Context'

function EmployeeForm() {
  const { employees, setEmployees } = useContext(EmployeeContext)
  const { id } = useParams()
  const navigate = useNavigate()

  const editEmployee = employees.find(e => e.id == id)

  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [state, setState] = useState('')
  const [active, setActive] = useState(true)
  const [image, setImage] = useState(null)

  useEffect(() => {
    if (editEmployee) {
      setName(editEmployee.name)
      setGender(editEmployee.gender)
      setDob(editEmployee.dob)
      setState(editEmployee.state)
      setActive(editEmployee.active)
      setImage(editEmployee.image)
    }
  }, [editEmployee])

  const handleImage = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => setImage(reader.result)
    if (file) reader.readAsDataURL(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !gender || !dob || !state) {
      alert("Please fill all fields")
      return
    }

    if (id) {
      const updated = employees.map(emp =>
        emp.id == id ? { ...emp, name, gender, dob, state, active, image } : emp
      )
      setEmployees(updated)
      alert("Employee Updated Successfully")
    } else {
      setEmployees([
        ...employees,
        { id: Date.now(), name, gender, dob, state, active, image }
      ])
      alert("Employee Added Successfully")
    }

    navigate("/employee-list")
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-500 to-blue-600 px-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {id ? "Edit Employee" : "Add Employee"}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <select
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            value={gender}
            onChange={e => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input
            type="date"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            value={dob}
            onChange={e => setDob(e.target.value)}
          />

          <input
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            placeholder="State"
            value={state}
            onChange={e => setState(e.target.value)}
          />

          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              checked={active}
              onChange={e => setActive(e.target.checked)}
            />
            Active
          </label>

          <input
            type="file"
            className="w-full border rounded-lg px-4 py-2"
            onChange={handleImage}
          />

          {image && (
            <img
              src={image}
              className="w-24 h-24 object-cover rounded-full border mx-auto"
            />
          )}

          <button className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition">
            {id ? "Update Employee" : "Save Employee"}
          </button>

        </form>
      </div>

    </div>
  )
}

export default EmployeeForm
