import { Meta, Story } from '@storybook/react'
import { InputType } from './types'
import RadioInput from '.'

const meta: Meta<InputType> = {
  title: 'Components/Atoms/RadioInput',
  component: RadioInput,
}

export default meta

type StoryProps = InputType & { options: string[] }

const opcoesDoFormulario1 = ['Opção 1', 'Opção 2', 'Opção 3']

export const Standart: Story<StoryProps> = ({ options }) => (
  <div className="h-fit w-full">
    {/* Passando as opções diretamente como propriedade */}
    <RadioInput options={options} name="formulario1" />
  </div>
)

// Definindo as propriedades padrão para o Story
Standart.args = {
  options: opcoesDoFormulario1,
}
