import React, { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export const Button = (props: ButtonProps) => {
  const { className, children } = props

  const getSizeClasses = () => {
    switch (props.size) {
      case 'lg':
        return 'px-8 py-4 text-lg'
      case 'md':
        return 'px-6 py-3 text-md'
      case 'sm':
        return 'px-4 py-2 text-sm'
      default:
        return 'px-6 py-3 text-md'
    }
  }

  const getDarkVariant = () => 'dark:bg-zinc-800 dark:text-white'

  return (
    <button
      className={`bg-black text-white ${getDarkVariant()} rounded-full  ${getSizeClasses()} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
