import { ColorBoxType } from './types'
import { cn } from '@/services/utils/className'
import { IoAdd } from 'react-icons/io5'
import { HexColorPicker } from 'react-colorful'
import { useState, useEffect } from 'react'

const ColorBox = ({ background, HexString, ...props }: ColorBoxType) => {
  const [color, setColor] = useState(background)
  const [colorPickerOpen, setColorPickerOpen] = useState(false)

  useEffect(() => {
    // Update the background prop whenever color state changes
    setColor(background)
  }, [background])

  const toggleColorPicker = () => {
    setColorPickerOpen(!colorPickerOpen)
  }

  const copyToClipboard = () => {
    const tempTextArea = document.createElement('textarea')
    tempTextArea.value = HexString
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
        backgroundColor: background || 'transparent',
        border: background ? 'none' : '1px solid #FFFFFF50',
      }}
      onClick={toggleColorPicker}
    >
      {background ? (
        <>
          <button
            onClick={copyToClipboard}
            className="text-base font-semibold active:bg-red-500 active:text-[#FFFFFF50]"
          >
            {HexString}
          </button>
        </>
      ) : (
        <>
          <IoAdd size={45} />
        </>
      )}
      {colorPickerOpen && (
        <HexColorPicker
          className="h-64"
          color={color}
          onChange={handleColorChange}
        />
      )}
    </div>
  )
}

export default ColorBox
