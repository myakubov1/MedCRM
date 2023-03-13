import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import TestPage from './pages/TestPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="testpage" element={<TestPage />} />
        <Route path="*" element={<p>Theres nothing here: 404!</p>} />
      </Routes>
    </Layout>
  );
}

export default App;
