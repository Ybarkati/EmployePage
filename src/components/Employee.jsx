import { useNavigate } from "react-router-dom";

function Employee({ employee, handleDelete}) {
  const navigate=useNavigate()
  function handleClick(e){
    if (e.target.className!=="delete"){
      navigate(`/employeePage/${employee.name}`)
    }
      
  }
    return (
      
      <div
        onClick={(e)=>handleClick(e)}
        className="emp"
        style={{ border: `1px solid ${employee.borderColor}` }}
      >
        <img src={employee.headshot} alt="employee" />
        <h4>{employee.name}</h4>
        <p>{employee.title}</p>
        <button className="delete" onClick={() => handleDelete(employee.id)}>X</button> 
      </div>
      
    );
  }
  
  export default Employee;
  