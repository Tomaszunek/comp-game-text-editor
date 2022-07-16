import { render, screen } from '@testing-library/react'
import React from 'react'

import { Button } from './Button'

test('Header contains correct text', () => {
  render(<Button label="abc" />)
  const text = screen.getByText('abc')
  expect(text).toBeInTheDocument()
})

test('Header contains correct text', () => {
  render(<Button backgroundColor="red" label="abc" />)
  const text = screen.getByText('abc')
  expect(text).toBeInTheDocument()
})
