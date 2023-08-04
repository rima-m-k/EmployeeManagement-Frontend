import React, { useState } from "react";
import buildingBG from "../assets/bulidings.png";
import { workInfo } from "../services/services";

function WorkInfo({   onNext,isAdmin  }) {
  if(isAdmin) onNext()

  const [formData,setFormData] = useState({
    department:'',
    designation:'',
   
})
function handleChange(e){
  const name = e.target.name;
  const value = e.target.value;
  setFormData((values)=>({...values,[name]:value}));

}
function handleSubmit(e){
  e.preventDefault();
  console.log("kkk",isAdmin)

    workInfo(formData)
    .then(res=>{
      console.log(res)
      onNext();
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
              htmlFor="department"
            >
              Department
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-orange-500"
              placeholder="Department"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="designation"
            >
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-orange-500"
              placeholder="Designation"
            />
          </div>
          <div className="flex flex-row space-x-2">
        
          <button
            type="submit"
            className="block w-full bg-orange-500 text-white font-semibold py-3 px-4 rounded hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
          >
            Next
          </button>
          </div>
        </form>
     
  );
}

export default WorkInfo;
