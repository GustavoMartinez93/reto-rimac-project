import React, { useState } from 'react';
import Plans from './Plans';
import Summary from './Summary';

const Tabs = ({ user }) => {
    const [activeTab, setActiveTab] = useState('plans'); 
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  
    const handlePlanSelect = (plan) => {
      setSelectedPlan(plan);
    };
  
    return (
      <div className="tabs-container">
        <div className="tabs-navbar">
          <button onClick={() => handleTabChange('plans')} className={activeTab === 'plans' ? 'active' : ''}>
            Planes y Coberturas
          </button>
          <button onClick={() => handleTabChange('summary')} className={activeTab === 'summary' ? 'active' : ''}>
            Resumen
          </button>
        </div>
        <div className="tabs-content">
          {activeTab === 'plans' && <Plans user={user} onPlanSelect={handlePlanSelect} />}
          {activeTab === 'summary' && <Summary user={{ ...user, plan: selectedPlan }} />}
        </div>
      </div>
    );
  };
  

export default Tabs;
