import { ColorBoxType } from './types'
import { cn } from '@/services/utils/className'

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
      className={cn(`flex h-20 w-20 flex-col rounded-sm duration-200`)}
      {...props}
      style={{
        backgroundColor: background,
      }}
    >
      <span className="text-lg font-semibold">{HexString}</span>
      <button onClick={copyToClipboard}>Copiar</button>
    </div>
  )
}

export default ColorBox
