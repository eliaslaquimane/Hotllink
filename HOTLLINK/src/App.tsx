import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Services from './pages/Services';
import TripPlanner from './pages/TripPlanner';
import CityGuide from './pages/CityGuide';
import CarRental from './pages/CarRental';
import Translators from './pages/Translators';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router basename={"/hotllink-test-mvp/"}>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/services" element={<Services />} />
            <Route path="/trip-planner" element={<TripPlanner />} />
            <Route path="/city-guide" element={<CityGuide />} />
            <Route path="/car-rental" element={<CarRental />} />
            <Route path="/translators" element={<Translators />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;