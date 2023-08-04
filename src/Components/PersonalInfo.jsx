import React, { useState } from "react";
import { checkEmail, checkName } from "../formValidation";
import { personalInfo } from "../services/services";
import { adminInfo as fetchAdminInfo } from "../services/services";

function PersonalInfo({ onNext, isAdmin }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "male",
    email: "",
  });

  const [fnameError, setFNameError] = useState("");
  const [lnameError, setLNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((values) => ({ ...values, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    (isAdmin ? fetchAdminInfo(formData) : personalInfo(formData))
    .then((res) => {
      console.log("its", isAdmin);
      console.log(res);
      onNext();
    })
    .catch((err) => {
      console.log(err);
    });
  
  }
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="firstname"
        >
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          onKeyUp={(e) => setFNameError(checkName(e.target.value))}
          className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-orange-500"
          placeholder="Firstname"
          required
        />
        {fnameError && <span className="text-red-600"> {fnameError}</span>}
      </div>
      <div>
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="lastName"
        >
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastname}
          onChange={handleChange}
          onKeyUp={(e) => setLNameError(checkName(e.target.value))}
          className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-orange-500"
          placeholder="Last Name"
          required
        />
        {lnameError && <span className="text-red-600"> {lnameError}</span>}
      </div>
      <div>
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="gender"
        >
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className=" w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-orange-500"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onKeyUp={(e) => setEmailError(checkEmail(e.target.value))}
          className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-orange-500"
          placeholder="email"
          required
        />
        {emailError && <span className="text-red-600"> {emailError}</span>}
      </div>
      <button
        type="submit"
        // onClick={onNext}
        className="block w-full bg-orange-500 text-white font-semibold py-3 px-4 rounded hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
      >
        Next
      </button>
    </form>
  );
}

export default PersonalInfo;
