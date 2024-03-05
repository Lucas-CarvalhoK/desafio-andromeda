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
          <div className="flex w-1/2 justify-center rounded-xl border-2 border-purple-600 bg-[#1B1C2C]">
            <div className="flex flex-col">
              <fieldset id="sections">
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

              <div className="h-1 w-full bg-black" />

              <fieldset id="domain">
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
              </fieldset>

              <div className="h-1 w-full bg-black" />

              <fieldset id="hosting">
                <div>
                  <input
                    type="radio"
                    id="Footer"
                    value={50}
                    name="hosting"
                    onChange={() => handleRadioChange('Hospedagem', 'Sim')}
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
