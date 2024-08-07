import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox.jsx";
import { Link, useNavigate } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp.js";

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const [loading, signup] = useSignUp();

  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputs);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              className="w-full input input-bordered  h-10"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <GenderCheckbox handleChange={handleChange} />
          <Link
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            to="/login"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700" disabled={loading}>
              {loading? <span className="loading loading-spinner"></span>: "Sign Up" }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
