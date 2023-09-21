import mongoose from 'mongoose';

const { Schema } = mongoose;

const paymentSchema = new Schema(
	{
        author: {
			email: String,
			name: String,
			profile_picture: String,
		},
		email: String,
        number: String,
        address: String,
		amount: Number,
	},
	{ timestamps: true }
);


export default mongoose.models.Payment ||
	mongoose.model('Payment', paymentSchema);