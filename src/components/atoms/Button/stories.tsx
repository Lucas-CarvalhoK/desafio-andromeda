import { ButtonType } from './types'
import Button from '.'
import { Meta, StoryObj } from '@storybook/react'
import { FaUser } from 'react-icons/fa'

const meta: Meta<ButtonType> = {
  title: 'Components/Atoms/Button',
  component: Button,
}

export default meta
type Story = StoryObj<ButtonType>

export const Default: Story = {
  render: () => (
    <div className="h-fit w-full">
      <Button ButtonIcon={FaUser} />
    </div>
  ),
}
