import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { Star, MapPin, Wifi, Car, Utensils, Check } from 'lucide-react';

interface Hotel {
    id: number;
    name: string;
    location: string;
    rating: number;
    reviews: number;
    price: number;
    image: string;
    amenities: string[];
    description: string;
}

const HotelDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [hotel, setHotel] = useState<Hotel | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const response = await api.get(`/hotels/${id}`);
                setHotel(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching hotel:", err);
                setError("Failed to load hotel details.");
                setLoading(false);
            }
        };
        fetchHotel();
    }, [id]);

    const handleBookNow = () => {
        navigate(`/hotels/${id}/book`);
    };

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (error || !hotel) return <div className="text-center py-10 text-red-500">{error || "Hotel not found"}</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-96">
                    <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-bold text-gray-900">{hotel.rating}</span>
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{hotel.name}</h1>
                            <div className="flex items-center text-gray-600">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span>{hotel.location}</span>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0 text-right">
                            <p className="text-sm text-gray-500">Price per night</p>
                            <p className="text-3xl font-bold text-blue-600">${hotel.price}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">About this hotel</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {hotel.description}
                            </p>

                            <h3 className="text-lg font-bold text-gray-900 mb-3">Amenities</h3>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {hotel.amenities.map((amenity, index) => (
                                    <div key={index} className="flex items-center text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 mr-2" />
                                        <span className="capitalize">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl h-fit">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Reserve your stay</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Check-in</span>
                                    <span className="font-medium">Select Date</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Check-out</span>
                                    <span className="font-medium">Select Date</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Guests</span>
                                    <span className="font-medium">2 Adults</span>
                                </div>
                                <hr className="border-gray-200" />
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-gray-900">Total</span>
                                    <span className="font-bold text-xl text-blue-600">${hotel.price}</span>
                                </div>
                                <button
                                    onClick={handleBookNow}
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                                >
                                    Book Now
                                </button>
                                <p className="text-xs text-center text-gray-500">
                                    You won't be charged yet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;
