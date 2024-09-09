import React, { useState } from 'react';

const Plans = ({ user }) => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedOption, setSelectedOption] = useState(null); // Estado para saber cuál opción fue seleccionada

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/plans.json');
      const data = await response.json();
      setPlans(data.list);
    } catch (error) {
      setError('Error al obtener los planes. Por favor, inténtalo de nuevo más tarde.');
    }
    setLoading(false);
  };

  // Maneja la selección del usuario
  const handleSelection = (option) => {
    setSelectedOption(option);
    fetchPlans();
  };

  return (
    <div className="plans-page">
      <button className="back-button">Volver</button>
      <h2>{user.name}, ¿Para quién deseas cotizar?</h2>
      <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
      
      <div className="plan-selection">
        <div className="plan-option" onClick={() => handleSelection('Para mí')}>
          <h3>Para mí</h3>
          <p>Cotiza tu seguro de salud y agrega familiares si así lo deseas.</p>
        </div>
        <div className="plan-option" onClick={() => handleSelection('Para alguien más')}>
          <h3>Para alguien más</h3>
          <p>Realiza una cotización para uno de tus familiares o cualquier persona.</p>
        </div>
      </div>

      {loading && <p>Cargando planes...</p>}
      {error && <p>{error}</p>}

      {/* Mostrar los planes solo si la solicitud se ha realizado y hay planes disponibles */}
      {selectedOption && plans.length > 0 && (
        <div className="plan-cards">
          {plans.map((plan, index) => (
            <div className="plan-card" key={index}>
              {plan.name === "Plan en Casa y Clínica" && <span className="recommended-badge">Plan recomendado</span>}
              <h3>{plan.name}</h3>
              <p>Costo del Plan <strong>${plan.price} al mes</strong></p>
              <ul>
                {plan.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <button className="select-plan-button">Seleccionar Plan</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Plans;
