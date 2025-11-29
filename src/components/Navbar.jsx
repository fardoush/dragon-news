import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user} = use(AuthContext);
    return (
        <div className='flex justify-between items-center'>
            <div className="">{user && user.email}</div>
            <div className="nav flex gap-5 text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex gap-5">
                <img src={userIcon} alt="" className="" />
                {/* jodi user thake tahole logout btn dekhabe ar jodi na thake tahole login  */}
              
                <Link to="/auth/login" className="btn btn-primary">Login</Link>
            </div>
            
        </div>
    );
};

export default Navbar;