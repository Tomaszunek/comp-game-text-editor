import { render, screen } from '@testing-library/react'
import React from 'react'

import { Button } from './Button'

describe('button', () => {
  it('header contains correct text', () => {
    expect.hasAssertions()
    render(<Button label="abc" />)
    const text = screen.getByText('abc')
    expect(text).toBeInTheDocument()
  })

  it('header contains correct text with background', () => {
    expect.hasAssertions()
    render(<Button backgroundColor="red" label="abc" />)
    const text = screen.getByText('abc')
    expect(text).toBeInTheDocument()
  })
})
