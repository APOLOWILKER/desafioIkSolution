import { createContext, useState } from 'react'
// import {ITask} from '../services/api/tasks/TaskService'

type ITodo = {
  id?: number,
  title: string,
  nome: string,
  date?: string,
}

interface ITodoContext {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>,
}

export const TodoContext = createContext<ITodoContext>({
  todos: [],
  setTodos: () => void 0,
});

type Props = {
  children: React.ReactNode;
}



export const TodoProvider: React.FC<Props> = ({ children }) => {
  const [ todos, setTodos] = useState<ITodo[]>([]);

  // const handleTaskDeletion = (todoId: number | undefined): void => {
  //   const newTodo = todos.filter((todo) => todo.id !== todoId);

  //   setTodos(newTodo)
  // }

  const value = {todos, setTodos};

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
