import IUpdateTasks from '../interfaces/updateTask';
import ICreateTask from '../interfaces/CreatTask';
import connection from '../models/connection';
import ModelTasks from '../models/ModelTasks';
import ITasks from '../interfaces/TaskInterface';

export default class TaskService {
  public model: ModelTasks;

  constructor() {
    this.model = new ModelTasks(connection);
  }

  public async getAll(): Promise<ITasks[]> {
    const tasks = await this.model.getAll();
    return tasks;
  }

  public creatTask({titleTask, nameTask, dataTask, hourTask}: ICreateTask)
    : Promise<ICreateTask> {
    return this.model.create({titleTask, nameTask, dataTask, hourTask})
  }

  public async updateTask(
    { id, titleTask, nameTask, dataTask, hourTask }: IUpdateTasks,
  ): Promise<ITasks | any> {
    await this.model.updateTask(
      { id, titleTask, nameTask, dataTask, hourTask },
    );
    const findTask = await this.getAll();
    const idMatch = findTask.filter((task: ITasks) => id === task.id);

    console.log(idMatch);

    return idMatch;
  }
}
