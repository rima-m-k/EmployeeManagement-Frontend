import React, { useState } from "react";
import buildingBG from "../assets/bulidings.png";
import { Link, useNavigate } from "react-router-dom";
import { adminLogin, userLogin } from "../services/services";
import SignUp from "../pages/SignUp";
import { checkName, isEmpty } from "../formValidation";
import Spinner from "./Spinner";

function LoginComponent({ isAdmin }) {
  const Navigate = useNavigate();
  // ////////////////////////////////////states
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  ///////////////////////////////////functions
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!userNameError && !passwordError) {
      setLoading(true)
      (isAdmin ? adminLogin(formData) : userLogin(formData))
        .then((res) => {
          localStorage.setItem(
            isAdmin ? "AdminName" : "EmployeeName",
            JSON.stringify(res.data.userName)
          );
          isAdmin ? Navigate("/admin/dashboard/") : Navigate("/dashboard/");
        })
        .catch((err) => {
          console.log("object");
          console.log(err.response.data);
          setError(err.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else setError("Form contains invalid data");
  }
  //////fn end
  return (
    <div
      className="w-full h-screen bg-repeat-x  bg-bottom flex place-items-center justify-center"
      style={{
        backgroundImage: `url(${buildingBG})`,
        backgroundSize: "400px",
      }}
    >
      <div className="w-full max-w-md  p-8 rounded-lg shadow-inner border">
        <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
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
              onKeyUp={(e) => setUserNameError(isEmpty(e.target.value))}
              required
              className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-orange-500"
              placeholder="Username"
            />
            {userNameError && (
              <span className="text-red-600"> {userNameError}</span>
            )}
          </div>
          {loading && <Spinner />}
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
              onKeyUp={(e) => setPasswordError(isEmpty(e.target.value))}
              required
              className="appearance-none block w-full bg-gray-50 border rounded py-2 px-4 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-orange-500"
              placeholder="Password"
            />
            {passwordError && (
              <span className="text-red-600"> {passwordError}</span>
            )}
          </div>
          <button
            type="submit"
            className="block w-full bg-orange-500 text-white font-semibold py-3 px-4 rounded hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
          >
            Log In
          </button>
          {error && <span className="text-red-600"> {error}</span>}
          <div className="text-blue-500 flex flex-col">
            {isAdmin ? (
              <>
                <Link to="/" element={<LoginComponent isAdmin={false} />}>
                  {" "}
                  UserLogin{" "}
                </Link>
              </>
            ) : (
              <Link
                to="/admin/login"
                element={<LoginComponent isAdmin={true} />}
              >
                {" "}
                Admin Login{" "}
              </Link>
            )}
            <Link to="/admin/signup" element={<SignUp isAdmin={true} />}>
              {" "}
              Admin signup{" "}
            </Link>
            <Link to="/signup" element={<SignUp isAdmin={false} />}>
              User signup{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
