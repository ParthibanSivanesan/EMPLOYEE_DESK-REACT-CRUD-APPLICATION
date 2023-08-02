import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Base from '../Base';

function AddEmployee({employee, setEmployee}) {

    const navigate = useNavigate();

const [empid, setEmpId] = useState('');
const [name, setName] = useState('');
const [shift, setShift] = useState('');
const [education, setEducation] = useState('');
const [gender, setGender] = useState('');
const [designation, setDesignation] = useState('');
const [experience, setExperience] = useState('');

const addEmployee = (e)=>{
    e.preventDefault();
    const newEmployee = {
        empid,
        name,
        shift,
        education,
        gender,
        designation,
        experience
    }

    setEmployee([...employee, newEmployee]);
    navigate("/employee");
}    
    return (
        <Base logo={"add.png"} title = {"Add New Employee"} description = {"Fill the Form to Add new employee"}>
        
            <h2 className="App">Add New Employee</h2>
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
                    <input className="form-control"  placeholder="Enter Shift Timings" value={shift} id="shift" onChange={(e)=>setShift(e.target.value)}required  ></input>
                    <label for="gender">Gender</label>
                    <input className="form-control"  placeholder="Enter Gender" value={gender} id="gender" onChange={(e)=>setGender(e.target.value)} required ></input>
                    <div className="nav-btn-group">
                        <button className="btn btn-dark" onClick={(e)=>addEmployee(e)}>Create</button>
                    </div>
                </div>
            </form>
            </span>

        
        </Base>
    );
}

export default AddEmployee;