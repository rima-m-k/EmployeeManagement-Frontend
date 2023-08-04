import React, { useState } from "react";
import { adminCred, credentials } from "../services/services";
import {  useNavigate } from "react-router-dom";


function Credentials({isAdmin}) {
  const Navigate = useNavigate();
  const [formData,setFormData] = useState({
    userName:'',
    password:'',
   
})
function handleChange(e){
  const name = e.target.name;
  const value = e.target.value;
  setFormData((values)=>({...values,[name]:value}));

}
function handleSubmit(e){
  e.preventDefault();
  (isAdmin?adminCred(formData):credentials(formData))
  .then(res=>{
    console.log(res)
    isAdmin?Navigate("/admin/dashboard"):Navigate("/dashboard")

  })
  .catch(err=>{
    console.log(err)
  })



}
  return (
   
      <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="username"
            >
              User Name
            </label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-orange-500"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-orange-500"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex flex-row space-x-2">
          
          <button
            type="submit"
            className="block w-full bg-orange-500 text-white font-semibold py-3 px-4 rounded hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
          >
            Register
          </button>
          </div>
        </form>
     
  );
}

export default Credentials;
