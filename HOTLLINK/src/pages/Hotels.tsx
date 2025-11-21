import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Star, Wifi, Car, Utensils, Dumbbell, Heart } from 'lucide-react';
import api from '../api/axios';

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews?: number;
  price: number;
  image: string;
  amenities?: string[];
  description?: string;
}

const Hotels = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [starRating, setStarRating] = useState(0);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await api.get('/hotels');
        // Add default values for missing fields if necessary, as mock data might be simple
        const hotelsWithDefaults = response.data.map((hotel: any) => ({
          ...hotel,
          reviews: hotel.reviews || 0,
          amenities: hotel.amenities || ['wifi'], // Default amenity
          description: hotel.description || 'No description available.'
        }));
        setHotels(hotelsWithDefaults);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching hotels:", err);
        setError("Failed to load hotels. Please try again later.");
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  const amenityIcons: { [key: string]: any } = {
    wifi: Wifi,
    parking: Car,
    restaurant: Utensils,
    gym: Dumbbell,
    spa: Heart
  };

  const filteredHotels = hotels.filter(hotel =>
    (hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
    hotel.price <= priceRange[1] &&
    hotel.rating >= starRating
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading hotels...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Encontre a estadia perfeita
          </h1>
          <p className="text-xl text-gray-600">
            Descubra hotéis incríveis ao redor do mundo com disponibilidade em tempo real e os melhores preços.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Pesquisar hotéis ou destinos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">Filtros:</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Faixa de preço:</span>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-32"
              />
              <span className="text-sm text-gray-600">MZN{priceRange[1]}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Classificação mínima:</span>
              <select
                value={starRating}
                onChange={(e) => setStarRating(parseInt(e.target.value))}
                className="px-3 py-1 border border-gray-200 rounded-md text-sm"
              >
                <option value="0">Qualquer</option>
                <option value="3">3+ Estrelas</option>
                <option value="4">4+ Estrelas</option>
                <option value="5">5 Estrelas</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(Math.floor(hotel.rating))].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{hotel.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {hotel.description}
                </p>

                <div className="flex items-center space-x-2 mb-4">
                  {hotel.amenities && hotel.amenities.map((amenity, index) => {
                    const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
                    return Icon ? (
                      <div key={index} className="p-2 bg-gray-100 rounded-lg">
                        <Icon className="w-4 h-4 text-gray-600" />
                      </div>
                    ) : null;
                  })}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">MZN{hotel.price}</span>
                    <span className="text-gray-600 text-sm">/noite</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{hotel.rating}</span>
                      <span className="text-xs text-gray-500">({hotel.reviews} avaliações)</span>
                    </div>
                    <Link to={`/hotels/${hotel.id}`} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold inline-block">
                      Ver Detalhes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
            Carregar mais hotéis
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hotels;