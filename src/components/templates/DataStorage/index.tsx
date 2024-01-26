import { cn } from '@/services/utils/className'
import { FaPlane, FaBuilding, FaFile } from 'react-icons/fa'
import { GiCapybara } from 'react-icons/gi'
import { Button, ProgressBar, StorageCount } from '@/components/atoms'
import { useState } from 'react'

const totalStorage = 100000000000

const DataStorage = () => {
  const [usedValue, setUsedValue] = useState(0)

  function bytesToGB(bytes: number) {
    const gigabytes = bytes / (1024 * 1024 * 1024)
    return gigabytes.toFixed(2)
  }

  function DataSpace(usedSpace: number) {
    const spaceFree = usedSpace - totalStorage
    return spaceFree
  }

  function getFileSize() {
    const input = document.getElementById('fileInput') as HTMLInputElement

    if (input) {
      if (input.files && input.files.length > 0) {
        const arquivo = input.files[0]

        const fileSize = arquivo.size
        console.log('Tamanho do Arquivo: ' + fileSize + ' bytes')

        // Adiciona o tamanho do arquivo ao valor usado
        const newUsedValue = usedValue + fileSize
        setUsedValue(newUsedValue)
        console.log('Tamanho do Arquivo: ' + bytesToGB(newUsedValue) + ' GB')

        // Verifica se o espaço usado ultrapassou o limite total
        if (usedValue > totalStorage) {
          console.log('Limite de armazenamento excedido!')
        }

        // Agora você pode chamar a função DataSpace com o valor atualizado de usedValue
        const spaceFree = DataSpace(newUsedValue)
        console.log('Espaço Livre: ' + spaceFree + ' GB')
      } else {
        console.log('Nenhum arquivo selecionado')
      }
    } else {
      console.log('Elemento não encontrado')
    }
  }

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
            <span className="text-sm font-bold text-[#01FF4F]">
              {bytesToGB(usedValue)} GB
            </span>{' '}
            do seu armazenamento
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
            GbFault={DataSpace()}
            text="GB restantes"
            className="translate-y-6"
          />
        </div>
      </div>
    </div>
  )
}

export default DataStorage
