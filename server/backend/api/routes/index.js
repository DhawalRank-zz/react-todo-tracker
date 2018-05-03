import express from "express";
import {
  getTodoList,
  addTodo,
  deleteTodo,
  getTodoById
} from "../controllers/TodoController";

import { login } from "../controllers/AuthController";

const router = express.Router();

router
  .route("/todo")
  .get(getTodoList)
  .post(addTodo);

router
  .route("/todo/:id")
  .get(getTodoById)
  .delete(deleteTodo);

router.route("/login").post(login);

export default router;
