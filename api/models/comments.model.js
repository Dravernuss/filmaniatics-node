import mongoose from "mongoose";

// schema Comment
const schemaComments = {
  user_id: String,
  movie_id: Number,
  comment: String,
  created_at: { type: Date, default: Date.now() },
};

// Comment model
const Comment = mongoose.model("Comments", schemaComments, "comments");

export default Comment;
