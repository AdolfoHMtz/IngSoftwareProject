import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Asegúrate de que App esté correctamente importado

ReactDOM.render(
  <Router>  {/* Aquí es donde debe estar el Router */}
    <App />
  </Router>,
  document.getElementById('root')
);
