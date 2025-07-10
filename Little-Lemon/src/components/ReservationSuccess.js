// ReservationSuccess.js
import React from 'react';
import { useNavigate } from 'react-router';
import './ReservationSuccess.css'; 

function ReservationSuccess() {
  const navigate = useNavigate();

  const reservationData = JSON.parse(localStorage.getItem('finalReservationData'));
  const fullName = reservationData ? `${reservationData.firstName} ${reservationData.surname}` : 'Guest';

  return (
    <section className="reservation-form">
      <h2>{fullName}, your table has been reserved!</h2>
      <p className="confirmation-text">Check your email for the confirmation... 😊</p>
    </section>
  );
}

export default ReservationSuccess;