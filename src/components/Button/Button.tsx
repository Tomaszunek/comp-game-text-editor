import React from 'react'

export interface ButtonProps {
  backgroundColor?: string
  label: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = ({ backgroundColor, onClick, label }: ButtonProps) => (
  <button
    type="button"
    className="flex flex-row"
    style={backgroundColor ? { backgroundColor } : {}}
    onClick={onClick}
  >
    {label}
  </button>
)

export default Button
