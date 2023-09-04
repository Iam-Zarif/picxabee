import React from 'react';
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions';
import TrandingTopicList from '../leftSidebar/TrandingTopicList';

const RightSideBar = () => {
    return (
        <>
            <div className='bg-black bg-opacity-20 h-[200px] ml-10 '>

            </div>

            <div className='my-5'>
                {/* <MiniProfile /> */}
                <Suggestions />
            </div>

            <div className='ml-10'>
            <TrandingTopicList />
            </div>
        </>
    );
};

export default RightSideBar;