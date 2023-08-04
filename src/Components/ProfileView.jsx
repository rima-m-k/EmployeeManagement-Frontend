import React, { useState } from "react";
import { updateAdminImage, updateEmpImage } from "../services/services";

function ProfileView({ data, isAdmin }) {
  const [file, setFile] = useState("");

  async function submitFile(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", file);
    (isAdmin ? updateAdminImage(formdata) : updateEmpImage(formdata))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleFile(e) {
    if (e.target.name === "image" && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mt-4 mb-2 ">
          Welcome , {data?.firstName} {data?.lastName}
        </h2>
        {data?.image && (
          <div className=" overflow-hidden w-1/3 h-1/3 shadow-inner shadow-slate-800 mt-4 border">
            <img
              src={`https://res.cloudinary.com/dtbd0liga/image/upload/v1691164035/${data?.image}`}
              className=""
            />
          </div>
        )}
        <form onSubmit={submitFile}>
          <div className="m-2">
            Update Profile Photo
            <input type="file" onChange={handleFile} name="image" />
            <button
              type="submit"
              className="  bg-black text-white font-semibold py-3 px-4 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              save
            </button>
          </div>
        </form>

        <div className=" text-base border p-3 m-4 w-1/3 font-semibold shadow-inner border-l-orange-500 ">
          <div>
            <p className="text-gray-950 mb-1">Gender: {data.gender}</p>
            <p className="text-gray-950 mb-1">Username: {data.userName}</p>
            <p className="text-gray-950 mb-1">Email: {data.email}</p>
            {data.designation && (
              <p className="text-gray-950 mb-1">
                Designation: {data.designation}
              </p>
            )}
            {data.department && (
              <p className="text-gray-950 mb-1">
                Department: {data.department}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileView;
