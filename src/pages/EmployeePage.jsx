import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function EmployeePage({Employees}) {
    const params=useParams()
    console.log(Employees)
    let currentEmployee=Employees.filter(element=> element.name===params.symbol)
    console.log(currentEmployee)
    let lessSymbol="<"
    return ( 
        <div className="home">
            
                <Link to="/">
                     <h1 className="back">
                        <span>{lessSymbol}</span> 
                        back 
                     </h1>
                </Link>
            <div className="info">
                <div className="infoHeader">
                    <img src={currentEmployee[0].headshot} alt="employee" />
                    <h2>{currentEmployee[0].name}</h2>
                    <h2>{currentEmployee[0].title}</h2>

                </div>
                <div className="oneInfo">
                          <h3>Call Office</h3>
                          <p>{currentEmployee[0].phone}</p>
                </div>
                <div className="oneInfo">
                          <h3>Call Mobile</h3>
                          <p>{currentEmployee[0].phone}</p>
                          
                </div>
                <div className="oneInfo">
                          <h3>SMS</h3>
                          <p>{currentEmployee[0].phone}</p>
                </div>
                <div className="oneInfo">
                          <h3>Email</h3>
                          <p>{currentEmployee[0].email}</p>
                </div>
                
            </div>
        </div>
     );
}

export default EmployeePage;