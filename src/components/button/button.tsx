import type { FC } from 'react'
import type { ButtonProps } from './button.types'
import clsx from 'clsx'

const buttonVariants = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-secondary-foreground',
  outline: 'bg-white text-black',
  destructive: 'bg-destructive text-destructive-foreground',
}

const buttonSizes = {
  small: 'px-2 py-1 text-sm w-24',
  medium: 'px-4 py-2 text-base w-48',
  large: 'p-2 text-lg w-full',
}

export const Button: FC<ButtonProps> = ({ label, variant = 'primary', size = 'medium', className, ...props }) => {
  return (
    <button
      className={clsx(
        'cursor-pointer disable:opacity-50 rounded-full h-12 font-semibold tracking-wider',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {label}
    </button>
  )
}
