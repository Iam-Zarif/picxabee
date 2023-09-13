import mongoose from "mongoose";

const { Schema } = mongoose;

let User;

try {
    User = mongoose.model("Recyle");

} catch {
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