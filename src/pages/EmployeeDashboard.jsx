import React, { useEffect, useState } from 'react'
import ProfileView from '../Components/ProfileView';
import { Link } from 'react-router-dom';
import { EmployeeData } from '../services/services';


function EmployeeDashboard() {

  
const [employeeData, setEmployeeData] = useState({});

let currentEmp = localStorage.getItem("EmployeeName");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await EmployeeData(currentEmp);
        setEmployeeData(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentEmp]);
  return (
    <>
  <header className="bg-black text-white  py-5 px-8">
        {/* Navigation Menu */}
        <div className="bg-red-700 w-fit rounded hover:bg-red-600 mx-2 p-1 ">Logout</div>

        <nav className="flex justify-center  space-x-9 text-lg">
          <Link  to="#" className="hover:text-orange-400">
            Profile
          </Link>
         
        </nav>
      </header>
     <ProfileView data={employeeData} isAdmin={false} />


    </>
  )
}

export default EmployeeDashboard
