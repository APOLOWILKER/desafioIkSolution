export interface ITodo {
  id: number,
  title: string, 
  name: string,
  data?: string,
}

export type TodoContextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: number) => void;
}