import React from 'react';
import { TbError404 } from "react-icons/tb";


const Error = () => {
    return (
        <div className='flex justify-center items-center flex-col h-screen'>
            <TbError404 className='text-secondary font-bold' size={158}/>

            <h2 className="text-5xl text-secondary font-semibold">Page Not Found</h2>
        </div>
    );
};

export default Error;