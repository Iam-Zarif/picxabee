import mongoose from "mongoose";

const { Schema } = mongoose;

let Story;

try {
    // Try to get the existing model if it exists
    Story = mongoose.model("Story");
} catch {
    // If the model doesn't exist, define it
    const storySchema = new Schema({
        // name: {
        //   type: String,
        //   unique: true,
        //   required: true,
        // },
        // email: {
        //   type: String,
        //   unique: true,
        //   required: true,
        // },
        // profile_picture: {
        //   type: String,
        //   required: true
        // },
        username: {
            type: String,
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