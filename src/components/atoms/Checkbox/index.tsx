import { InputType } from './types'
import { cn } from '@/services/utils/className'
import { useState } from 'react'
import { IoAddCircle, IoRemoveCircleSharp } from 'react-icons/io5'

const Checkbox = ({ text, label, ...props }: InputType) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div
      className={cn(
        `flex w-64 flex-col rounded-xl duration-200 ${
          isExpanded ? 'h-28' : ''
        }`,
      )}
    >
      <div className="flex justify-around rounded-xl bg-blue-500 py-2">
        <div className="flex gap-x-3">
          <input type="checkbox" {...props} />
          <label htmlFor={props.id} className="text-black">
            {label}
          </label>
        </div>
        <button onClick={handleButtonClick}>
          {isExpanded ? (
            <IoRemoveCircleSharp size={25} />
          ) : (
            <IoAddCircle size={25} />
          )}
        </button>
      </div>
      <div
        className={cn(
          `flex break-all text-base text-red-600 ${
            isExpanded ? 'visible opacity-100' : 'collapse opacity-0'
          }`,
        )}
      >
        {text}
      </div>
    </div>
  )
}

export default Checkbox
