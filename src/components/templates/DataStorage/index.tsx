import { FaPlane, FaBuilding, FaFile } from 'react-icons/fa'
import { GiCapybara } from 'react-icons/gi'
import { Button, ProgressBar, StorageCount } from '@/components/atoms'
import { useState } from 'react'

const totalStorage = 1073741824

const DataStorage = () => {
  const [usedValue, setUsedValue] = useState(0)
  const [progressBarValue, setProgressBarValue] = useState(0)
  const [spaceFree, setSpaceFree] = useState(totalStorage)

  function bytesToGB(bytes: number) {
    const gigabytes = bytes / (1024 * 1024 * 1024)
    return gigabytes.toFixed(2)
  }

  function DataSpace(usedSpace: number) {
    const freeSpace = totalStorage - usedSpace
    setSpaceFree(freeSpace)
    return freeSpace
  }

  function getFileSize() {
    const input = document.getElementById('fileInput') as HTMLInputElement

    if (input) {
      if (input.files && input.files.length > 0) {
        const arquivo = input.files[0]

        const fileSize = arquivo.size
        const newUsedValue = usedValue + fileSize
        setProgressBarValue(newUsedValue)
        setUsedValue(newUsedValue)

        if (usedValue > totalStorage) {
          alert('Limite de armazenamento excedido!')
        }

        const spaceFree = DataSpace(newUsedValue)
        console.log(spaceFree)
      } else {
        console.log('Nenhum arquivo selecionado')
      }
    } else {
      console.log('Elemento não encontrado')
    }
  }

  return (
    <div className="flex flex-col gap-5 p-4 md:flex-row">
      <div className="w-full rounded rounded-tr-[100px] bg-black">
        <div className="flex flex-col gap-4 px-3 py-6">
          <div className="flex gap-5 text-[#01FF4F]">
            <GiCapybara size={45} />
            <span className="text-3xl font-semibold">Fylo</span>
          </div>
          <div className="flex gap-5">
            <Button ButtonIcon={FaFile} id="fileInput" onChange={getFileSize} />
            <Button
              ButtonIcon={FaPlane}
              id="fileInput"
              onChange={getFileSize}
            />
            <Button
              ButtonIcon={FaBuilding}
              id="fileInput"
              onChange={getFileSize}
            />
          </div>
        </div>
      </div>

      <div className="w-full rounded bg-black px-4 pt-3">
        <div className="px-1">
          <span className="text-sm text-[#01FF4F]">
            Você utilizou{' '}
            <span className="text-sm font-bold text-[#01FF4F]">
              {bytesToGB(usedValue)} GB
            </span>{' '}
            do seu armazenamento
          </span>
        </div>
        <div className="px-1">
          <div className="py-3">
            <ProgressBar
              total={totalStorage}
              currentValue={progressBarValue}
              className="rounded-xl"
            />
          </div>
          <div className="flex justify-between px-1">
            <span className="text-xs font-bold text-[#01FF4F]">0 GB</span>
            <span className="text-xs font-bold text-[#01FF4F]">1 GB</span>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <StorageCount
            GbFault={bytesToGB(spaceFree)}
            text="GB restantes"
            className="translate-y-6"
          />
        </div>
      </div>
    </div>
  )
}

export default DataStorage
