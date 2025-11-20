import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = e => {
        e.preventDefault();
        console.log("Login email and password:", {email, password})
    };
    return (
        
    
      
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto p-10 m-10">
          <h1 className="text-4xl font-bold text-center">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <label className="label">Email</label>
          <input type="email" 
          onChange={(e) => setEmail(e.target.value)}
          className="input" 
          placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" 
          onChange={(e) => setPassword(e.target.value)}
          className="input" 
          placeholder="Password" />
          <div>
            <a className="link link-hover">
                Forgot password?</a>
          </div>
          <button type='submit' className="btn btn-neutral mt-4 w-full hover:btn-primary">
            Login
            </button>
        </form>
        <p className='mt-4'>New here? <Link to="/register" className='font-semibold text-primary hover:underline'>Create Account Register</Link></p>
      </div>
    </div>
 
    );
};

export default Login;