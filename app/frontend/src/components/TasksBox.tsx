import { Pencil, Trash } from 'phosphor-react';
import { ButtonAll } from './Button'

type PropsTask = {
  titulo: string;
  nome: string;
  editClick: (newValue: string, newNome: string) => void;
  deleteClick: () => void;
}

export const TaskBox: React.FC<PropsTask & React.HTMLAttributes<HTMLDivElement>> = ({titulo, nome, editClick, deleteClick}) => {

  return (
    <div className='containerTask'>
        <div className='infosTask'>
          <h2>{titulo}</h2>
          <p>{nome}</p>
          {/* <span></span> */}
        </div>
        <div>
          <ButtonAll onClick={() => editClick(titulo, nome)} icon={<Pencil weight='fill' color='teal' size={32} className="editBtn" />}></ButtonAll>
          <ButtonAll onClick={() => deleteClick()} icon={<Trash  color='teal' weight='fill' size={32} className="deleteBtn" />}></ButtonAll>
        </div>
    </div>
  )
}

