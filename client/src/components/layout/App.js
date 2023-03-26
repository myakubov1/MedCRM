import '../../App.css';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Dashboard from '../pages/Dashboard';
import TestPage from '../pages/TestPage';
import Login from '../pages/Login';
import Layout from './Layout';
import PrivateRoute from '../../middleware/PrivateRoute';
import Clients from '../pages/Clients';
import { useAuth } from '../../hooks/useAuth';

function App() {
  const { token } = useAuth();
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="testpage" element={<PrivateRoute><TestPage /></PrivateRoute>} />
        <Route path="clients" element={<PrivateRoute><Clients /></PrivateRoute>} />
      </Route>
    </Routes>
  );
}

export default App;
