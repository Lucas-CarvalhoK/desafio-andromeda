import { InputType } from './types'
import { cn } from '@/services/utils/className'

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

const Teste = () => {
  return <input type="file" id="fileInput" onChange={getFileSize} />
}

export default Teste
