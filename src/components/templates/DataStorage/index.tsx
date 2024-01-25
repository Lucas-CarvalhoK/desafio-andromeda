import { InputType } from './types'
import { cn } from '@/services/utils/className'
import { FaPlane, FaBuilding, FaFile } from 'react-icons/fa'
import { GiCapybara } from 'react-icons/gi'
import { Button, ProgressBar, StorageCount } from '@/components/atoms'

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
  const totalStorage = 100
  return (
    <div className="flex flex-col gap-5">
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

      <div className="w-full rounded bg-black">
        <div>
          <span className="text-sm text-[#01FF4F]">
            Você utilizou{' '}
            <span className="text-sm font-bold text-[#01FF4F]">77 GB</span> do
            seu armazenamento
          </span>
        </div>
        <div>
          <ProgressBar total={totalStorage} currentValue={77} />
          <div className="flex justify-between">
            <span className="text-xs font-bold text-[#01FF4F]">0 GB</span>
            <span className="text-xs font-bold text-[#01FF4F]">
              {totalStorage} GB
            </span>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <StorageCount
            GbFault={37}
            text="GB restantes"
            className="translate-y-6"
          />
        </div>
      </div>
    </div>
  )
}

export default DataStorage
