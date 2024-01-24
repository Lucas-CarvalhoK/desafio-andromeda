import { InputType } from './types'
import { cn } from '@/services/utils/className'
import { FaPlane, FaBuilding, FaFile } from 'react-icons/fa'
import { IoCloudyOutline } from 'react-icons/io5'
import { Button, ProgressBar } from '@/components/atoms'

function getFileSize() {
  const input = document.getElementById('fileInput') as HTMLInputElement

  if (input) {
    if (input.files && input.files.length > 0) {
      const arquivo = input.files[0]

      console.log('Tamanho do Arquivo: ' + arquivo.size + ' bytes')
    } else {
      console.log('Nenhum arquivo selecionado')
    }
  } else {
    console.log('Elemento não encontrado')
  }
}

const DataStorage = () => {
  return (
    <div>
      <div className="w-full rounded rounded-tr-[100px] bg-black">
        <div className="flex flex-col gap-7 py-10">
          <div className="flex gap-5 text-[#01FF4F]">
            <IoCloudyOutline size={35} />
            9/11 Cloud
          </div>
          <div className="flex gap-5 p-2">
            <Button ButtonIcon={FaFile} />
            <Button ButtonIcon={FaFile} />
            <Button ButtonIcon={FaFile} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataStorage
