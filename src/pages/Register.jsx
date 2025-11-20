import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    photo: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register form :", form);
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto p-10 m-10">
      <h1 className="text-4xl font-bold text-center">Register now!</h1>
      <div className="card-body">
        <form onSubmit={handleRegister}>
          {/* name  */}
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full mb-3"
            placeholder="User Name.."
            onChange={handleChange}
          />
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input input-bordered w-full mb-3"
            placeholder="Photo URL"
            onChange={handleChange}
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full mb-3"
            placeholder="Email"
            onChange={handleChange}
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input input-bordered w-full mb-3"
            placeholder="Password"
            onChange={handleChange}
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="btn btn-neutral mt-4 w-full hover:btn-primary"
          >
            Register
          </button>
        </form>
        <p className="mt-4">
          New here?{" "}
          <Link
            to="/login"
            className="font-semibold text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
