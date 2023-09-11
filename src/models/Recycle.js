import mongoose from "mongoose";

const { Schema } = mongoose;

let User;

try {
    // Try to get the existing model if it exists
    User = mongoose.model("Recyle");
} catch {
    // If the model doesn't exist, define it
    const userSchema = new Schema({
        author: {
            email: {
                type: String
            },
            name: {
                type: String
            },
            profile_picture: {
                type: String
            }
        },
        content: {
            type: String,
        },
        image: {
            type: String
        },
        reactions: [
            {
                author: {
                    email: {
                        type: String
                    },
                    name: {
                        type: String
                    },
                    profile_picture: {
                        type: String
                    },
                }
            },
            { timestamps: true }
        ],
        comments: [
            {
                author: {
                    email: {
                        type: String
                    },
                    name: {
                        type: String
                    },
                    profile_picture: {
                        type: String
                    },
                },
                comment: {
                    type: String
                }
            },
            { timestamps: true }
        ],
        privacy: {
            type: String
        }
    }, {
        timestamps: true,
    });

    User = mongoose.model("Recyle", userSchema);
}

export default User;