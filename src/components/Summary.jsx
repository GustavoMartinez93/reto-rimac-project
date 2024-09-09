import React from 'react';

const Summary = ({ user }) => {
  if (!user) {
    return <p>No hay información del usuario disponible.</p>;
  }

  return (
    <div className="summary-container">
      <h2>Resumen del seguro</h2>
      <div className="user-info">
        <p><strong>Precios calculados para:</strong> {`${user.name} ${user.lastName}`}</p>
        <div className="payment-info">
          <p><strong>Responsable de pago:</strong></p>
          <p>DNI: </p>
          <p>Celular: </p>
        </div>

          <div className="plan-info">
            <p><strong>Plan elegido:</strong></p>
            <p>Plan en casa y clínica</p>
            <p>Costo del Plan: $99 al mes</p>
          </div>

      </div>
    </div>
  );
};

export default Summary;

