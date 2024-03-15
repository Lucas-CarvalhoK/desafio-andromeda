import { ColorBoxType } from './types'
import { cn } from '@/services/utils/className'
import { ChromePicker } from 'react-color'

const ColorBox = ({ background, HexString, ...props }: ColorBoxType) => {
  const copyToClipboard = () => {
    const tempTextArea = document.createElement('textarea')
    tempTextArea.value = HexString
    document.body.appendChild(tempTextArea)
    tempTextArea.select()
    document.execCommand('copy')
    document.body.removeChild(tempTextArea)
  }

  return (
    <div
      className={cn(
        `flex h-20 w-20 flex-col items-center justify-center rounded-sm`,
      )}
      {...props}
      style={{
        backgroundColor: background,
      }}
    >
      <span className="text-base font-semibold">{HexString}</span>
      <button
        onClick={copyToClipboard}
        className="text-sm active:text-[#FFFFFF50]"
      >
        Copiar
      </button>
    </div>
  )
}

export default ColorBox
