import useAuth from '@/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { AiOutlineSend } from 'react-icons/ai';

const CommentSection = ({ id, open }) => {
	const { user } = useAuth();


	const { register, handleSubmit, setValue, watch, reset } = useForm();
	const watchComment = watch('comment', '');

	const onSubmit = (data) => {
		if (data.comment.trim() !== '') {
			reset();
		}
		// console.log(data);
		const newComment = {
			id,
			author: {
				email: user?.email,
				name: user?.displayName,
				profile_picture: user?.photoURL,
			},

			comment: data.comment,
		};
		// console.log(newComment);

		fetch('api/posts/comments', {
			method: 'PATCH',

			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(newComment),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error('Network response was not ok');
				}

				return res.json();
			})
			.then((data) => {
				console.log('Received data:', data);
			})
			.catch((error) => {
				console.error('Fetch error:', error);
			});
	};

	return (
		<div className={`${open ? '' : 'hidden'}`}>
			<div className="pb-5">
				<form
					className="flex items-center justify-between mt-3"
					onSubmit={handleSubmit(onSubmit)}
				>
					<textarea
						{...register('comment')}
						value={watchComment}
						onChange={(e) => setValue('comment', e.target.value)}
						placeholder="Write a comment..."
						className="border-none focus:outline-none overflow-visible min-h-8 p-3 max-h-fit w-full break-words text-black dark:text-white bg-gray bg-opacity-50 dark:bg-black-bg-secondary rounded-md"
					/>

					<div className="cursor-pointer">
						<button
							type="submit"
							className={`font-normal  ml-5 flex justify-center  ${
								watchComment ? 'visible' : 'hidden'
							}`}
						>
							<AiOutlineSend
								size={24}
								className="md:right-32 md:mr-[10px] hover:scale-110 duration-300 hover:text-gray-400 hover:cursor-pointer"
							/>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CommentSection;
