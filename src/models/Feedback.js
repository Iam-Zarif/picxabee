import mongoose from 'mongoose';

const { Schema } = mongoose;

const feedbackSchema = new Schema(
	{
		author: {
			email: String,
			name: String,
			profile_picture: String,
		},
		feedback: String,
	},
	{ timestamps: true }
);

// If the Feedback collection does not exist, create a new one.
export default mongoose.models.Feedback ||
	mongoose.model('Feedback', feedbackSchema);
