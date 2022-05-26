import React, { useContext, useState } from 'react'
import { ButtonAll } from '../components/Button';
import { InputTask } from '../components/InputTask'
import { TaskBox } from '../components/TasksBox';
import { TodoContext } from '../context/Context';

export function Home() {
  const [title, setTitle] = useState<string>('');
  const [nome, setNome] = useState('');
  const {setTodos, todos} = useContext(TodoContext)
  

  const handleTaskDeletion = (todoId: number | undefined): void => {
    const newTodo = todos.filter((todo) => todo.id !== todoId);

    setTodos(newTodo)
  }

  return (
    <>
      <header className='title'>
        <h1>MEUS COMPROMISSOS</h1>
        <p><i>Seja bem vindo:</i> Usuário</p>
      </header>
      <main className='container'>
        <div className='containerInputs'>
          <InputTask
          className='tituloInput'
          label='Titulo'
          value={title}
          onChange={newValue => setTitle((newValue.target as HTMLInputElement).value)}
          />

          <InputTask
          className='nomeInput'
          label='Nome'
          value={nome}
          onChange={newValue => setNome((newValue.target as HTMLInputElement).value)}
          />
            <ButtonAll 
            className='buttonCreate'
            onClick={() => setTodos((prev) => ([...prev, {nome, title}])) }
            >Criar</ButtonAll>
        </div>
        {
          todos.map((todo, key) => (<TaskBox
            key={`${key}_${todo.nome}`} 
            titulo={todo.title} nome={todo.nome}
            editClick={(titulo, nome) => console.log(titulo, nome) }
            deleteClick={() => handleTaskDeletion(todo.id) }
          />))
        }
      </main>
    </>
  )
}

