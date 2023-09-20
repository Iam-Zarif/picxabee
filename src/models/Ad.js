import mongoose from 'mongoose';

const { Schema } = mongoose;

const adSchema = new Schema(
	{
		author: {
			email: String,
			name: String,
			profile_picture: String,
		},

		image: String,
		privacy: String,
		status: String,
	},
	{ timestamps: true }
);

// If the Ad does not exist, create a new one.
export default mongoose.models.Ad || mongoose.model('Ad', adSchema);
