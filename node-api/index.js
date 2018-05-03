import db from "./db";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import routes from "./api/routes";
import http from "http";
import { REACT_SERVER_ROOT } from "./reactconfig";

const app = express();
app.set("port", 3001);
console.log("Starting HTTP Server");
var server = http.createServer(app);

server.listen(app.get("port"), function() {
  var port = server.address().port;
  console.log(`Server running on port: ${port}`);
});

/* -----------Server code ends--------------- */

//display more information on console by using middleware
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", REACT_SERVER_ROOT);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  console.log(req.method, req.url);
  next();
});

//add static files
app.use("/node_modules", express.static(path.join(__dirname, "/node_modules")));

//extended: false --> only string and array from HTTP body
//extended: true --> all datatypes from HTTP body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set routes
app.use("/api", routes);
