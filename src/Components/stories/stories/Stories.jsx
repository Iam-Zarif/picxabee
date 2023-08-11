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
		image: 'https://i.ibb.co/vYrpmmQ/nishat.png',
	},
	{
		name: 'Jane Smith',
		username: 'janesmith456',
		image: 'https://i.ibb.co/G5MNXHQ/jahid.png',
	},
	{
		name: 'Michael Johnson',
		username: 'mikejohnson789',
		image: 'https://i.ibb.co/c1pwvST/fatin.png',
	},
	{
		name: 'Emily Williams',
		username: 'emilywills',
		image: 'https://i.ibb.co/CmMCn23/admin.jpg',
	},
	{
		name: 'David Brown',
		username: 'dbrown',
		image: 'https://i.ibb.co/qyZJS99/rezwan.png',
	},
	{
		name: 'John Doe',
		username: 'johndoe123',
		image: 'https://i.ibb.co/vYrpmmQ/nishat.png',
	},
	{
		name: 'Jane Smith',
		username: 'janesmith456',
		image: 'https://i.ibb.co/G5MNXHQ/jahid.png',
	},
	{
		name: 'Michael Johnson',
		username: 'mikejohnson789',
		image: 'https://i.ibb.co/c1pwvST/fatin.png',
	},
	{
		name: 'Emily Williams',
		username: 'emilywills',
		image: 'https://i.ibb.co/CmMCn23/admin.jpg',
	},
	{
		name: 'David Brown',
		username: 'dbrown',
		image: 'https://i.ibb.co/qyZJS99/rezwan.png',
	},
	{
		name: 'Emily Williams',
		username: 'emilywills',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'John Doe',
		username: 'johndoe123',
		image: 'https://i.ibb.co/vYrpmmQ/nishat.png',
	},
	{
		name: 'Jane Smith',
		username: 'janesmith456',
		image: 'https://i.ibb.co/G5MNXHQ/jahid.png',
	},
	{
		name: 'Michael Johnson',
		username: 'mikejohnson789',
		image: 'https://i.ibb.co/c1pwvST/fatin.png',
	},
	{
		name: 'Emily Williams',
		username: 'emilywills',
		image: 'https://i.ibb.co/CmMCn23/admin.jpg',
	},
	{
		name: 'David Brown',
		username: 'dbrown',
		image: 'https://i.ibb.co/qyZJS99/rezwan.png',
	},
	{
		name: 'John Doe',
		username: 'johndoe123',
		image: 'https://i.ibb.co/vYrpmmQ/nishat.png',
	},
	{
		name: 'Jane Smith',
		username: 'janesmith456',
		image: 'https://i.ibb.co/G5MNXHQ/jahid.png',
	},
	{
		name: 'Michael Johnson',
		username: 'mikejohnson789',
		image: 'https://i.ibb.co/c1pwvST/fatin.png',
	},
	{
		name: 'Emily Williams',
		username: 'emilywills',
		image: 'https://i.ibb.co/CmMCn23/admin.jpg',
	},
	{
		name: 'David Brown',
		username: 'dbrown',
		image: 'https://i.ibb.co/qyZJS99/rezwan.png',
	},
	{
		name: 'Jane Smith',
		username: 'janesmith456',
		image: 'https://i.ibb.co/HqTD1KR/woman.png',
	},
	{
		name: 'John Doe',
		username: 'johndoe123',
		image: 'https://i.ibb.co/vYrpmmQ/nishat.png',
	},
	{
		name: 'Jane Smith',
		username: 'janesmith456',
		image: 'https://i.ibb.co/G5MNXHQ/jahid.png',
	},
	{
		name: 'Michael Johnson',
		username: 'mikejohnson789',
		image: 'https://i.ibb.co/c1pwvST/fatin.png',
	},
	{
		name: 'Emily Williams',
		username: 'emilywills',
		image: 'https://i.ibb.co/CmMCn23/admin.jpg',
	},
	{
		name: 'David Brown',
		username: 'dbrown',
		image: 'https://i.ibb.co/qyZJS99/rezwan.png',
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
