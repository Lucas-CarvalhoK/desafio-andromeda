import DataStorage from '.'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Components/templates/DataStorage',
  component: DataStorage,
}

export default meta
type Story = StoryObj

export const Primary: Story = {
  render: () => <DataStorage />,
}
