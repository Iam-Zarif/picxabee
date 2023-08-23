const ProfileStory = ({img}) => {
    return (
       <div>
         <div className='h-24 w-24 bg-gray-200 rounded-full '>
            <div className='bg-white rounded-full p-1'>
           <img className='h-24 w-24 rounded-full object-cover' src={img} alt='story_img' />
            </div>
        </div>
       </div>
    );
};

export default ProfileStory;