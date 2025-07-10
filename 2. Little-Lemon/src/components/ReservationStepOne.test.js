import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import ReservationStepOne from './ReservationStepOne';

describe('ReservationStepOne', () => {
  it('renders form with labels and input fields', () => {
    const { getByText, getByLabelText } = render(
      <BrowserRouter>
        <ReservationStepOne />
      </BrowserRouter>
    );

    expect(getByText('First Name:')).toBeInTheDocument();
    expect(getByText('Surname:')).toBeInTheDocument();
    expect(getByText('Email:')).toBeInTheDocument();
    expect(getByText('Cell Number:')).toBeInTheDocument();
    expect(getByText('Occasion:')).toBeInTheDocument();
    expect(getByText('Number of guests:')).toBeInTheDocument();

    expect(getByLabelText('First Name')).toBeInTheDocument();
    expect(getByLabelText('Surname')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Cell Number')).toBeInTheDocument();
    expect(getByLabelText('Occasion')).toBeInTheDocument();
    expect(getByLabelText('Number of guests')).toBeInTheDocument();
  });

  it('renders error messages when form is invalid', async () => {
    const { getByText, getByLabelText } = render(
      <BrowserRouter>
        <ReservationStepOne />
      </BrowserRouter>
    );

    const firstNameInput = getByLabelText('First Name');
    const surnameInput = getByLabelText('Surname');
    const emailInput = getByLabelText('Email');
    const cellNumberInput = getByLabelText('Cell Number');
    const occasionInput = getByLabelText('Occasion');
    const guestsInput = getByLabelText('Number of guests');

    fireEvent.change(firstNameInput, { target: { value: '' } });
    fireEvent.change(surnameInput, { target: { value: '' } });
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(cellNumberInput, { target: { value: '' } });
    fireEvent.change(occasionInput, { target: { value: '' } });
    fireEvent.change(guestsInput, { target: { value: 0 } });

    const submitButton = getByText('Next');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('First name is required')).toBeInTheDocument();
      expect(getByText('Surname is required')).toBeInTheDocument();
      expect(getByText('Email is required')).toBeInTheDocument();
      expect(getByText('Cell number is required')).toBeInTheDocument();
      expect(getByText('Occasion is required')).toBeInTheDocument();
      expect(getByText('At least 1 guest')).toBeInTheDocument();
    });
  });
});
