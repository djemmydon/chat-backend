import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    requred: true,
  },
  image: {
    type: String,
    required: true,
  },
  comment: {
    type: Array,
  },
});


const Post = mongoose.model("Post", PostSchema);
export default Post;
