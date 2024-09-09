import React, { useState } from 'react';
import Tabs from './Tabs';

const Form = () => {
  const [tipoDocumento, setTipoDocumento] = useState('DNI');
  const [documento, setDocumento] = useState('');
  const [celular, setCelular] = useState('');
  const [error, setError] = useState('');
  const [aceptoPolitica, setAceptoPolitica] = useState(false);
  const [aceptoComunicaciones, setAceptoComunicaciones] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!documento || !celular || !aceptoPolitica || !aceptoComunicaciones) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    try {
      const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/user.json');
      const data = await response.json();
      setUserData(data);
      setError('');
    } catch (error) {
      setError('Error al obtener los datos. Intenta de nuevo más tarde.');
    }
  };

  if (userData) {
    return <Tabs user={userData} />;
  }

  return (
    <div className="form-container">
      <h2>Creado para ti y tu familia</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tipo de Documento</label>
          <select value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)}>
            <option value="DNI">DNI</option>
            <option value="Pasaporte">Pasaporte</option>
            <option value="Carné de extranjería">Carné de extranjería</option>
          </select>
        </div>
        <div>
          <label>Número de Documento</label>
          <input
            type="text"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Celular</label>
          <input
            type="text"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={aceptoPolitica}
            onChange={(e) => setAceptoPolitica(e.target.checked)}
            required
          />
          <label>Acepto lo Política de Privacidad</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={aceptoComunicaciones}
            onChange={(e) => setAceptoComunicaciones(e.target.checked)}
            required
          />
          <label>Acepto la Política Comunicaciones Comerciales</label>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Cotiza aquí</button>
      </form>
    </div>
  );
};

export default Form;