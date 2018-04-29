import mongoose from "mongoose";
import { checkDate } from "../helpers/StringHelper";

const TodoSchema = mongoose.model("Todos");

export function getTodoList(req, res) {
  TodoSchema.find().exec(function(err, todoList) {
    let response = {
      status: 520,
      message: { status: 520, message: "Unknown Error" }
    };
    if (err) {
      console.error(err);
      response = {
        status: 400,
        message: { status: 400, message: err.message }
      };
    } else if (!todoList) {
      console.warn("No data found");
      response = { status: 204, message: "No Content" };
    } else {
      console.log("Found " + todoList.length + " todo(s)");
      response = { status: 200, message: todoList };
    }
    res.status(response.status).json(response.message);
  });
}

export function addTodo(req, res) {
  const data = {
    title: req.body.title,
    date: checkDate(req.body.date)
      ? req.body.date
      : new Date().toISOString().slice(0, 10),
    done: req.body.done || false,
    alert: req.body.alert
  };

  TodoSchema.create(data, function(err, aTodo) {
    let response = {
      status: 520,
      message: { status: 520, message: "Unknown Error" }
    };
    if (err) {
      console.error(err);
      response = {
        status: 400,
        message: { status: 400, message: err.message }
      };
    } else {
      response = { status: 201, message: aTodo };
    }
    res.status(response.status).json(response.message);
  });
}

export function deleteTodo(req, res) {
  const id = req.params.id;

  TodoSchema.findByIdAndRemove(id, function(err, aTodo) {
    let response = {
      status: 520,
      message: { status: 520, message: "Unknown Error" }
    };
    if (err) {
      console.error(err);
      response = {
        status: 400,
        message: { status: 400, message: err.message }
      };
    } else if (aTodo === null) {
      console.warn("No data found");
      response = { status: 204, message: "" };
    } else {
      response = { status: 200, message: aTodo };
    }
    res.status(response.status).json(response.message);
  });
}

export function getTodoById(req, res) {
  const id = req.params.id;

  TodoSchema.findById(id, function(err, aTodo) {
    let response = {
      status: 520,
      message: { status: 520, message: "Unknown Error" }
    };
    if (err) {
      console.error(err);
      response = {
        status: 400,
        message: { status: 400, message: err.message }
      };
    } else if (aTodo === null) {
      console.warn("No data found");
      response = { status: 204, message: "" };
    } else {
      response = { status: 200, message: aTodo };
    }
    res.status(response.status).json(response.message);
  });
}
