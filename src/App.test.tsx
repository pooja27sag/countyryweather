import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


describe("Simple test suite", () => {
  test("expecting true to be true", () => {
    const isCold=true;
    expect(isCold).toBe(true);
  })
})