import React from 'react'

const HomeButton = ({ title }) => {
	return (
		<>
			<button
				className="h-12 w-28 bg-primary-color hover:bg-teal-700 border-teal-500 text-white
             rounded-md hover:text-white dark:bg-black hover:border-white dark:hover:bg-[#2a0f17] hover:scale-105 transition duration-300 ease-in-out"
			>
				{title}
			</button>
		</>
	);
};

export default HomeButton