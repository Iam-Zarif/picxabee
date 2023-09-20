import React from 'react';

const EditProfileModal = ({ isVisible, onClose, children }) => {

  if (!isVisible) return null;
  

  const handleClose = (e) => {
    if (e.target.id === "wrapper"){
      onClose()
    };
    }
  return (
    <div className='z-50 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center overflow-y-scroll' id='wrapper' onClick={handleClose}>
      <div className='w-[600px] h-4/5 flex flex-col'>
        <button
          onClick={() => onClose()}
          className='text-white text-xl place-self-end'>X</button>
        <div className='bg-white p-2 rounded'>{children}</div>
      </div>
    </div>
  );
};

export default EditProfileModal;