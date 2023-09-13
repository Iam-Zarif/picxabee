"use client"
import Lottie from "lottie-react";
import socialmedia from './socialmedia.json'

const Ad = () => {
    return (
        <div>
            <div>
                
                <Lottie animationData={socialmedia}></Lottie>
            </div>
        </div>
    );
};

export default Ad;