// controller

import { Request, Response, NextFunction } from 'express';
import connection from '../models/connection';
import TaskModel from '../models/ModelTasks';
import TaskService from '../services/ServiceTask';

export default class TaskController {
  taskService = new TaskService();

  taskModel = new TaskModel(connection);

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const tasks = await this.taskService.getAll();
      return res.status(200).json(tasks);
    } catch (error) {
      console.error();
      next(error);
    }
  };

  public creatTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { titleTask, nameTask, dataTask, hourTask } = req.body;

      const tasks = await this.taskService.creatTask({titleTask, nameTask, dataTask, hourTask});

      return res.status(200).json(tasks);
    } catch (error) {
      console.error();
      next(error);
    }
  };

  public deleteTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      await this.taskModel.deleteTask(+id);

      return res.status(200).json({ message: 'Task deleted ' });
    } catch (error) {
      console.error();
      next(error);
    }
  };

  public updateTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { titleTask, nameTask, dataTask , hourTask } = req.body;
      const id = Number(req.params.id);

      const updateTask = await this.taskService.updateTask(
        { id, titleTask, nameTask, dataTask , hourTask },
      );

      return res.status(200).json(updateTask);
    } catch (error) {
      console.error();
      next(error);
    }
  };
}
