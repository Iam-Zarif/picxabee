import React from 'react';
import Image from 'next/image';

const StoryModal = ({ showStory, handleClose, image, name }) => {
	console.log(image);
	return (
		<div
			onClick={handleClose}
			className={`fixed top-0 left-0 w-full flex justify-center align-middle min-h-[700px] bg-black ${
				showStory ? 'block' : 'hidden'
			}`}
		>
			<div className="grid grid-cols-1">
				<Image
					className="h-14 w-14 rounded-full p-[1.5px] border-[#024d47] border-2 object-contain cursor-pointer"
					src={image}
					alt="User Avatar"
					width={100}
					height={100}
				/>
				<p className="text-gray-50 bg-white">{name}</p>
			</div>
		</div>
	);
};

export default StoryModal;
