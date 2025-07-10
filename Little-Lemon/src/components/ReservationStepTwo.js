// ReservationStepTwo.js
import React from 'react';
import { useNavigate } from 'react-router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ReservationStepTwo.css';

const today = new Date();
const maxDate = new Date(today);
maxDate.setMonth(today.getMonth() + 1);

function ReservationStepTwo() {
  const navigate = useNavigate();

  return (
    <section>
      <h2>Reservation Form 
        <br />
         (Page 2 of 2)</h2>
      <Formik
        initialValues={{
          date: today.toISOString().split('T')[0],
          time: '',
        }}
        validationSchema={Yup.object({
          date: Yup.date()
            .transform((value, originalValue) => new Date(originalValue))
            .min(today, 'Date cannot be in the past')
            .max(maxDate, 'Only up to one month ahead')
            .required('Date is required'),
          time: Yup.string().required('Time is required'),
          
        })}
        onSubmit={(values) => {
          const stepOne = JSON.parse(localStorage.getItem('reservationStepOne'));
          const fullData = { ...stepOne, ...values };
          localStorage.setItem('finalReservationData', JSON.stringify(fullData));
          navigate('/success');
        }}
      >
       <Form className="reservation-form">
  <label>
    Date:
    <Field name="date" type="date" className="form-input" />
    <ErrorMessage name="date" component="div" className="error" />
  </label>

  <label>
    Time:
    <Field name="time" as="select" className="custom-select">
      <option value="">Select time</option>
      {[...Array(11)].map((_, i) => {
        const hour = 12 + i;
        const label = `${hour}:00`;
        return (
                <option key={label} value={label}>
                  {label}
                </option>
              );
            })}
          </Field>
          <ErrorMessage name="time" component="div" className="error" />
  </label>

        <button type="submit" className="form-button">Reserve</button>
      </Form>
      </Formik>
    </section>
  );
}

export default ReservationStepTwo;
