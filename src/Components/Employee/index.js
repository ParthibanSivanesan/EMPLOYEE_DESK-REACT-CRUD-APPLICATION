import React from 'react';
import Base from '../Base';
import {useNavigate} from 'react-router-dom';

function Employee({employee, setEmployee}) {

    const navigate = useNavigate();

const deleteEmployee = (empID)=>{
    const resultEmployee = employee.filter((empl)=> empID !== empl.empid);
    setEmployee(resultEmployee);
}
    return (
        <Base logo={"emp.png"} title = {"Employee Info"} description = {"All Employee info will be displayed here"}>
        <div className="emp-collection ">
        <table className="table table-hover table-dark" >
                    <thead>
                        <tr>
                        <th scope="col">EmpId</th>
                        <th scope="col">Reg No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Designation</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                {employee.map((emp, idx)=>(
                
                
                    <tbody className="" key={idx}>
                        <tr>
                        <th className="bg-primary" scope="row">{emp.empid}</th>
                        <td className="bg-primary">{emp.regno}</td>
                        <td className="bg-primary">{emp.name}</td>
                        <td className="bg-primary">{emp.designation}</td>
                        <td className="bg-primary"> <button className="btn btn-light" onClick={()=>navigate(`/employee-profile/${emp.empid}`)}>View Profile</button></td>
                        <td className="bg-primary"> <button className="btn btn-light emp-button" onClick={()=>navigate(`/edit-employee/${emp.empid}`)}>Edit</button></td>
                        <td className="bg-primary"><button className="btn btn-light emp-button" onClick={()=>deleteEmployee(emp.empid)}>Delete</button></td>
                        </tr>
                    </tbody>
                 ))}
                    </table>
                              
            
           
        </div>
        </Base>
        
    );
}

export default Employee;