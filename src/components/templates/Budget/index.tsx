import { FaPlane, FaBuilding, FaFile } from 'react-icons/fa'
import { GiCapybara } from 'react-icons/gi'
import { Checkbox } from '@/components/atoms'
import { useEffect, useState } from 'react'
import { checkboxesData } from '@/components/models/Form'

const Budget = () => {
  const [selectedItems, setSelectedItems] = useState([])
  const [totalValue, setTotalValue] = useState(0)

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
    // Handling radio button change (similar logic as checkboxes)
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
    <section className="w-[100vw] bg-slate-700">
      <form className="flex h-full w-full items-center justify-center">
        <div className="flex w-full max-w-7xl flex-row gap-5 p-4">
          <div className="w-1/2">
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
                    onChange={() => handleRadioChange('domain', 'Sim')}
                  />
                  <label htmlFor="Footer">Sim</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="Footer"
                    value={50}
                    name="domain"
                    onChange={() => handleRadioChange('domain', 'Não')}
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
                    onChange={() => handleRadioChange('radio', 'Sim')}
                  />
                  <label htmlFor="Footer">Sim</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="Footer"
                    value={50}
                    name="hosting"
                    onChange={() => handleRadioChange('radio', 'Não')}
                  />
                  <label htmlFor="Footer">Não</label>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="w-1/2 bg-red-400">
            <h2>Itens Selecionados:</h2>
            <ul>
              {selectedItems.map((item) => (
                <li key={item.id}>{item.id}</li>
              ))}
            </ul>
            <h2>Total: R$ {totalValue.toFixed(2)}</h2>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Budget
