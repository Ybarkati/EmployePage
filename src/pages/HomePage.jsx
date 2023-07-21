import EmployeeList from "../components/EmployeeList";
import Form from "../components/Form";


import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

function HomePage({ employees, addEmployee,handleDelete }) {
  return (
    <div className="home">
      <Header header="Employee Directory" />
      <SearchBar />
      <EmployeeList employees={employees} handleDelete={handleDelete}  />
      {/* <Form addEmployee={addEmployee} /> */}
      <Form addEmployee={addEmployee} />
    </div>
  );
}

export default HomePage;
