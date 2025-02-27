import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ConsultantList from './pages/ConsultantList';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
// import { Calendar, Users } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consultants" element={<ConsultantList />} />
            <Route path="/booking/:consultantId" element={<Booking />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;