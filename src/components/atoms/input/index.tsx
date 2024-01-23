import { InputType } from './types'
import { cn } from '@/services/utils/className'

const Input = ({ variant, className, ...props }: InputType) => {
  return (
    <input
      className={cn('group-focus-within:placeholder:bottom-6', className, {
        'border-palette-primary border-b-solid p-4" flex h-14 w-full items-center justify-between gap-3 border-b bg-transparent text-white':
          variant === 'Standard',
        'selection:ctive:bg-red-25 rounded border-b-2 border-gray-50 bg-[#33333350] text-black hover:bg-red-100':
          variant === 'Filled',
        'border-palette-primary border-b-solid p-4" flex h-14 w-full items-center justify-between gap-3 rounded border bg-transparent text-white':
          variant === 'Outlined',
      })}
      {...props}
    />
  )
}

export default Input
