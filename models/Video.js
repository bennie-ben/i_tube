import mongoose from "mongoose";

const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    fileURL: {
        type: String,
        required: "File URL is required"
    },
    title: {
        type: String,
        required : "Title is required"
    },
    description : String,
    views : {
        type : Number,
        default : 0
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

const Video = mongoose.model("Video", VideoSchema);

export default Video;