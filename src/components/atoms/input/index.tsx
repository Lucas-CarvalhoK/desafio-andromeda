import { InputType } from './types'
import { Slot } from '@radix-ui/react-slot'

function getTextInputVariant(variant: InputType['variant']) {
  switch (variant) {
    case 'Filled':
      return TextInputFilled
    case 'Outlined':
      return TextInputFilled
    default:
      return TextInputInput
  }
}

function TextInputRoot(props: InputType) {
  const { variant, children } = props
  const TextInputComponent = getTextInputVariant(variant)

  return (
    <div className="border-palette-primary border-b-solid flex h-14 w-full items-center justify-between gap-3 border-b bg-transparent p-4">
      {TextInputComponent && (
        <TextInputComponent {...props}>{children}</TextInputComponent>
      )}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

function TextInputIcon(props: InputType) {
  return <Slot className="h-6 w-6 text-white">{props.children}</Slot>
}

TextInputIcon.displayName = 'TextInput.Icon'

function TextInputInput({ placeholder, ...props }: InputType) {
  return (
    <div className="group relative flex w-full">
      <label className="group-focus-within:text-palette-primary absolute bottom-0 z-[1] text-sm text-zinc-500 transition-all duration-700 group-focus-within:bottom-6 group-focus-within:block">
        {placeholder}
      </label>
      <input
        className="z-[10] flex-1 items-center bg-transparent text-sm text-white outline-none"
        {...props}
      />
    </div>
  )
}

function TextInputFilled({ placeholder, ...props }: InputType) {
  return (
    <div className="group relative flex w-full">
      <label className="group-focus-within:text-palette-primary absolute bottom-0 z-[1] text-sm text-zinc-500 transition-all duration-700 group-focus-within:bottom-6 group-focus-within:block">
        {placeholder}
      </label>
      <input
        className="z-[10] flex-1 items-center bg-transparent text-sm text-white outline-none"
        {...props}
      />
    </div>
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}
