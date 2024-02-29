import { FaPlane, FaBuilding, FaFile } from 'react-icons/fa'
import { GiCapybara } from 'react-icons/gi'
import { Checkbox } from '@/components/atoms'
import { useState } from 'react'

const Budget = () => {
  return (
    <section className="flex w-[100vw] items-center justify-center">
      <div className="flex flex-col justify-center">
        <div className="flex gap-x-7">
          <div className="h-20 w-20 bg-red-600" />
          <div className="h-20 w-20 bg-green-600" />
          <div className="h-20 w-20 bg-blue-600" />
        </div>
        <div className="flex w-full max-w-7xl flex-col justify-center gap-5 p-4 md:flex-row">
          <form>
            <fieldset id="sections">
              <div>
                <Checkbox
                  type="checkbox"
                  id="Main"
                  value={50}
                  name="sections"
                  multiple
                  label="Seção principal"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra elementum iaculis. Quisque tempor viverra varius. Duis et aliquet ligula. "
                />
                <input
                  type="checkbox"
                  id="Main"
                  value={50}
                  name="sections"
                  multiple
                />
                <label htmlFor="Main">Seção principal</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="About"
                  value={50}
                  name="sections"
                  multiple
                />
                <label htmlFor="About">Sobre</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="Team"
                  value={50}
                  name="sections"
                  multiple
                />
                <label htmlFor="Team">Time</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="Product"
                  value={50}
                  name="sections"
                  multiple
                />
                <label htmlFor="Product">Produto</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="Localization"
                  value={50}
                  name="sections"
                  multiple
                />
                <label htmlFor="Localization">Localização</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="Footer"
                  value={50}
                  name="sections"
                  multiple
                />
                <label htmlFor="Footer">Rodapé</label>
              </div>
            </fieldset>

            <div className="h-1 w-full bg-black" />

            <fieldset id="domain">
              <div>
                <input type="radio" id="Footer" value={50} name="domain" />
                <label htmlFor="Footer">Sim</label>
              </div>
              <div>
                <input type="radio" id="Footer" value={50} name="domain" />
                <label htmlFor="Footer">Não</label>
              </div>
            </fieldset>

            <div className="h-1 w-full bg-black" />

            <fieldset id="hosting">
              <div>
                <input type="radio" id="Footer" value={50} name="hosting" />
                <label htmlFor="Footer">Sim</label>
              </div>
              <div>
                <input type="radio" id="Footer" value={50} name="hosting" />
                <label htmlFor="Footer">Não</label>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Budget
