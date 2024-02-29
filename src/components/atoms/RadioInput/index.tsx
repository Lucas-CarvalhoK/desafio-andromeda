import { InputType } from './types'
import { cn } from '@/services/utils/className'

const RadioInput = ({ options, name, onChange, ...props }: InputType) => {
  return (
    <div className="flex gap-x-4">
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`${name}_${index}`}
            name={name}
            value={option}
            onChange={onChange}
            {...props}
            className={cn('group-focus-within:placeholder:bottom-6')}
          />
          <label htmlFor={`${name}_${index}`}>{option}</label>
        </div>
      ))}
    </div>
  )
}

export default RadioInput
