import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Tasklist from '../components/lists/TaskList';

const Taskdashboard = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem('user') || null;

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  });

  return <Tasklist user={user} />;
};

export default Taskdashboard;
