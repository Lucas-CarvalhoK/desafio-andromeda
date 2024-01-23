import { InputType } from './types'
import Input from '.'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<InputType> = {
  title: 'Components/Atoms/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    variant: { control: 'radio' },
  },
}

export default meta
type Story = StoryObj<InputType>

export const Standart: Story = (args: InputType) => (
  <div className="h-fit w-full">
    <Input {...args} />
  </div>
)
Standart.args = {
  placeholder: 'Nome',
  variant: 'Standard',
}

export const Outlined: Story = (args: InputType) => (
  <div className="h-fit w-full">
    <Input {...args} />
  </div>
)
Outlined.args = {
  placeholder: 'Nome',
  variant: 'Outlined',
}

export const Filled: Story = (args: InputType) => (
  <div className="h-fit w-full">
    <Input {...args} />
  </div>
)
Filled.args = {
  placeholder: 'Nome',
  variant: 'Filled',
}
