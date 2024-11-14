// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EmergencyButton from './components/BotonEmergencia';
import SymptomInput from './components/AnalisisDatos';
import Map from './components/Mapa';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('emergency');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'emergency':
        return <EmergencyButton />;
      case 'map':
        return <Map />;
      case 'analysis':
        return <SymptomInput />;
      default:
        return <EmergencyButton />;
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Navbar onSelect={setSelectedComponent} />
          {renderComponent()}
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
