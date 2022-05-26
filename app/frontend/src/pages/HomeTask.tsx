import React, { useState } from 'react'
import { ButtonAll } from '../components/Button';
import { InputTask } from '../components/InputTask'

export function Home() {
  const [title, setTitle] = useState<string>('');
  const [nome, setNome] = useState('');

  return (
    <>
      <header className='title'>
        <h1>MEUS COMPROMISSOS</h1>
        <p><i>Seja bem vindo:</i> Usuário</p>
      </header>
      <main className='container'>
        <InputTask 
        label='Titulo'
        value={title}
        onChange={newValue => setTitle((newValue.target as HTMLInputElement).value)}
        />

        <InputTask 
        label='Nome'
        value={nome}
        onChange={newValue => setNome((newValue.target as HTMLInputElement).value)}
        />

        <ButtonAll className='button-create'>Criar</ButtonAll>
        {/* <ButtonAll icon={}></ButtonAll> */}
        
      </main>
    </>
  )
}

