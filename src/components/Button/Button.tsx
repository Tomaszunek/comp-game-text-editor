import React from 'react'

export interface ButtonProps {
  backgroundColor?: string
  label: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = ({ backgroundColor, onClick, label }: ButtonProps) => {
  return (
    <button
      className="flex flex-row"
      onClick={onClick}
      style={backgroundColor ? { backgroundColor } : {}}
      type="button"
    >
      {label}
    </button>
  )
}

export default Button
