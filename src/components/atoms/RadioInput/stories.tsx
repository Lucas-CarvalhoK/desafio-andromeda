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
    <RadioInput options={options} name="formulario1" />
  </div>
)

Standart.args = {
  options: opcoesDoFormulario1,
}
