import "./index.css";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import { data } from "./data";
import { Routes,Route } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";

export default function App() {

  let [employees, setEmployees] = useState(data);
  function handleDelete(id) {
    let newEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(newEmployees);}
  function addEmployee(emp) {
    setEmployees([...employees, emp]);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage employees={employees} addEmployee={addEmployee} handleDelete={handleDelete} />}/>
        <Route path="/employeePage/:symbol" element={<EmployeePage Employees={employees}/>}/>
      </Routes>
    </div>
  );
}
