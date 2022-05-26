import { Api } from '../ApiConfig';
import { ApiException } from '../ErrorException';

export interface ITask  {
  id?: number,
  createdAt?: string,
  updatedAt?: string,
  titleTask: string,
  nameTask: string,
  dataTask: string,
  hourTask: string,
}

const getAll = async (): Promise<ITask[] | ApiException> => {
  try{
    const {data} = await Api().get('/tasks');
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao buscar os registros.');
  }
};
const getById = async (id: number): Promise<ITask | ApiException> => {
  try{
    const {data} = await Api().get(`/tasks/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao consultar o registro.');
  }
};

const create = async (dataToCreate: Omit<ITask, 'id, createdAt, updatedAt'> ): Promise<ITask | ApiException> => {
  try{
    const {data} = await Api().post('/tasks', dataToCreate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao criar registro.');
  }
};

const update = async (id: string, dataToUpdate: ITask): Promise<ITask[] | ApiException> => {
  try{
    const {data} = await Api().patch(`/tasks/${id}`, dataToUpdate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao atualizar o registro.');
  }
};

const deleteById = async (id: string): Promise<undefined | ApiException> => {
  try{
    await Api().get(`/tasks/${id}`);
    return undefined;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao apagar o registro.');
  }};

export const TaskService = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};