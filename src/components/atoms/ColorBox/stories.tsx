import { Meta, Story, StoryObj } from '@storybook/react'
import { ColorBoxType } from './types'
import ColorBox from '.'

const meta: Meta<ColorBoxType> = {
  title: 'Components/Atoms/ColorBox',
  component: ColorBox,
}

export default meta

type Story = StoryObj<ColorBoxType>

export const Standart: Story = (args: ColorBoxType) => (
  <div className="h-fit w-full">
    <ColorBox {...args} />
  </div>
)

Standart.args = {
  background: 'bg-[#232434]',
  HexString: '#232434',
}
