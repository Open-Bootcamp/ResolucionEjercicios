import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/form/LoginForm';

const Login = () => {
  const [credentials, setCreadentials] = useState(null);
  const navigate = useNavigate();
  const user = localStorage.getItem('user') || null;

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  });
  useEffect(() => {
    if (credentials) {
      const c = JSON.stringify(credentials);
      localStorage.setItem('user', c);
      navigate('/dashboard');
    }
  });

  return (
    <>
      <LoginForm onSubmit={(e) => setCreadentials(e)} />
      <Link to="/registro">Registrarse</Link>
    </>
  );
};

export default Login;
