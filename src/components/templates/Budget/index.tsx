'use client'

import { PDFDownloadLink } from '@react-pdf/renderer'
import { Checkbox } from '@/components/atoms'
import { useEffect, useState } from 'react'
import { checkboxesData } from '@/components/models/Form'
import RenderPdf from '@/components/atoms/RenderPdf'

const Budget = () => {
  const [selectedItems, setSelectedItems] = useState<
    { id: string; value: number }[]
  >([])

  const [totalValue, setTotalValue] = useState(0)

  const sendAlert = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    alert(
      `Itens selecionados: ${selectedItems.map((item) => item.id).join(', ')}`,
    )
  }

  const handleCheckboxChange = (id: string, value: number) => {
    const selectedItemIndex = selectedItems.findIndex((item) => item.id === id)

    if (selectedItemIndex !== -1) {
      const newSelectedItems = [...selectedItems]
      newSelectedItems.splice(selectedItemIndex, 1)
      setSelectedItems(newSelectedItems)
    } else {
      setSelectedItems([...selectedItems, { id, value }])
    }
  }

  const handleRadioChange = (name: string, value: string) => {
    const selectedRadioIndex = selectedItems.findIndex(
      (item) => item.id === name,
    )

    if (selectedRadioIndex !== -1) {
      const newSelectedItems = [...selectedItems]
      newSelectedItems.splice(selectedRadioIndex, 1)
      setSelectedItems(newSelectedItems)
    }

    if (value === 'Sim') {
      setSelectedItems([...selectedItems, { id: name, value: 50 }])
    }
  }

  useEffect(() => {
    const newTotalValue = selectedItems.reduce(
      (acc, item) => acc + item.value,
      0,
    )
    setTotalValue(newTotalValue)
  }, [selectedItems])

  return (
    <section className="w-[100vw] bg-[#232434]">
      <form
        className="flex h-full w-full items-center justify-center"
        onSubmit={sendAlert}
      >
        <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-5 p-4 lg:flex-row">
          <div className="flex justify-center rounded-xl border-2 border-purple-600 bg-[#1B1C2C] p-6 lg:w-1/2">
            <div className="flex flex-col">
              <fieldset id="sections">
                <div className="mb-6 w-full">
                  <h2 className="text-center text-3xl font-semibold">Seções</h2>
                  <h4 className="text-center text-lg">
                    Selecione as seções de deseja em sua landing page
                  </h4>
                </div>
                <div className="grid grid-flow-col grid-rows-4 gap-4">
                  {checkboxesData.map(
                    ({ IdGroup, Price, Group, Title, Text }, index) => (
                      <Checkbox
                        key={index}
                        id={IdGroup}
                        value={Price}
                        name={Group}
                        label={Title}
                        onChange={() => handleCheckboxChange(IdGroup, Price)}
                      >
                        {Text}
                      </Checkbox>
                    ),
                  )}
                </div>
              </fieldset>

              <div className="my-7 h-1 w-full bg-purple-600" />
              <h2 className="mb-6 text-center text-3xl font-semibold">
                Domínio
              </h2>

              <fieldset id="domain">
                <div className="flex flex-col justify-between gap-y-6">
                  <p className="text-center">
                    O domínio de um site é o endereço exclusivo que as pessoas
                    digitam em seus navegadores para acessar um site específico
                    na internet. Ele consiste em duas partes principais: o nome
                    de domínio (como "meusite") e a extensão de domínio (como
                    ".com"). Escolher um domínio único e memorável é crucial
                    para estabelecer uma identidade online eficaz. Além disso, o
                    domínio pode influenciar a visibilidade nos motores de
                    busca. Considerar a relevância e facilidade de memorização
                    ao escolher um domínio é importante para garantir uma
                    presença online distintiva.
                  </p>
                  <div className="flex justify-around">
                    <div>
                      <input
                        type="radio"
                        id="Footer"
                        value={50}
                        name="domain"
                        onChange={() => handleRadioChange('Dominio', 'Sim')}
                      />
                      <label htmlFor="Footer">Sim</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Footer"
                        value={50}
                        name="domain"
                        onChange={() => handleRadioChange('Dominio', 'Não')}
                      />
                      <label htmlFor="Footer">Não</label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <div className="my-7 h-1 w-full bg-purple-600" />
              <h2 className="mb-6 text-center text-3xl font-semibold">
                Hospedagem
              </h2>

              <fieldset id="hosting">
                <div className="flex flex-col justify-between gap-y-6">
                  <p className="text-center">
                    Um serviço de hospedagem de site é uma solução que oferece
                    espaço em servidores conectados à internet para armazenar e
                    disponibilizar os arquivos de um site. Esses serviços
                    garantem a acessibilidade do site online e podem incluir
                    recursos como registros de domínio, contas de e-mail e
                    suporte técnico. Escolher um provedor confiável é essencial
                    para garantir a estabilidade e o desempenho do site. Em
                    resumo, a hospedagem de site é fundamental para tornar um
                    site acessível na web, proporcionando os recursos
                    necessários para seu funcionamento contínuo.
                  </p>
                  <div className="flex justify-around">
                    <div>
                      <input
                        type="radio"
                        id="Footer"
                        value={50}
                        name="hosting"
                        onChange={() => handleRadioChange('Hospedagem', 'Sim')}
                        className="default:ring-2 checked:bg-red-700"
                      />
                      <label htmlFor="Footer">Sim</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Footer"
                        value={50}
                        name="hosting"
                        onChange={() => handleRadioChange('Hospedagem', 'Não')}
                      />
                      <label htmlFor="Footer">Não</label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="flex h-full w-1/2 flex-col items-center rounded-xl border-2 border-purple-600 bg-[#1B1C2C]">
            <h2>Itens Selecionados:</h2>
            <ul>
              {selectedItems.map((item) => (
                <li key={item.id}>{item.id}</li>
              ))}
            </ul>
            <h2>Total: R$ {totalValue.toFixed(2)}</h2>
            <div className="flex flex-col gap-y-3 px-12">
              <PDFDownloadLink
                document={<RenderPdf data={selectedItems} />}
                fileName="Orçamento Andrômeda.pdf"
              >
                <button
                  type="button"
                  className="rounded-xl bg-red-600 p-3 font-semibold"
                >
                  Imprimir orçamento
                </button>
              </PDFDownloadLink>

              <button
                type="submit"
                className="rounded-xl bg-red-600 p-3 font-semibold"
              >
                enviar
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Budget
