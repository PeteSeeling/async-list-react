import { render, screen } from '@testing-library/react';
import App from './App';

test('Animals', () => {
  render(<App />);
  const linkElement = screen.getByText(/Animals/i);
  expect(linkElement).toBeInTheDocument();
});
