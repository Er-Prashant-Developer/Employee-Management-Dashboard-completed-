import { Routes, Route, Navigate } from "react-router-dom"
import Login from "../Components/Login"
import Dashboard from "../Components/Dashboard"
import EmployeeForm from "../Components/EmployeeForm"
import EmployeeTable from "../Components/EmployeeTable"

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  return isLoggedIn ? children : <Navigate to="/" />
}

function Routing() {
  return (
    <Routes>

      {/* Public Route */}
      <Route path="/" element={<Login />} />

      {/* Protected Routes */}
      <Route 
        path="/dashboard" 
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } 
      />

      <Route 
        path="/add-employee" 
        element={
          <PrivateRoute>
            <EmployeeForm />
          </PrivateRoute>
        } 
      />

      <Route 
        path="/employee-list" 
        element={
          <PrivateRoute>
            <EmployeeTable />
          </PrivateRoute>
        } 
      />

      <Route 
        path="/edit/:id" 
        element={
          <PrivateRoute>
            <EmployeeForm />
          </PrivateRoute>
        } 
      />

    </Routes>
  )
}

export default Routing
