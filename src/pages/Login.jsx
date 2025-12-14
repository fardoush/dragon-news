import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(errorCode,errorMessage );
        setError(errorCode);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-primary pb-6 text-center">
            Login your account
          </h2>
          {/* <div className="divider"></div> */}
          <form onSubmit={handleLogin} className="fieldset">
            {/* email  */}
            <label className="label">Email Address</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email address"
              required
            />
            {/* passowrd  */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter your password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-400">{error}</p>}
            <button
              type="submit"
              className="btn btn-neutral bg-primary hover:bg-secondary hover:border-secondary mt-4"
            >
              Login
            </button>

            <p className="font-semibold text-center text-primary pt-5">
              Dont Have An Account ?{" "}
              <Link to="/auth/register" className="text-secondary">
                {" "}
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
