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

const reactionSchema = new Schema(
	{
		author: {
			email: String,
			name: String,
			profile_picture: String,
		}
	},
	{ timestamps: true }
);

const donationSchema = new Schema(
	{
		author: {
			email: String,
			name: String,
			profile_picture: String,
		},
		content: String,
		image: String,
		reactions: [reactionSchema], // Array of user IDs who liked the post
		comments: [commentSchema],
		privacy: String,
		status: String,
		amount:Number
	},
	{ timestamps: true }
);

// If the Post collection does not exist, create a new one.
export default mongoose.models.Donation || mongoose.model('Donation', donationSchema);