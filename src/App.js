import { useState } from 'react';
import {data} from './Components/Data';
import Dashboard from './Components/Dashboard';
import './App.css';
import Employee from './Components/Employee';
import {Routes, Route} from 'react-router-dom';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import ViewProfile from './Components/ViewProfile';
import NoPage from './Components/NoPage';

function App() {

const [employee, setEmployee] = useState(data);
  return (
    <Routes>
      
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/employee" element={<Employee employee = {employee} setEmployee = {setEmployee} />} />
      <Route path="/employee-profile/:id" element={<ViewProfile employee = {employee} setEmployee = {setEmployee} />} />
      <Route path="/create-employee" element={<AddEmployee employee = {employee} setEmployee = {setEmployee} />} />      
      <Route path="/edit-employee/:id" element={<EditEmployee employee = {employee} setEmployee = {setEmployee} />} />
      <Route path="*" element={<NoPage />} />
   
    </Routes>
  );
}

export default App;
