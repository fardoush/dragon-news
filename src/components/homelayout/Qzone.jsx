import React from 'react';
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import  playImage from "../../assets/playground.png";

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className="font-bold mb-5">Q-Zone</h2>
            <div className=" w-full space-y-5 ">
                <img src={swimmingImage} alt="" className='w-full'/>
                <img src={classImage} alt="" className='w-full' />
                <img src={playImage} alt="" className='w-full'/>
            </div>
        </div>
    );
};

export default Qzone;