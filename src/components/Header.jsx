import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <h1 className="text-6xl text-center">The Dragon News</h1>
            <p className="text-gray-400">Journalism Without Fear or Favour</p>
            

        </div>
    );
};

export default Header;