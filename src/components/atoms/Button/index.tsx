import { ButtonType } from './types'
import { cn } from '@/services/utils/className'

const Button = ({ className, ButtonIcon: Icon, ...props }: ButtonType) => {
  return (
    <label
      className={cn(
        'text-text-100 active:bg-red-25 cursor-pointer rounded-md border-2 border-[#01FF4F] bg-transparent p-2 text-[#01FF4F] duration-500 ease-in-out hover:bg-[#01FF4F] hover:text-black group-focus-within:placeholder:bottom-6',
        className,
      )}
    >
      <input type="file" className={cn('hidden')} {...props} />
      <Icon size={20} />
    </label>
  )
}

export default Button
