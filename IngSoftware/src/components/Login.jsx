// src/components/Login.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link, MenuItem } from '@mui/material';

const Login = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleRegisterSubmit = () => {
    alert("Registrado exitosamente. Ahora puedes iniciar sesión.");
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleLoginSubmit = () => {
    onLogin();
  };

  return (
    <Box 
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
      p={3}
    >
      <Typography variant="h3" gutterBottom>APERRO</Typography>

      {!showLogin && !showRegister && (
        <>
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleLoginClick}>
            Iniciar Sesión
          </Button>
          <Button variant="outlined" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleRegisterClick}>
            Registrarse
          </Button>
        </>
      )}

      {showLogin && (
        <>
          <TextField label="Correo" variant="outlined" fullWidth margin="normal" />
          <TextField label="Contraseña" type="password" variant="outlined" fullWidth margin="normal" />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleLoginSubmit}>
            Iniciar Sesión
          </Button>
        </>
      )}

      {showRegister && (
        <>
          <Typography variant="h5" gutterBottom>Registro de Usuario</Typography>
          <TextField label="Nombre" variant="outlined" fullWidth margin="normal" />
          <TextField label="Edad" type="number" variant="outlined" fullWidth margin="normal" />
          <TextField label="Alergias" variant="outlined" fullWidth margin="normal" />
          <TextField label="Tipo de Sangre" select fullWidth margin="normal">
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="A-">A-</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="B-">B-</MenuItem>
            <MenuItem value="AB+">AB+</MenuItem>
            <MenuItem value="AB-">AB-</MenuItem>
            <MenuItem value="O+">O+</MenuItem>
            <MenuItem value="O-">O-</MenuItem>
          </TextField>
          <TextField label="Correo" variant="outlined" fullWidth margin="normal" />
          <TextField label="Contraseña" type="password" variant="outlined" fullWidth margin="normal" />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleRegisterSubmit}>
            Registrarse
          </Button>
        </>
      )}
    </Box>
  );
};

export default Login;
