import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';
import { Calendar, Users, CreditCard } from 'lucide-react';

interface Hotel {
    id: number;
    name: string;
    price: number;
    image: string;
    location: string;
}

const Booking = () => {
    const { id } = useParams<{ id: string }>();
    const [hotel, setHotel] = useState<Hotel | null>(null);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const response = await api.get(`/hotels/${id}`);
                setHotel(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching hotel:", err);
                setLoading(false);
            }
        };
        fetchHotel();
    }, [id]);

    const handleConfirmBooking = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!hotel || !user) return;

        try {
            await api.post('/bookings', {
                hotelId: hotel.id,
                hotelName: hotel.name,
                checkIn,
                checkOut,
                guests,
                totalPrice: hotel.price * guests, // Simplified calculation
                userId: user.id
            });
            alert("Booking Confirmed!");
            navigate('/dashboard');
        } catch (err) {
            console.error("Booking failed:", err);
            alert("Failed to book. Please try again.");
        }
    };

    if (loading) return <div>Loading...</div>;
    if (!hotel) return <div>Hotel not found</div>;

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Complete your booking</h1>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="flex">
                    <img src={hotel.image} alt={hotel.name} className="w-32 h-32 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold">{hotel.name}</h2>
                        <p className="text-gray-600">{hotel.location}</p>
                        <p className="text-blue-600 font-bold mt-2">${hotel.price} / night</p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleConfirmBooking} className="bg-white rounded-lg shadow-md p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <input
                                type="date"
                                required
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                                className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <input
                                type="date"
                                required
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                                className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                    <div className="relative">
                        <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                            type="number"
                            min="1"
                            required
                            value={guests}
                            onChange={(e) => setGuests(parseInt(e.target.value))}
                            className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="border-t pt-4">
                    <h3 className="text-lg font-medium mb-4">Payment Details (Mock)</h3>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200 flex items-center text-gray-500">
                        <CreditCard className="w-5 h-5 mr-2" />
                        <span>No payment required for this demo</span>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                    Confirm Booking
                </button>
            </form>
        </div>
    );
};

export default Booking;
