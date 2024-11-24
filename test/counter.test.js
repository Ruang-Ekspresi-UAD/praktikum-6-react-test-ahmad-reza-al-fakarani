import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';

describe('Counter Component', () => {
  test('should render initial count as 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
  });

  test('should increment the count when increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('1');
  });

  test('should decrement the count when decrement button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId('decrement-button');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-1');
  });
});
