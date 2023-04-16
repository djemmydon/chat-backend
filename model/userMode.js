import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  followers: {
    type: Array,
  },
  following: {
    type: Array,
  },
});

const User = mongoose.model("User", userModel);
export default User;
