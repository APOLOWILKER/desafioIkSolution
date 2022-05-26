import { createContext, useState } from 'react'

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

  const value = {todos, setTodos};

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
