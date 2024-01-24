import React, { useEffect, useRef } from 'react'
import { progressBarType } from './types'
import { cn } from '@/services/utils/className'

const ProgressBar = ({ total, currentValue, className }: progressBarType) => {
  const progressBarRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (currentValue > total) {
      alert('O valor atual não pode ser maior que o total')
      return
    }

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
          'h-full bg-orange-700 duration-500 ease-in-out',
          className,
        )}
      />
    </div>
  )
}

export default ProgressBar
