import { StorageCountType } from './types'
import { cn } from '@/services/utils/className'

const StorageCount = ({ GbFault, text, className }: StorageCountType) => {
  return (
    <div
      className={cn(
        'text-text-100 active:bg-red-25 w-fit rounded-lg border-2 border-[#01FF4F] bg-[#01FF4F] p-2 text-black ',
        className,
      )}
    >
      <span className="flex items-center gap-2 text-base font-normal">
        <span className="text-3xl font-extrabold">{GbFault}</span> {text}
      </span>
    </div>
  )
}

export default StorageCount
