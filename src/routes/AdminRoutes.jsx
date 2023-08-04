import React, { useEffect, useState } from "react";
import AdminDashboard from "../pages/AdminDashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginComponent from "../Components/LoginComponent";
import SignUp from "../pages/SignUp";

function AdminRoutes() {
  const Navigate = useNavigate();
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("AdminName"));
  }, [token]);
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginComponent isAdmin={true} />} />
        <Route path="/signup/" element={<SignUp isAdmin={true} />} />
        <Route
          path="/dashboard/"
          element={
            token ? <AdminDashboard /> : <Navigate to={"/admin/login"} />
          }
        />
      </Routes>
    </>
  );
}

export default AdminRoutes;
