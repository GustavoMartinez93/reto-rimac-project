import React, { useState } from 'react';
import './styles/main.scss';
import Form from './components/Form';
import Tabs from './components/Tabs';

const App = () => {
  const [formCompleted, setFormCompleted] = useState(false);
  const [user, setUser] = useState(null);

  const handleFormSubmit = (formData) => {
    setUser(formData);
    setFormCompleted(true);
  };

  return (
    <div className="App">
      {!formCompleted ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <Tabs user={user} />
      )}
    </div>
  );
};

export default App;
