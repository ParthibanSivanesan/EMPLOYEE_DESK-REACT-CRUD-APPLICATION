import React from 'react';
import Footer from '../Footer';
import team from './team.png';
import edit from './edit.png';
import profile from './profile.png';
import { useNavigate } from 'react-router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faBell, faEnvelope, faUser, faRightFromBracket, faBars, faGear } from '@fortawesome/free-solid-svg-icons'


function Base({logo, title, description, children}) {

    const navigate = useNavigate(); // to Navigate to diff. pages through button

    return (
        <body className="main-container">
        <div>

                <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                
                    <a className="navbar-brand" href="#">
                    {(title === "Edit Employee") && <h5 style={{color: "whitesmoke"}}><span>&nbsp;<img src={edit} style={{width: "40px", height: "40px"}} alt=""></img> {title} </span></h5> }
                    {(title === "Employee Profile") && <h5 style={{color: "whitesmoke"}}><span>&nbsp;<img src={profile} style={{width: "40px", height: "40px"}} alt=""></img> {title} </span></h5> }
                    {((title !== "Employee Profile") && (title !== "Edit Employee")) &&<h5 style={{color: "whitesmoke"}}><span>&nbsp;<img src={`Image/${logo}`} style={{width: "40px", height: "40px"}} alt=""></img> {title} </span></h5> }
                    </a> <div className="vr vr-line"></div>

                    <h2 style={{color: "whitesmoke"}}><span><img src={team} alt="Employee Details Dashboard" style={{width: "60px", height: "60px"}}></img>&nbsp; Employee Desk </span></h2>

                    <div className="vr vr-line"></div>
                    <div className="nav-btn-group">
                        <button type="button" className="btn" onClick={()=>navigate("/")}>Dashboard</button>
                        <button type="button" className="btn" onClick={()=>navigate("/employee")}>Employee</button>
                        <button type="button" className="btn" onClick={()=>navigate("/create-employee")}>Add Employee</button>
            
                    </div>
                
                </nav>

                <p className="App">{description}</p>

                <div>
                    {children}
                </div>
         </div>
           
            
        <Footer />
        </body>
    );
}

export default Base;