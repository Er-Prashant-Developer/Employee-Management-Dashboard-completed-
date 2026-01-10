import Routing from './Utils/Routing'
import EmployeeProvider from './Utils/Context'

function App() {
  return (
    <EmployeeProvider>
      <Routing />
    </EmployeeProvider>
  )
}

export default App
