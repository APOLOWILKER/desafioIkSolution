import * as express from 'express';
import {
  validateTitleTask,
  validateNameTask,
} from '../middlewares/validateTasks';
import TaskController from '../controller/Todo';

const taskRouter = express.Router();
const taskController = new TaskController();

// ==== ROUTE TASKS ===

taskRouter.delete(
  '/:id',
  taskController.deleteTask,
);

taskRouter.patch(
  '/:id',
  validateNameTask,
  validateTitleTask,
  // validateHourTask,
  // validateDataTask,
  taskController.updateTask,
);

taskRouter.post(
  '/',
  validateNameTask,
  validateTitleTask,
  // validateHourTask,
  // validateDataTask,
  taskController.creatTask,
);

taskRouter.get(
  '/',
  taskController.getAll,
);

export default taskRouter;
