import mongoose from "mongoose";

const { Schema } = mongoose;

let Story;

try {
    Story = mongoose.model("Story");

} catch {
    const storySchema = new Schema({
        author: {
            email: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            profile_pic: {
                type: String,
                required: true
            }
        },
        image: {
            type: String,
            require: true
        }
    }, {
        timestamps: true,
    });

    Story = mongoose.model("Story", storySchema);
}

export default Story;