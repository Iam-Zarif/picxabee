'use client';
import toast from 'react-hot-toast';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import photo from "../../../public/supprt.jpg"
import Image from 'next/image';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Link from 'next/link';
const Support = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_0072tye',
				'template_v40hlak',
				form.current,
				'hjlQXyfQJv9KggQqg'
			)
			.then(
				(result) => {
					console.log(result.text);
					toast.success('Message sent successfully!');
					// reset();
				},
				(error) => {
					toast.error('An error occurred while sending the message.');
					console.error('Error:', error);
				}
			);
	};

	return (
		<div className="my-container h-[100vh] flex flex-col justify-center items-center p-5 lg:p-0">
			<Link href={"/auth/signin"}><AiOutlineArrowLeft size={22} className='text-primary-color cursor-pointer absolute top-4 left-4'/></Link>
			<div className="grid lg:grid-cols-3 w-full"></div>
			<div className="text-center">
				<h1 className="text-4xl font-semibold">Contact to Picxabee</h1>
				<p className="font-semibold">Send your message to us.</p>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8 lg:mx-8 xl:mx-0'>
				<div>
					<Image src={photo} height={500} width={550} alt='photo' className='w-full lg:h-96 h-32'></Image>
				</div>
				<div><form ref={form} onSubmit={sendEmail} className="mt-8 ">
				<input
					type="text"
					name="user_name"
					placeholder="Name"
					className={`block mt-3 p-3 border border-primary-color outline-primary-color rounded-md w-full bg-transparent `}
				/>

				<input
					type="email"
					name="user_email"
					placeholder="Email"
					className={`block mt-3 p-3 border border-primary-color outline-primary-color rounded-md w-full bg-transparent `}
				/>
	
				<textarea
					name="message"
					placeholder="Message..."
					className={`block mt-3 p-3 border border-primary-color h-36 outline-primary-color rounded-md w-full bg-transparent `}
				/>

				<input
					type="submit"
					value="Send"
					className="bg-primary-color w-full text-white rounded-md p-3 cursor-pointer mt-3"
				/>
			</form></div>
			</div>
		</div>
	);
};
export default Support;

