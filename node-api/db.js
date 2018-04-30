import mongoose from "mongoose";
import bluebird from "bluebird";
import { userName, password, url, dbName } from "./dbconfig.json";
import todoSchema from "./api/models/TodoModel";
import userSchema from "./api/models/UserModel";

const dbUrl = `mongodb://${userName}:${password}@${url}/${dbName}`;

mongoose.Promise = bluebird;

mongoose.connect(dbUrl);

//connection.on() --> listens to connection events
//@param: event, callback
mongoose.connection.on("connected", function() {
  console.log(`Mongoose connected to: ${dbUrl}`);
});

mongoose.connection.on("disconnected", function() {
  console.log(`Mongoose disconnected from: ${dbUrl}`);
});

mongoose.connection.on("error", function(error) {
  console.log(`Mongoose connection failed: ${error}`);
});

process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log("Mongoose disconnected through app termination.");
    //exits process
    process.exit(0);
  });
});

process.on("SIGTERM", function() {
  mongoose.connection.close(function() {
    console.log("Mongoose disconnected through app termination.");
    process.exit(0);
  });
});

//will be triggered only once
process.once("SIGUSR2", function() {
  mongoose.connection.close(function() {
    console.log("Mongoose disconnected through app terminstion.");
    process.kill(process.pid, "SIGUSR2");
  });
});
