import '../App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import TestPage from './pages/TestPage';
import Login from './pages/Login';
import Layout from './Layout';
import PrivateRoute from '../middleware/PrivateRoute';
import { useAuth } from '../hooks/useAuth';

function App() {
  const { token } = useAuth();
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="testpage" element={<PrivateRoute><TestPage /></PrivateRoute>} />
      </Route>
    </Routes>
  );
}

export default App;
