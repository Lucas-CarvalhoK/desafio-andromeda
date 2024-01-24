import { InputType } from './types'
import DataStorage from '.'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<InputType> = {
  title: 'Components/templates/DataStorage',
  component: DataStorage,
  argTypes: {
    placeholder: { control: 'text' },
    variant: { control: 'radio' },
  },
}

export default meta
type Story = StoryObj

export const Primary: Story = {
  render: () => <DataStorage />,
}
