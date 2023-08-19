'use client';

import Image from 'next/image';

const CreatePost = () => {
	const handlePost = () => {
		const post = {
			title: 'create post',
		};

		fetch('http://localhost:3000/api/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(post),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<>
			<div className="mt-10">
				<div className="flex gap-x-5 bg-[#F9F5F6] px-10 py-5">
					<Image
						src="https://i.ibb.co/p4cD0Gs/good-deal-right-corner-confident-pleasant-friendly-looking-african-american-gorgeous-woman-with-afro.jpg"
						className="w-14 h-14 rounded-[50%] object-cover"
						alt="img"
						width={60}
						height={60}
					/>

					<div>
						<textarea
							name=""
							id=""
							cols="60"
							rows="3"
							className="resize-none"
						></textarea>
						<div>
							<button
								type="submit"
								onClick={handlePost}
								className="btn btn-primary block "
							>
								POST
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreatePost;
