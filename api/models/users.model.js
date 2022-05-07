import mongoose from "mongoose";

// schema User
const schemaUsers = {
  name: String,
  email: String,
  password: String,
  photo_url: { type: String, default: "" },
  description: { type: String, default: "" },
  fav_genre: { type: String, default: "" },
  total_comments: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now() },
};

// User model
const User = mongoose.model("User", schemaUsers, "users");

export default User;
