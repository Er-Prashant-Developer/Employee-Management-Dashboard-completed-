import { createContext, useEffect, useState } from "react"

export const EmployeeContext = createContext()

function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState(() => {
    try {
      const data = localStorage.getItem("employees")
      return data ? JSON.parse(data) : []
    } catch (error) {
      console.error("Error loading employees:", error)
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees))
  }, [employees])

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeProvider
