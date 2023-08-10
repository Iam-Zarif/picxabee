'use client';
import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Stories.css';

import { Navigation, Pagination } from 'swiper/modules';
import Story from '../story/Story';
// import {Swiper, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const users = [
	{
		name: 'John Doe',
		username: 'johndoe123',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Jane Smith',
		username: 'janesmith456',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Michael Johnson',
		username: 'mikejohnson789',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Emily Williams',
		username: 'emilywills',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'David Brown',
		username: 'dbrown',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Olivia Wilson',
		username: 'owilson',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'William Lee',
		username: 'wlee456',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Sophia Martinez',
		username: 'sophiam',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'John Doe',
		username: 'johndoe123',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Jane Smith',
		username: 'janesmith456',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Michael Johnson',
		username: 'mikejohnson789',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Emily Williams',
		username: 'emilywills',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'David Brown',
		username: 'dbrown',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Olivia Wilson',
		username: 'owilson',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'William Lee',
		username: 'wlee456',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Sophia Martinez',
		username: 'sophiam',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'John Doe',
		username: 'johndoe123',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Jane Smith',
		username: 'janesmith456',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Michael Johnson',
		username: 'mikejohnson789',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Emily Williams',
		username: 'emilywills',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'David Brown',
		username: 'dbrown',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Olivia Wilson',
		username: 'owilson',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'William Lee',
		username: 'wlee456',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Sophia Martinez',
		username: 'sophiam',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'John Doe',
		username: 'johndoe123',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Jane Smith',
		username: 'janesmith456',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Michael Johnson',
		username: 'mikejohnson789',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Emily Williams',
		username: 'emilywills',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'David Brown',
		username: 'dbrown',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Olivia Wilson',
		username: 'owilson',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'William Lee',
		username: 'wlee456',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'Sophia Martinez',
		username: 'sophiam',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
];

const Stories = () => {
	const [showStory, setShowStory] = useState(false);
	const handleShowStory = () => {
		setShowStory(true);
	};

	const handleCloseStory = () => {
		setShowStory(false);
	};
	return (
		<>
		
	<Swiper
				slidesPerView={12}
				spaceBetween={0}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Navigation, Pagination]}
				className="w-full mySwiper mx-auto my-10"
			>
				{users.map((user, i) => (
					<SwiperSlide key={i}>
						<Story
							user={user}
							handleShowStory={handleShowStory}
							handleCloseStory={handleCloseStory}
							showStory={showStory}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Stories;
