import DomainChecker from '.'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Components/templates/DomainChecker',
  component: DomainChecker,
}

export default meta
type Story = StoryObj

export const Primary: Story = {
  render: () => <DomainChecker />,
}
