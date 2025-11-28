import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
       <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-primary pb-6 text-center">
            Register your account
          </h2>
          {/* <div className="divider"></div> */}
          <form className="fieldset">
            {/* Name  */}
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name"
            />
            {/* Photo  */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Enter your photo url"
            />
            {/* Email  */}
            <label className="label">Email Address</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email address"
            />
            {/* Password  */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter your password"
            />
            {/* checkbox  */}
             <label class="label">
    <input type="checkbox" checked="checked" class="checkbox" />
    Accept Term & Conditions
  </label>
            
            <button className="btn btn-neutral mt-4">Login</button>

            <p className="font-semibold text-center text-primary pt-5">
              Already Have An Account ? <Link to="/auth/login" className="text-secondary"> Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;