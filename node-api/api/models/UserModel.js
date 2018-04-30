import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }
});

mongoose.model("Users", userSchema);
