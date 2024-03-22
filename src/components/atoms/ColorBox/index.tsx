import { ColorBoxType } from './types'
import { cn } from '@/services/utils/className'
import { ContrastTextColor } from '@/services/utils/ColorContrast'
import { IoIosColorFill } from 'react-icons/io'
import { HexColorPicker } from 'react-colorful'
import { useState, useEffect } from 'react'

const ColorBox = ({ background, HexString, ...props }: ColorBoxType) => {
  const [color, setColor] = useState(background || 'transparent')
  const [colorPickerOpen, setColorPickerOpen] = useState(false)

  useEffect(() => {
    setColor(background)
  }, [background])

  const toggleColorPicker = () => {
    setColorPickerOpen(!colorPickerOpen)
  }

  const copyToClipboard = () => {
    const tempTextArea = document.createElement('textarea')
    tempTextArea.value = color
    document.body.appendChild(tempTextArea)
    tempTextArea.select()
    document.execCommand('copy')
    document.body.removeChild(tempTextArea)
  }

  const handleColorChange = (newColor) => {
    setColor(newColor) // Update color state
  }

  return (
    <div
      className={cn(
        `flex h-20 w-20 flex-col items-center justify-center rounded-sm`,
      )}
      {...props}
      style={{
        backgroundColor: color || 'transparent',
        border: color ? 'none' : '1px solid #FFFFFF50',
      }}
      onClick={toggleColorPicker}
    >
      <button
        onClick={copyToClipboard}
        className="text-base font-semibold active:bg-red-500 active:text-[#FFFFFF50]"
      >
        {color || <IoIosColorFill size={30} />}
      </button>

      {colorPickerOpen && (
        <HexColorPicker color={color} onChange={handleColorChange} />
      )}
    </div>
  )
}

export default ColorBox
