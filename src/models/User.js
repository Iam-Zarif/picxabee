import mongoose from "mongoose";

const { Schema } = mongoose;

let User;

try {
  // Try to get the existing model if it exists
  User = mongoose.model("User");
} catch {
  // If the model doesn't exist, define it
<<<<<<< HEAD
  const userSchema = new Schema(
		{
			name: {
				type: String,
				required: true,
			},
			email: {
				type: String,
				unique: true,
				required: true,
			},
			bio: {
				type: String,
			},
			followers: {
				type: Number,
			},
			following: {
				type: Number,
			},
			posts: {
				type: Number,
			},
			profile_picture: {
				type: String,
			},
			save_items: {
				type: Array,
			},
		},
		{
			timestamps: true,
		}
	);
=======
  const userSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    bio: {
      type: String,
    },
    followers: {
      type: Number,
    },
    following: {
      type: Number,
    },
    posts: {
      type: Number,
    },
    profile_picture: {
      type: String,
    },
    role: {
      type: String,
    },
  }, {
    timestamps: true,
  });
>>>>>>> 3054a8c2482fe9a2ee805bbfc0f69bbc581ac1ff

  User = mongoose.model("User", userSchema);
}

export default User;