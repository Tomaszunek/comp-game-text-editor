import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { AnswerText, AnswerTextProps } from './AnwerText'

export default {
  title: 'Atoms/AnswerText',
  component: AnswerText,
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<AnswerTextProps> = (args) => <AnswerText {...args} />

// Reuse that template for creating different stories
export const Simple = Template.bind({})
Simple.args = { answer: 'answer' }
