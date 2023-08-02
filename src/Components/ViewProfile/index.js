import React from 'react';
import Base from '../Base';
import { useState, useEffect } from 'react';
import {useNavigate, useParams } from 'react-router-dom';

function ViewProfile({employee, setEmployee}) {

    const {id} = useParams();
    const navigate = useNavigate();

    //Defining the Employee States
    const [empid, setEmpId] = useState('');
    const [name, setName] = useState('');
    const [regno, setRegNo] = useState('');
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
            setRegNo(employeeData.regno)
            setName(employeeData.name);
            setShift(employeeData.shift);
            setEducation(employeeData.education);
            setGender(employeeData.gender);
            setDesignation(employeeData.designation);
            setExperience(employeeData.experience);
         }
    
       }, [id, employee]) //useeffect will activate first time after rendering & then whenever the dependency array values changes
    
    const deleteEmployee = (empID)=>{
        const resultEmployee = employee.filter((empl)=> empID !== empl.empid);
        setEmployee(resultEmployee);
        navigate("/employee");
    }

    return (
        <Base logo={"profile.png"} title = {"Employee Profile"} description = {"View & Edit the employee details here"}>
            <div className="main-card-style">
            <div className="card card-style" style={{width: "20rem", backgroundColor: "rgb(0,123,255)", color: "whitesmoke"}}>

                    <table class="table table-hover table-borderless table-dark" >
                    <thead>
                        <tr>
                        <th scope="col"><h4 className="card-title App">{name}</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th class="bg-primary">Designation: {designation}</th>
                        </tr>
                        <tr>
                        <th class="bg-primary">Registration no: {regno}</th>
                        </tr>
                        <tr>
                        <th class="bg-primary">Education: {education}</th>
                        </tr>
                        <tr>
                        <th class="bg-primary">Experience: {experience}</th>
                        </tr>
                        <tr>
                        <th class="bg-primary">Shift Details: {shift}</th>
                        </tr>
                        <tr>
                        <th class="bg-primary">Gender: {gender}</th>
                        </tr>
                        <tr>
                        <th class="bg-primary card-btn-grp"> 
                        <button className="btn btn-light" onClick={()=>navigate(`/edit-employee/${empid}`)}>Edit</button>
                        <button className="btn btn-light" onClick={()=>deleteEmployee(empid)}>Delete</button>
                        </th>
                        </tr>
                    </tbody>
                    </table>

                    </div> 
                    </div>  
        </Base>
    );
}

export default ViewProfile;