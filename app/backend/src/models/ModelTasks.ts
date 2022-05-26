import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import IUpdateTasks from '../interfaces/updateTask';
import ICreateTask from '../interfaces/CreatTask';
import ITasks from '../interfaces/TaskInterface';

export default class TaskModel {
  protected connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<ITasks[]> {
    const result = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM TodoDatabase.Tasks');
    const [rows] = result;
    return rows as ITasks[];
  }

  public async create({titleTask, nameTask, dataTask, hourTask}: ICreateTask)
    : Promise<ICreateTask> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO TodoDatabase.Tasks (titleTask, nameTask, dataTask, hourTask) VALUES (?, ?, ?, ?)',
      [titleTask, nameTask, dataTask, hourTask],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;

    const [select] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * from TodoDatabase.Tasks where id=?',
      [insertId],
    );

    return select as unknown as ITasks;
  }

  public async deleteTask(id: number) {
    await this.connection.execute<RowDataPacket[]>(
      'DELETE FROM TodoDatabase.Tasks WHERE id=?',
      [id],
    );
  }

  public async updateTask({ id, titleTask, nameTask, dataTask, hourTask }: IUpdateTasks) {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'UPDATE TodoDatabase.Tasks SET titleTask=?, nameTask=?, dataTask=?, hourTask=? WHERE id=?',
      [titleTask, nameTask, dataTask, hourTask, id],
    );
    return result;
  }
}
