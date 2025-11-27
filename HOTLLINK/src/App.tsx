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
import Login from './pages/Login';
import Register from './pages/Register';
import HotelDetails from './pages/HotelDetails';
import Booking from './pages/Booking';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/hotels/:id" element={<HotelDetails />} />

              {/* Protected Routes */}
              <Route path="/hotels" element={<ProtectedRoute><Hotels /></ProtectedRoute>} />
              <Route path="/hotels/:id/book" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
              <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
              <Route path="/trip-planner" element={<ProtectedRoute><TripPlanner /></ProtectedRoute>} />
              <Route path="/city-guide" element={<ProtectedRoute><CityGuide /></ProtectedRoute>} />
              <Route path="/car-rental" element={<ProtectedRoute><CarRental /></ProtectedRoute>} />
              <Route path="/translators" element={<ProtectedRoute><Translators /></ProtectedRoute>} />
              <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;