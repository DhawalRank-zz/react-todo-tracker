import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";
import jwt from "jsonwebtoken";
import { AUTH_SECRET } from "./authconfig";

const userSchema = mongoose.model("Users");

export function login(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  userSchema.findOne({ username: username }).exec((err, foundUser) => {
    let response = {
      status: 400,
      message: "Uncaught Error"
    };
    if (err) {
      response = { status: 400, message: { error: err } };
    } else if (foundUser === null) {
      response = { status: 401, message: { error: "Unauthorized User" } };
    } else {
      if (bcrypt.compareSync(password, foundUser.password)) {
        const token = jwt.sign({ userName: foundUser.userName }, AUTH_SECRET, {
          expiresIn: 3600
        });
        response = { status: 200, message: { isLoggedin: true, token: token } };
      } else {
        response = { status: 401, message: { error: "Unauthorized User" } };
      }
    }
    res.status(response.status).json(response.message);
  });
}
