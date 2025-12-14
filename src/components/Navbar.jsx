import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        alert("You Logged Out Successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="w-full px-4 py-3 bg-base-100 shadow">
      <div className="flex justify-between items-center">
      <div className="hidden md:block text-sm font-medium">{user && user.email}</div>
      <div className="nav gap-5 text-accent hidden md:flex ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-5">
        <img
          src={`${user ? user.photoURL : userIcon}`}
          alt=""
          className="w-10 h-10 border border-base-300 object-cover rounded-full"
        />
        {/* jodi user thake tahole logout btn dekhabe ar jodi na thake tahole login  */}

        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary btn-sm">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary btn-sm">
            Login
          </Link>
        )}

        {/* <Link to="/auth/login" className="btn btn-primary">Login</Link> */}
      </div>
    </div>

    {/* Mobile Menu  */}
    {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 text-accent">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/career" onClick={() => setMenuOpen(false)}>
            Career
          </NavLink>
        </div>
      )}

    </div>
  );
};

export default Navbar;
