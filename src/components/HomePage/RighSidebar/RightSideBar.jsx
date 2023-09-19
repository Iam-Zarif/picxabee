import React from 'react';
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions';
import TrandingTopicList from '../leftSidebar/TrandingTopicList';
import Ad from '@/components/ad/Ad';

const RightSideBar = () => {
    return (
        <>
            <div className=''>

                <Ad />
            </div>


            <div className='my-5'>
                {/* <MiniProfile /> */}
                <Suggestions />
            </div>

            <div className=''>
                <TrandingTopicList />
            </div>
        </>
    );
};

export default RightSideBar;