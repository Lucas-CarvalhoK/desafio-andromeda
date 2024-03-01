import Budget from '.'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Components/templates/Budget',
  component: Budget,
}

export default meta
type Story = StoryObj

export const Primary: Story = {
  render: () => <Budget />,
}
