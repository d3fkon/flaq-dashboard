import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  showIcon: boolean;
}

export const Button = (props: ButtonProps ) => {
  const { className, children } = props
  return (
    <button
      className={`bg-black text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
