import { ColorBoxType } from './types'
import { cn } from '@/services/utils/className'
import { IoAdd } from 'react-icons/io5'
import { HexColorPicker } from 'react-colorful'
import { useState } from 'react'

const ColorBox = ({ background, HexString, ...props }: ColorBoxType) => {
  const [color, setColor] = useState('#b32aa9')

  const ColorPick = () => {
    return <HexColorPicker onChange={setColor} />
  }

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
        backgroundColor: background || 'transparent',
        border: background ? 'none' : '1px solid #FFFFFF50',
      }}
    >
      {background ? (
        <>
          <span className="text-base font-semibold">{HexString}</span>
          <button
            onClick={copyToClipboard}
            className="text-sm active:text-[#FFFFFF50]"
          >
            Copiar
          </button>
        </>
      ) : (
        // <button onClick={}>
        <IoAdd size={45} />
        // </button>
      )}
    </div>
  )
}

export default ColorBox
