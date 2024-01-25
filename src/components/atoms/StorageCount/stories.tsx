import { StorageCountType } from './types'
import StorageCount from '.'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<StorageCountType> = {
  title: 'Components/Atoms/StorageCount',
  component: StorageCount,
}

export default meta
type Story = StoryObj<StorageCountType>

export const Default: Story = {
  render: () => <StorageCount GbFault={37} text="GB Restantes" />,
}
