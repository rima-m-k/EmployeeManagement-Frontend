import React, { useState } from "react";

function TableView({ data }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (employee.designation &&
        employee.designation
          .toLowerCase()
          .includes(searchQuery.toLowerCase())) ||
      (employee.department &&
        employee.department.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="w-1/2 mx-auto mt-2">
      {/* search bar */}
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full border rounded-md p-2 mb-4 "
      />

      <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
        {filteredData.map((employee, index) => (
          <div key={index} className="bg-white border border-l-orange-500 shadow-md p-4 flex">
            {employee?.image ? (
              <img
                src={`https://res.cloudinary.com/dtbd0liga/image/upload/v1691164035/${employee?.image}`}
                alt={`${employee.firstName} ${employee.lastName}`}
                className="w-28 h-28 object-cover rounded-full mr-4 bg-gray-400"
              />
            ) : (
              <div className="bg-gray-500 w-28 h-28  object-cover rounded-full mr-4" />
            )}
            <div>
              <h2 className="text-xl font-bold mb-1">
                {employee.firstName} {employee.lastName}
              </h2>
              <p className="text-gray-950 mb-1">Gender: {employee.gender}</p>
              <p className="text-gray-950 mb-1">
                Username: {employee.userName}
              </p>
              <p className="text-gray-950 mb-1">Email: {employee.email}</p>
              {employee.designation && (
                <p className="text-gray-950 mb-1">
                  Designation: {employee.designation}
                </p>
              )}
              {employee.department && (
                <p className="text-gray-950 mb-1">
                  Department: {employee.department}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableView;
