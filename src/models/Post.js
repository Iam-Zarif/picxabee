import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema(
	{
		author: {
			email: String,
			name: String,
			profile_picture: String,
		},
		comment: String,
	},
	{ timestamps: true }
);

const postSchema = new Schema(
	{
		author: {
			email: String,
			name: String,
			profile_picture: String,
		},
		content: String,
		image: String,
		likes: [{ email: String, name: String, profile_picture: String }], // Array of user IDs who liked the post
		comments: [commentSchema],
	},
	{ timestamps: true }
);

// If the Post collection does not exist, create a new one.
export default mongoose.models.Post || mongoose.model('Post', postSchema);
