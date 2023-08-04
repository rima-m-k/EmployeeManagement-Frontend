import React, { useEffect, useState } from "react";
import { personalData } from "../services/services";
import ProfileView from "../Components/ProfileView";
import TableView from "../Components/TableView";

function AdminDashboard() {
  const [AdminData, setAdminData] = useState({});
  const [AllEmployees, setAllEmployees] = useState({});
  const [AllAdmins, setAllAdmins] = useState({});
  const [display, setDisplay] = useState(1);


  function view(display) {
    switch (display) {
      case 1:
        return <ProfileView data={AdminData} isAdmin={true} />;
      case 2:
        return <TableView data={AllEmployees} />;
      case 3:
        return <TableView data={AllAdmins} />;
      default:
        return <ProfileView data={AdminData} isAdmin={true} />;
    }
  }
  let currentAdmin = localStorage.getItem("AdminName");
  console.log(currentAdmin);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await personalData(currentAdmin);
        setAdminData(data.data.adminData)
        setAllEmployees(data.data.allEmployees)
        setAllAdmins(data.data.allAdmins)

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentAdmin]);
  return (
    <>
       <header className="bg-black text-white py-5 px-8">
      {/* Navigation Menu */}
        <div className="bg-red-700 w-fit rounded hover:bg-red-600 mx-2 p-1 ">Logout</div>
      <nav className="flex items-center justify-center  space-x-9 text-lg">
        <div onClick={() => setDisplay(1)} className="hover:text-orange-400">
          Profile
        </div>
        <div onClick={() => setDisplay(2)} className="hover:text-orange-400">
          Employees
        </div>
        <div onClick={() => setDisplay(3)} className="hover:text-orange-400">
          Admins
        </div>
      </nav>
    </header>

      {/* data */}

      {view(display)}
    </>
  );
}

export default AdminDashboard;
