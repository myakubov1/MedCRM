import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TestPage from './pages/TestPage';
import LogIn from './pages/LogIn';
import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Layout><Dashboard /></Layout>} />
      <Route path="login" element={<LogIn />} />
      <Route path="dashboard" element={<Layout><Dashboard /></Layout>} />
      <Route path="testpage" element={<Layout><TestPage /></Layout>} />
    </Routes>
  );
}

export default App;
