import MiniProfile from '@/components/RightSideBar/MiniProfile';
import Suggestions from '@/components/RightSideBar/Suggestions';
import React from 'react';

const SuggestionSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
        <section className='col-span-2'>
          <div></div>
        </section>
        <section className='hidden xl:inline-grid md:col-span-1'>
         <div className='fixed top-20'>
         <MiniProfile />
         <Suggestions />
         </div>
        </section>
      </div>
    );
};

export default SuggestionSection;