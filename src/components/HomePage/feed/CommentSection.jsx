import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineSend } from 'react-icons/ai';

const CommentSection = ({ id, open }) => {
const [reload, setReload] = useState(0)
	console.log(id);
	const { register, handleSubmit, setValue, watch, reset } = useForm();
	const watchComment = watch('comment', '');

useEffect(()=>{

}, [reload])

	const onSubmit = (data) => {
		if (data.comment.trim() !== '') {
			// Perform your submit logic here
			reset();
		}
		console.log(data);
		const comment = {
			id,
			author: {
				name: '',
				profile_picture:
					'',
			},

			comment: data.comment,
		};
		console.log(comment);

		fetch('https://picxabee.vercel.app/api/posts', {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(comment),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error('Network response was not ok');
				}
				return res.json();
			})
			.then((data) => {
				setReload(!reload)
				console.log('Received data:', data);
			})
			.catch((error) => {
				console.error('Fetch error:', error);
			});
	};
	return (
		<div className={`${open ? '' : 'hidden'}`}>
			<form className="flex relative" onSubmit={handleSubmit(onSubmit)}>
				<textarea
					{...register('comment')}
					value={watchComment}
					onChange={(e) => setValue('comment', e.target.value)}
					placeholder="Write a comment..."
					className="border-none focus:outline-none overflow-visible min-h-fit max-h-fit w-11/12 break-words text-gray-400 bg-slate-50 rounded-md"
				/>

				<button
					type="submit"
					className={`font-normal  ml-5 flex justify-center  ${
						watchComment ? 'visible' : 'hidden'
					}`}
				>
					<AiOutlineSend
						size={26}
						className="absolute top-2 right-3 hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/>
				</button>
			</form>
		</div>
	);
};

export default CommentSection;
