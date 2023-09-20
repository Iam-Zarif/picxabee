import mongoose from 'mongoose';

const { Schema } = mongoose;

let User;

try {
  // Try to get the existing model if it exists
  User = mongoose.model('User');
} catch {
  // If the model doesn't exist, define it
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
        type: Array,
        default: []
      },
      following: {
        type: Array,
        default: []
      },
      profile_picture: {
        type: String,
      },
      cover_photo: {
        type: String
      },
      information: {
        school: {
          type: String
        },
        college: {
          type: String
        },
        university: {
          type: String
        },
        location: {
          type: 'string'
        },
        gender: {
          type: String
        },
        facebook: {
          type: String
        },
        instagram: {
          type: String
        },
        linkDin: {
          type: String
        }
      },
      role: {
        type: String,
      },
      bookmarks: {
        type: Array,
        default: []
      }
    },
    {
      timestamps: true,
    }
  );

  User = mongoose.model('User', userSchema);
}

export default User;
