import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';
import addImage from "../../assets/bg.png"

const RightAside = () => {
    return (
        <div className='space-y-8  '>
            <SocialLogin/>
            <FindUs/>
            <Qzone/>
            <div className="">
                <img src={addImage} alt="" className='w-full'/>
            </div>

            
        </div>
    );
};

export default RightAside;