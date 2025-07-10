// ReservationStepTwo.js
import React from 'react';
import { useNavigate } from 'react-router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ReservationStepOne.css';

const USPhoneRegex = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  surname: Yup.string().required('Surname is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  cellNumber: Yup.string()
    .matches(USPhoneRegex, 'Enter a valid UK phone number')
    .required('Cell number is required'),
  occasion: Yup.string().required('Occasion is required'),
  guests: Yup.number()
    .min(1, 'At least 1 guest')
    .max(10, 'No more than 10 guests')
    .required('Number of guests is required'),
});

function ReservationStepOne() {
  const navigate = useNavigate();

  return (
    <section>
      <h2>Reservation Form 
        <br />
        (Page 1 of 2)</h2>
      <Formik
        initialValues={{
          firstName: '',
          surname: '',
          email: '',
          cellNumber: '',
          
          guests: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          localStorage.setItem('reservationStepOne', JSON.stringify(values));
          navigate('/step-two');
        }}
      >
        <Form className="reservation-form">
          <label>
            First Name:
            <Field name="firstName" className="form-input" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </label>

          <label>
            Surname:
            <Field name="surname" className="form-input" />
            <ErrorMessage name="surname" component="div" className="error" />
          </label>

          <label>
            Email:
            <Field name="email" type="email" className="form-input" />
            <ErrorMessage name="email" component="div" className="error" />
          </label>

          <label>
            Cell Number:
            <Field name="cellNumber" type="tel" className="form-input" />
            <ErrorMessage name="cellNumber" component="div" className="error" />
          </label>

          <label>
            Occasion:
            <Field name="occasion" as="select" className="custom-select">
              <option value="">Select Occasion</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Baby Shower">Baby Shower</option>
              <option value="Birthday">Birthday</option>
              <option value="Engagement">Engagement</option>
              <option value="Graduation">Graduation</option>
              <option value="Normal Dining">Normal Dining</option>
              <option value="Retirement">Retirement</option>
            </Field>
            <ErrorMessage name="occasion" component="div" className="error"/>
          </label>
          
          <label>
            Number of Guests:
            <Field name="guests" type="number" min="1" max="10" className="form-input" />
            <ErrorMessage name="guests" component="div" className="error" />
          </label>
        
          <button type="submit" className="form-button">Next</button>
        </Form>
      </Formik>
    </section>
  );
}

export default ReservationStepOne;