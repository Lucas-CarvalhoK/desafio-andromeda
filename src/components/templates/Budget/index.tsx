import { FaPlane, FaBuilding, FaFile } from 'react-icons/fa'
import { GiCapybara } from 'react-icons/gi'
import { Button, ProgressBar, StorageCount } from '@/components/atoms'
import { useState } from 'react'

const Budget = () => {
  return (
    <section className="flex w-[100vw] items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col justify-center gap-5 p-4 md:flex-row">
        <div className="h-20 w-20 bg-red-600" />
        <div className="h-20 w-20 bg-green-600" />
        <div className="h-20 w-20 bg-blue-600" />
      </div>
    </section>
  )
}

export default Budget
