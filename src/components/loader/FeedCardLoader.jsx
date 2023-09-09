import ContentLoader from 'react-content-loader';

const FeedCardLoader = () => {
	return (
		<div className="relative">
			<ContentLoader
				speed={1}
				width={400} // Set the width of your feed card loader (square)
				height={400} // Set the height of your feed card loader (square)
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
				className="absolute top-10 left-0 right-10"
			>
				{/* Profile picture */}
				<circle cx="40" cy="40" r="40" />

				{/* Username */}
				<rect x="100" y="20" rx="3" ry="3" width="80" height="10" />

				{/* Timestamp */}
				<rect x="100" y="40" rx="3" ry="3" width="80" height="10" />

				{/* Post text */}
				<rect x="40" y="80" rx="3" ry="3" width="120" height="10" />
				<rect x="40" y="100" rx="3" ry="3" width="160" height="10" />

				{/* Like, Comment, Share buttons */}
				<rect x="40" y="140" rx="3" ry="3" width="40" height="10" />
				<rect x="80" y="140" rx="3" ry="3" width="40" height="10" />
				<rect x="120" y="140" rx="3" ry="3" width="40" height="10" />
			</ContentLoader>
			<div className="w-full h-[400px] bg-[#f3f3f3] rounded-md"></div>
		</div>
	);
};

export default FeedCardLoader;
