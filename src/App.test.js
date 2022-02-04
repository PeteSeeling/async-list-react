import { render, screen } from '@testing-library/react';
import App from './App';

test('Fetch Animals', () => {
  render(<App />);
  const linkElement = screen.getByText(/Fetch Animals/i);
  expect(linkElement).toBeInTheDocument();
});
