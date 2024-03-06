import { InputType } from './types'
import { cn } from '@/services/utils/className'
import { useState } from 'react'
import { IoAddCircle, IoRemoveCircleSharp } from 'react-icons/io5'

const Checkbox = ({ children, label, ...props }: InputType) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div
      className={cn(
        `flex w-fit flex-col rounded-xl duration-200 ${
          isExpanded ? 'h-38' : 'h-[41px]'
        }`,
      )}
    >
      <div
        className={cn(
          `flex justify-between bg-[#E800CF]  px-4 py-2 ${
            isExpanded ? 'rounded-t-xl' : 'rounded-xl'
          }`,
        )}
      >
        <div className="flex gap-x-3">
          <input type="checkbox" {...props} />
          <label
            htmlFor={props.id}
            className="text-lg font-semibold text-white"
          >
            {label}
          </label>
        </div>
        <button type="button" onClick={handleButtonClick}>
          {isExpanded ? (
            <IoRemoveCircleSharp size={25} />
          ) : (
            <IoAddCircle size={25} />
          )}
        </button>
      </div>
      <div
        className={cn(
          `flex break-all bg-[#55154f] p-3 text-base font-light text-white duration-500 ${
            isExpanded ? 'visible opacity-100' : 'collapse opacity-0'
          }`,
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default Checkbox
