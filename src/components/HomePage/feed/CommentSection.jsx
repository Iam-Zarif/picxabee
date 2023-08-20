import React from 'react';
import { useForm } from 'react-hook-form';
import {AiOutlineSend} from 'react-icons/ai'

const CommentSection = ({ open }) => {
	const { register, handleSubmit, setValue, watch, reset } = useForm();
	const watchComment = watch('comment', '');

	const onSubmit = (data) => {
		if (data.comment.trim() !== '') {
			// Perform your submit logic here
			reset();
		}
		console.log(data);
	};

	return (
		<div className={`${open ? '' : 'hidden'}`}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<textarea
					{...register('comment')}
					value={watchComment}
					onChange={(e) => setValue('comment', e.target.value)}
					placeholder="Write a comment..."
					className="border-none focus:outline-none overflow-visible min-h-fit max-h-fit w-1/2 break-words text-gray-400 bg-slate-50 rounded-md"
				/>

				<button
					type="submit"
					className={`font-normal  ml-5 flex justify-center  ${
						watchComment ? 'visible' : 'hidden'
					}`}
				>
					<AiOutlineSend
						size={26}
						className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/>
				
				</button>
			</form>
		</div>
	);
};

export default CommentSection;
