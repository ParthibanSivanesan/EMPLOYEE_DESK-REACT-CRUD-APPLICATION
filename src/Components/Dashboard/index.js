import React from 'react';
import Base from '../Base';

function Dashboard() {
    return (
       <Base logo={"dblogo.png"} title={"Dashboard"} description={""}>
            <div>
                <span className="dashboard-style">
                    <img id="dashb-img" src={"Image/dashboard.png"} alt="Employee Details Dashboard"></img>
                    <h3 className="dashboard-head">You can find the Employee details in this application. Navigate to Different pages</h3>
                </span>
            </div>
       </Base>
    );
}

export default Dashboard;