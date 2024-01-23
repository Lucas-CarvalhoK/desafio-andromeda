import { InputType } from './types'
import Teste from '.'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<InputType> = {
  title: 'Components/Atoms/Teste',
  component: Teste,
  argTypes: {
    placeholder: { control: 'text' },
    variant: { control: 'radio' },
  },
}

export default meta
type Story = StoryObj

export const Primary: Story = {
  render: () => <Teste />,
}
