import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import Person from './person.js'

describe('Person component', () => {
  it('should have the right message in the dom', () => {
    const { container, getByText } = render(<Person />);
    expect(getByText('Hi!')).toBeInTheDocument()
  })
})

