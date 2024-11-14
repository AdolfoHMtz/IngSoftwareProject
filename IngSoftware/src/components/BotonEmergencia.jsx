// src/components/EmergencyButton.js
import React from 'react';
import { Box, Button } from '@mui/material';

const BotonEmergencia = () => {
  const handleEmergency = () => {
    alert("¡Emergencia activada! Enviando ayuda...");
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <Button 
        variant="contained" 
        color="error" 
        size="large" 
        onClick={handleEmergency}
        sx={{ fontSize: '1.5rem', padding: '1rem 2rem' }}
      >
        Emergencia
      </Button>
    </Box>
  );
};

export default BotonEmergencia;
