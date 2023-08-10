import Image from 'next/image';
import StoryModal from '../storyModal/StoryModal';

const Story = ({ user, handleShowStory, handleCloseStory, showStory }) => {
	const { image, username, name } = user;
	return (
		<div>
			<div>
				<Image
					onClick={handleShowStory}
					className="h-14 w-14 rounded-full p-[1.5px] border-[#F2C608] border-2 object-contain cursor-pointer"
					src={image}
					alt="User Avatar"
					width={100}
					height={100}
				/>
			</div>

			{/* <StoryModal
				showStory={showStory}
				handleClose={handleCloseStory}
				image={image}
				name={name}
			></StoryModal> */}
		</div>
	);
};

export default Story;
