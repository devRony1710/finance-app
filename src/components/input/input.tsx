import type { FC } from 'react'
import type { InputProps } from './input.types'
import clsx from 'clsx'

export const Input: FC<InputProps> = ({ label, htmlFor, className, errors, ...props }) => {
  return (
    <div className="flex flex-col gap-2 items-start w-full max-w-[20rem] h-auto">
      <label className="text-sm font-medium" htmlFor={htmlFor}>
        {label}
      </label>
      <input {...props} className={clsx('w-full px-2 py-1 border border-gray-300 rounded', className)} />
      {!!errors && <p className="text-red-500 text-xs font-bold">{errors}</p>}
    </div>
  )
}
