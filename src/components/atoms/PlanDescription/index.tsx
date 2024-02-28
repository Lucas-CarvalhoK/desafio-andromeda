import React, { useEffect, useRef } from 'react'
import { cn } from '@/services/utils/className'
import { progressBarType } from '../progressBar/types'

const ProgressBar = ({ total, currentValue, className }: progressBarType) => {
  const progressBarRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const progressBar = progressBarRef.current

    if (progressBar) {
      const width = (currentValue / total) * 100
      progressBar.style.width = `${width}%`
    }
  }, [currentValue, total])

  return (
    <div className={cn('h-5 w-full bg-[#FFFFFF40]', className)}>
      <div
        ref={progressBarRef}
        className={cn(
          'h-full rounded-xl bg-orange-700 bg-gradient-to-r from-[#01FF4F] via-yellow-400 to-red-600 py-2 duration-500 ease-in-out',
        )}
      />
    </div>
  )
}

export default ProgressBar
