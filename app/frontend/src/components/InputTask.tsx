

export interface IInputsProps {
  label: string;
  value: string;
} 

export const InputTask: React.FC<IInputsProps & React.HTMLAttributes<HTMLInputElement>> = (props) => {

  return (
    <label>
      <span>{props.label}</span>
      <input 
      {...props}
      type="text"
      />
    </label>
  )
}

