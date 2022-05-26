import { Pencil, Trash } from 'phosphor-react';
import React from 'react'
import { ButtonAll } from './Button'

type PropsTask = {
  titulo: string;
  name: string;
}

export const TaskBox: React.FC<PropsTask & React.HTMLAttributes<HTMLDivElement>> = () => {

  return (
    <>
        <div>
          <h2>titulo</h2>
          <p>nome</p>
        </div>
        <div>
          <ButtonAll icon={<Pencil size={32} />}></ButtonAll>
          <ButtonAll icon={<Trash size={32} />}></ButtonAll>
        </div>
    </>
  )
}

