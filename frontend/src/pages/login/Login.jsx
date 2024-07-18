import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogIn from "../../hooks/useLogIn";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });

  const [loading, login] = useLogIn();

  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(inputs);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              name="username"
              value={inputs.username}
              placeholder="Enter username"
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
              value={inputs.password}
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2">
              {loading? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
