import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../api/axios';
import { Calendar, MapPin, CreditCard } from 'lucide-react';

interface Booking {
  id: number;
  hotelName: string;
  checkIn: string;
  checkOut: string;
  totalPrice: number;
  status: string;
}

const Dashboard = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user) return;
      try {
        const response = await api.get(`/bookings?userId=${user.id}`);
        setBookings(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setLoading(false);
      }
    };
    fetchBookings();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          <div className="border-b border-gray-200 pb-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Dashboard
            </h3>
            <p className="mt-2 max-w-4xl text-sm text-gray-500">
              Welcome back, {user?.name}! Here are your upcoming trips.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-md font-bold text-gray-900 mb-4">My Bookings</h4>
            {loading ? (
              <div>Loading bookings...</div>
            ) : bookings.length === 0 ? (
              <div className="text-gray-500">You have no bookings yet.</div>
            ) : (
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="bg-white border rounded-lg p-4 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <h5 className="text-lg font-bold text-gray-900">{booking.hotelName}</h5>
                      <div className="flex items-center text-gray-600 mt-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{booking.checkIn} - {booking.checkOut}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mt-1">
                        <span className="capitalize px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          {booking.status}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <p className="text-sm text-gray-500">Total Price</p>
                      <p className="text-xl font-bold text-blue-600">${booking.totalPrice}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;