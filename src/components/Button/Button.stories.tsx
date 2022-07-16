import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { Button, ButtonProps } from './Button'

export default {
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  component: Button,
  title: 'Components/Button',
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { label: 'Primary 😃' }

export const Secondary = Template.bind({})
Secondary.args = { ...Primary.args, label: 'Secondary 😇' }
