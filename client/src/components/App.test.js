import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render app logo name on navbar', () => {
  render(<App/>);

  const el = screen.getByText('Atelier');
  expect(el).toBeInTheDocument();
});