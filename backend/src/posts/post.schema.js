
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    creator : String,
    title : String,
    message : String,
    tags : String,
    image : String,
    timestamp: String
})

const PostModel = mongoose.model("post", postSchema);
export default PostModel;


