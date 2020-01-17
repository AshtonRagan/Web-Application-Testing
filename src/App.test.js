import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {addPoint, handleStrike} from "./Utils/funct"

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  
});

test('handleStrike', () => {
  let actual;
  let expected;
  actual = handleStrike(1);
  expected = 5;
  expect(actual).toBe(expected);
  expect(actual).not.toBe(13);
})

