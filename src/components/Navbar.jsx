import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = use(AuthContext);
    const handleLogOut = () => {
logOut().then(() => {
  // Sign-out successful.
  alert("You Logged Out Successfully");
}).catch((error) => {
  // An error happened.
  console.log(error);
});

    }
    return (
        <div className='flex justify-between items-center'>
            <div className="">{user && user.email}</div>
            <div className="nav flex gap-5 text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex gap-5">
                <img src={`${user ? user.photoURL : userIcon}`} alt="" className="w-12 h-12 border border-accent p-0 object-cover rounded-full" />
                {/* jodi user thake tahole logout btn dekhabe ar jodi na thake tahole login  */}

                {
                    user ? <button onClick={handleLogOut}className="btn btn-primary">LogOut</button> : <Link to="/auth/login" className="btn btn-primary">Login</Link>
                }
              
                {/* <Link to="/auth/login" className="btn btn-primary">Login</Link> */}
            </div>
            
        </div>
    );
};

export default Navbar;