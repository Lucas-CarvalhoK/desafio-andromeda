import { InputType } from './types'
import { forwardRef, Ref, useState } from 'react'

export const Input = forwardRef(
  (
    { error, placeholderIcon: Icon, ...props }: InputType,
    forwardedRef: Ref<HTMLInputElement>,
  ) => {
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => {
      setIsFocused(true)
    }

    const handleBlur = () => {
      setIsFocused(false)
    }

    return (
      <div className="relative">
        {Icon && (
          <span className="absolute left-0 top-[18px] flex items-center pl-3 text-[#33333370]">
            <Icon size={15} />
          </span>
        )}
        <div className="flex flex-col">
          <label
            className={`absolute left-3 top-${
              isFocused || props.value ? '0' : '3'
            } pointer-events-none text-[#33333370] transition-all ${
              isFocused || props.value ? 'text-sm' : 'text-base'
            }`}
          >
            {props.placeholder}
          </label>
          <input
            ref={forwardedRef}
            {...props}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`text h-12 rounded border-2 border-[#33333350] text-black placeholder:text-[#33333370] focus-visible:border-red-50 focus-visible:outline-none focus-visible:outline-1 ${
              error ? 'border-red-50 bg-red-200' : 'bg-[#F6F6F6] '
            } ${Icon ? 'pl-8 pr-2' : 'pl-3 '}`}
          />
          {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
        </div>
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
