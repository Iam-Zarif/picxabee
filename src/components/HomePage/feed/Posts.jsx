import SinglePost from './SinglePost';

async function getData() {
	
	const res = await fetch('https://picxabee.vercel.app/api/posts', {
		// cache: 'no-store',
		next:{
			revalidate :5
		}
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

const Posts = async () => {

	const posts = await getData();
	// console.log(posts);

	return (
		<>
			<div className="pb-28 pt-12 mx-auto w-full h-screen">
				{posts.map((post) => (
					<SinglePost key={post._id} post={post}></SinglePost>
				))}
			</div>
		</>
	);
};

export default Posts;
