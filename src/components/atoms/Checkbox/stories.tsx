import { Meta, Story } from '@storybook/react'
import { InputType } from './types'
import Checkbox from '.'

const meta: Meta<InputType> = {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
}

export default meta

type StoryProps = InputType & { options: string[] }

const opcoesDoFormulario1 = ['Opção 1', 'Opção 2', 'Opção 3']

export const Standart: Story<StoryProps> = ({ options }) => (
  <div className="h-fit w-full">
    {/* Passando as opções diretamente como propriedade */}
    <Checkbox
      id="Main"
      label="Seção principal"
      text="kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
    />
  </div>
)
