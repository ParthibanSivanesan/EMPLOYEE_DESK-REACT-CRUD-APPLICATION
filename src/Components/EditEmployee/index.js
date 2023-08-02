import React from 'react';
import { useState, useEffect } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import Base from '../Base';

function EditEmployee({employee, setEmployee}) {

    const {id} = useParams();
    const navigate = useNavigate();

    //Defining the Employee States
    const [empid, setEmpId] = useState('');
    const [name, setName] = useState('');
    const [shift, setShift] = useState('');
    const [education, setEducation] = useState('');
    const [gender, setGender] = useState('');
    const [designation, setDesignation] = useState('');
    const [experience, setExperience] = useState('');


   useEffect(()=>{

    const employeeData = employee.find(emp => emp.empid === id);

    //Displaying The details need to be edited on the Update fields screen 
    if(employeeData){       //if EmployeeData is there then only dispaly the details in update screen
        setEmpId(employeeData.empid);
        setName(employeeData.name);
        setShift(employeeData.shift);
        setEducation(employeeData.education);
        setGender(employeeData.gender);
        setDesignation(employeeData.designation);
        setExperience(employeeData.experience);
     }

   }, [id, employee]) //useeffect will activate first time after rendering & then whenever the dependency array values changes


   const updateEmployee = (e)=>{
    e.preventDefault();

    const empIndex = employee.findIndex((emp)=> emp.empid === id)

    const updatedEmployee = {
        empid,
        name,
        shift,
        education,
        gender,
        designation,
        experience
    }

    employee[empIndex] = updatedEmployee;

    setEmployee([...employee]);
    navigate("/employee");
   }

    return (
        <Base logo={"edit.png"} title = {"Edit Employee"} description = {"Edit the employee details here"}>
        
        
        <h2 className="App">Update Employee Details</h2>
            <span className="main-card-style" >
                <form className="form-cls">
                <div className="form-group mx-sm-3 mb-2 inp-bar">
               
                    <label for="ID">Employee Id</label>
                    <input className="form-control "  placeholder="Enter Employee Id" value={empid} id="empid" onChange={(e)=>setEmpId(e.target.value)} required ></input>
                    <label for="name">Name</label>
                    <input className="form-control"  placeholder="Enter Name" value={name} id="name" onChange={(e)=>setName(e.target.value)} required ></input>
                    <label for="batch">Designation</label>
                    <input className="form-control"  placeholder="Enter Your Designation" value={designation} id="batch" onChange={(e)=>setDesignation(e.target.value)} required ></input>
                    <label for="education">Education</label>
                    <input className="form-control"  placeholder="Enter Education" value={education} id="education" onChange={(e)=>setEducation(e.target.value)} required ></input>
                    <label for="education">Experience</label>
                    <input className="form-control"  placeholder="Enter Experience" value={experience} id="experience" onChange={(e)=>setExperience(e.target.value)} required ></input>
                    <label for="skills">Shift Timings</label>
                    <input className="form-control"  placeholder="Enter Shift Timings" value={shift} id="shift" onChange={(e)=>setShift(e.target.value)} required ></input>
                    <label for="gender">Gender</label>
                    <input className="form-control"  placeholder="Enter Gender" value={gender} id="gender" onChange={(e)=>setGender(e.target.value)} required ></input>
                    <div className="nav-btn-group">
                        <button className="btn btn-dark" onClick={(e)=>updateEmployee(e)}>Update</button>
                    </div>
                </div>
            </form>
            </span>
        
        </Base>
    );
}

export default EditEmployee;