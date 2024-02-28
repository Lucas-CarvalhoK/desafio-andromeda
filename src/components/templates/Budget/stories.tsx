import Budget from '.'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Components/templates/Budget',
  component: Budget,
}

export default meta
type Story = StoryObj

export const Primary: Story = {
  render: () => (
    <div className="h-[100vh] w-full bg-[url('public/images/baground.jpg')] bg-cover">
      <Budget />,
    </div>
  ),
}
