import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const {createUser, setUser, updateUser} = use (AuthContext);
   const [nameError, setNameError] = useState("");
   const navigate = useNavigate();
  const handleRegister= (e) => {
   
    e.preventDefault();
    const form = e.target;
    const name =form.name.value;
    const photo =form.photo.value;
    const email =form.email.value;
    const password =form.password.value;

    if(name.length < 5){
      setNameError(" Name should be  more than 5 character");
      return;
    }
    else{
      setNameError(" ");
    }
    // console.log(e.target);
    console.log(name, photo, email, password);
    createUser(email, password)
    .then(resutl => {
      const user = resutl.user;
      // console.log(user);
      // update profile 
      updateUser({displayName: name , photoURL:photo})
      .then(()=>{
        setUser({...user, displayName: name , photoURL:photo });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setUser(user);
  // An error occurred
  // ...
});

      // user data show 
      setUser(user);

    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });

  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-primary pb-6 text-center">
            Register your account
          </h2>
          {/* <div className="divider"></div> */}
          <form onSubmit={handleRegister} className="fieldset">
            {/* Name  */}
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name"
              required
            />
            {nameError && <p className="text-xs text-error">{nameError} </p>}
            {/* Photo  */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Enter your photo url"
              required
            />
            {/* Email  */}
            <label className="label">Email Address</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email address"
              required
            />
            {/* Password  */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter your password"
              required
            />
            {/* checkbox  */}
            <label class="label">
              <input type="checkbox" checked="checked" class="checkbox" required/>
              Accept Term & Conditions
            </label>

            <button type = "submit" className="btn btn-neutral bg-primary hover:bg-secondary hover:border-secondary mt-4">
              Register
            </button>

            <p className="font-semibold text-center text-primary pt-5">
              Already Have An Account ?{" "}
              <Link to="/auth/login" className="text-secondary">
                {" "}
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
