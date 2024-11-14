// src/components/SymptomInput.js
import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const AnalisisDatos = () => {
  const handleSymptomSubmit = () => {
    alert("Síntomas enviados para análisis.");
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>Ingrese sus Síntomas</Typography>
      <TextField 
        label="Describa sus síntomas" 
        multiline 
        rows={4} 
        variant="outlined" 
        fullWidth 
        margin="normal"
      />
      <Button 
        variant="contained" 
        color="primary" 
        fullWidth 
        onClick={handleSymptomSubmit}
      >
        Enviar
      </Button>
    </Box>
  );
};

export default AnalisisDatos;
