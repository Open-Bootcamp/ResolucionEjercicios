import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../components/form/RegisterForm';

const Register = () => {
  const [credentials, setCredentials] = useState(null);
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
    <div>
      <RegisterForm onSubmit={(e) => setCredentials(e)} />
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
