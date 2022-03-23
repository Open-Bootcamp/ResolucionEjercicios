import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Taskdashboard from '../pages/TaskDashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';

// import Settings from './settings/Settings';

/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/dashboard" element={<Taskdashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
