
import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-primary pb-6 text-center">
            Login your account
          </h2>
          {/* <div className="divider"></div> */}
          <form className="fieldset">
            {/* email  */}
            <label className="label">Email Address</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email address"
            />
            {/* passowrd  */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter your password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral bg-primary hover:bg-secondary hover:border-secondary mt-4">Login</button>

            <p className="font-semibold text-center text-primary pt-5">
              Dont Have An Account ? <Link to="/auth/register" className="text-secondary"> Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
