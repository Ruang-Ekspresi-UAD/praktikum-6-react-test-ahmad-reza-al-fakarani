import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

describe('Counter Component', () => {
  test('renders initial count as 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
  });

  test('increments the count', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    const counterValue = screen.getByTestId('counter-value');
    
    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('1');
  });

  test('decrements the count', () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId('decrement-button');
    const counterValue = screen.getByTestId('counter-value');
    
    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-1');
  });

  test('resets the count to 0', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');
    const counterValue = screen.getByTestId('counter-value');
    
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('2');
    
    fireEvent.click(resetButton);
    expect(counterValue).toHaveTextContent('0');
  });
});

describe('Greeting Component', () => {
  test('renders a greeting message with the provided name', () => {
    render(<Greeting name="John" />);
    const greetingMessage = screen.getByTestId('greeting');
    expect(greetingMessage).toHaveTextContent('Hello, John');
  });

  test('renders a different greeting message when name changes', () => {
    render(<Greeting name="Jane" />);
    const greetingMessage = screen.getByTestId('greeting');
    expect(greetingMessage).toHaveTextContent('Hello, Jane');
  });
});

describe('AlertButton Component', () => {
  test('shows an alert with the provided message when clicked', () => {
    window.alert = jest.fn(); // Mock the alert function
    render(<AlertButton message="This is an alert!" />);
    
    const alertButton = screen.getByTestId('alert-button');
    fireEvent.click(alertButton);

    expect(window.alert).toHaveBeenCalledWith('This is an alert!');
  });
});
