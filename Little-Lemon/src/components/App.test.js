import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders date label', () => {
  render(<BookingForm />);
  const dateLabel = screen.getByLabelText('Choose date:');
  expect(dateLabel).toBeInTheDocument();
});