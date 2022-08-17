import React from 'react'

interface buttonProps {
  className?: string
  children?: any
  onClick?: (params: any) => any
  disabled?: boolean
}

export const Button = (props: buttonProps) => {
  const { className, children, onClick, disabled } = props
  return (
    <button
      className={`bg-black text-white ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
