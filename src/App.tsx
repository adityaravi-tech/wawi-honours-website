import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Community from './pages/Community';
import Settings from './pages/Settings';
import Markets from './pages/Markets';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/community" element={<Community />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/markets" element={<Markets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;