import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Comment = new Schema({
    text: {
        type: String,
        required: "Any kind of comment is required"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

export default Comment;