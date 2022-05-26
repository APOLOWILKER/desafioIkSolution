import React from 'react'

type ButtonProps = {
  icon?: React.ReactNode
}

export const ButtonAll: React.FC<ButtonProps & React.HTMLAttributes<HTMLButtonElement>> = ({icon, children, ...props}) => {

  return (
    <button {...props}>
      {icon && icon}
      {children}
    </button>
  )
}

