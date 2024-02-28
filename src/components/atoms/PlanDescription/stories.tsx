import React from 'react'
import PlanDescription from '.'

import { Meta, StoryObj } from '@storybook/react'
import { PlanDescriptionType } from './types'

const meta: Meta = {
  title: 'Components/Atoms/PlanDescription',
  component: PlanDescription,
  argTypes: {
    total: {
      control: { type: 'number' },
    },
    currentValue: {
      control: { type: 'range', min: 0, max: 110, step: 1 },
    },
  },
}

export default meta

type Story = StoryObj<typeof PlanDescription>

export const Primary: Story = (
  args: React.JSX.IntrinsicAttributes & PlanDescriptionType,
) => <PlanDescription {...args} />

Primary.args = {
  total: 100,
  currentValue: 60,
}
