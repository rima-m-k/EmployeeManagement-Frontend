
import {  Routes, Route } from "react-router-dom";


import './App.css'
import EmployeeRoutes from './routes/EmployeeRoutes';
import AdminRoutes from './routes/AdminRoutes';

function App() {

  return (
    <>

    
     <Routes>
      <Route path="/*" element={<EmployeeRoutes />}/>
      <Route path="/admin/*" element={<AdminRoutes />}/>
     </Routes>
    </>
  )
}

export default App
// last: login