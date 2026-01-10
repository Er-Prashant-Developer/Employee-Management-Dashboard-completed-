import { useContext } from "react"
import { Link } from "react-router-dom"
import { EmployeeContext } from "../Utils/Context"
import Card from "./Card"

function Dashboard() {
  const { employees } = useContext(EmployeeContext)

  const total = employees.length
  const active = employees.filter(e => e.active).length
  const inactive = employees.filter(e => !e.active).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-blue-600 flex flex-col items-center px-4 py-10">

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Employee Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="flex flex-col sm:flex-row gap-6 mb-10">

        <div className="bg-white rounded-xl shadow-xl p-6 w-60 text-center">
          <h2 className="text-lg font-semibold text-gray-600">Total Employees</h2>
          <p className="text-3xl font-bold text-blue-600">{total}</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6 w-60 text-center">
          <h2 className="text-lg font-semibold text-gray-600">Active</h2>
          <p className="text-3xl font-bold text-green-600">{active}</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6 w-60 text-center">
          <h2 className="text-lg font-semibold text-gray-600">Inactive</h2>
          <p className="text-3xl font-bold text-red-600">{inactive}</p>
        </div>

      </div>

      {/* Navigation Cards */}
      <div className="flex flex-col sm:flex-row gap-6">

        <Link to="/add-employee">
          <Card title="Add Employee">
            <p className="text-sm text-gray-500">Add new employee details</p>
          </Card>
        </Link>

        <Link to="/employee-list">
          <Card title="Employee List">
            <p className="text-sm text-gray-500">View, edit & delete employees</p>
          </Card>
        </Link>

      </div>
    </div>
  )
}

export default Dashboard
