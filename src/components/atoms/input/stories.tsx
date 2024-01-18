import { InputType } from './types'
import { Input } from '.'
import { Meta, StoryObj } from '@storybook/react'
import { FaUser } from 'react-icons/fa'

const meta: Meta<InputType> = {
  title: 'Components/Atoms/Input',
  component: Input,
}

export default meta
type Story = StoryObj<InputType>

export const Default: Story = {
  render: () => (
    <div className="h-fit w-full">
      <Input placeholder="Nome" placeholderIcon={FaUser} />
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="h-fit w-full">
      <Input
        placeholder="Senha"
        error="Campo obrigatório"
        placeholderIcon={FaUser}
      />
    </div>
  ),
}
