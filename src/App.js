// src/App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

const App = () => {
  const handleLogin = (email, password) => {
    // Aquí puedes manejar el proceso de login
    console.log('Login attempt:', email, password);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
