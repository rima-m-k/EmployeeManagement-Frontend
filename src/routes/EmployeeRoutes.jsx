import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import EmployeeDashboard from "../pages/EmployeeDashboard";
import LoginComponent from "../Components/LoginComponent";

function EmployeeRoutes() {
  const Navigate = useNavigate();
  const [token, setToken] = useState('');


useEffect(() => {
  setToken(localStorage.getItem("EmployeeName"));
 
},[token]);
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginComponent isAdmin={false}/>} />
        <Route path="/signup" element={<SignUp isAdmin={false} />} />
        <Route path="/dashboard" element={token?<EmployeeDashboard />:<Navigate to ='/' />} />

      </Routes>
    </>
  );
}

export default EmployeeRoutes;
