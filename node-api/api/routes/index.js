import express from'express';
import { getTodoList, addTodo, deleteTodo, getTodoById } from '../controllers/TodoController'

const router = express.Router();

router
  .route('/todo')
  .get(getTodoList)
  .post(addTodo);

router
  .route('/todo/:id')
  .get(getTodoById)
  .delete(deleteTodo);

export default router;