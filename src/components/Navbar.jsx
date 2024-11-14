// src/components/Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Box, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = ({ onSelect }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            <ListItem button onClick={() => onSelect('emergency')}>
              <ListItemText primary="Botón de Emergencia" />
            </ListItem>
            <ListItem button onClick={() => onSelect('map')}>
              <ListItemText primary="Buscar Hospitales Cercanos" />
            </ListItem>
            <ListItem button onClick={() => onSelect('analysis')}>
              <ListItemText primary="Ingresar Síntomas" />
            </ListItem>
          </List>
        </Drawer>
        <Box flexGrow={1} ml={2}>
          <Typography variant="h6">Nombre del Usuario</Typography>
        </Box>
        <Avatar>
          <AccountCircleIcon />
        </Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
