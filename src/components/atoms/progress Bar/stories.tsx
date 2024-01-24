import React from 'react'
import ProgressBar from '.'

import { Meta, StoryObj } from '@storybook/react'
import { progressBarType } from './types'

const meta: Meta = {
  title: 'Components/Atoms/ProgressBar',
  component: ProgressBar,
  argTypes: {
    total: {
      control: { type: 'number' },
    },
    currentValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
}

export default meta

type Story = StoryObj<typeof ProgressBar>

export const Primary: Story = (
  args: React.JSX.IntrinsicAttributes & progressBarType,
) => <ProgressBar {...args} />

Primary.args = {
  total: 100,
  currentValue: 60,
}
