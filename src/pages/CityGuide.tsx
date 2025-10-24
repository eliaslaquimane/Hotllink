import React, { useState } from 'react';
import { Search, MapPin, Star, Clock, Phone, Globe, Filter, Navigation } from 'lucide-react';

const CityGuide = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Todos os Lugares', icon: '🌟' },
    { id: 'restaurants', name: 'Restaurantes', icon: '🍽️' },
    { id: 'attractions', name: 'Atrações', icon: '🎯' },
    { id: 'shopping', name: 'Compras', icon: '🛍️' },
    { id: 'entertainment', name: 'Entretenimento', icon: '🎭' },
    { id: 'services', name: 'Serviços', icon: '🏥' }
  ];

  const places = [
    {
      id: 1,
      name: 'Torre Eiffel',
      category: 'attractions',
      rating: 4.9,
      reviews: 125420,
      distance: '1,2 km',
      address: 'Champ de Mars, Paris',
      phone: '+33 (0)8 92 70 12 39',
      website: 'toureiffel.paris',
      hours: '09:30 - 23:45',
      description: 'Torre de ferro icônica e símbolo de Paris',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '€€€'
    },
    {
      id: 2,
      name: 'Le Comptoir du 7ème',
      category: 'restaurants',
      rating: 4.7,
      reviews: 2341,
      distance: '0,8 km',
      address: '8 Avenue Bosquet, Paris',
      phone: '+33 (0)1 45 51 22 27',
      website: 'lecomptoirdu7.com',
      hours: '12:00 - 14:30, 19:00 - 22:30',
      description: 'Bistrô francês tradicional com toque moderno',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '€€€'
    },
    {
      id: 3,
      name: 'Galeries Lafayette',
      category: 'shopping',
      rating: 4.5,
      reviews: 8923,
      distance: '2,1 km',
      address: '40 Boulevard Haussmann, Paris',
      phone: '+33 (0)1 42 82 34 56',
      website: 'galerieslafayette.com',
      hours: '10:00 - 20:00',
      description: 'Loja de departamentos histórica com marcas de luxo',
      image: 'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '€€€€'
    },
    {
      id: 4,
      name: 'Moulin Rouge',
      category: 'entertainment',
      rating: 4.6,
      reviews: 15632,
      distance: '3,5 km',
      address: '82 Boulevard de Clichy, Paris',
      phone: '+33 (0)1 53 09 82 82',
      website: 'moulinrouge.fr',
      hours: '19:00 - 01:00',
      description: 'Cabaret mundialmente famoso com shows espetaculares',
      image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '€€€€'
    },
    {
      id: 5,
      name: 'Hospital Americano',
      category: 'services',
      rating: 4.3,
      reviews: 892,
      distance: '4,2 km',
      address: '63 Boulevard Victor Hugo, Neuilly',
      phone: '+33 (0)1 46 41 25 25',
      website: 'american-hospital.org',
      hours: '24h',
      description: 'Hospital internacional com equipe que fala inglês',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '€€€'
    },
    {
      id: 6,
      name: 'Museu do Louvre',
      category: 'attractions',
      rating: 4.8,
      reviews: 87543,
      distance: '1,8 km',
      address: 'Rue de Rivoli, Paris',
      phone: '+33 (0)1 40 20 50 50',
      website: 'louvre.fr',
      hours: '09:00 - 18:00',
      description: 'Maior museu de arte do mundo e monumento histórico',
      image: 'https://images.pexels.com/photos/2675268/pexels-photo-2675268.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '€€'
    }
  ];

  const filteredPlaces = places.filter(place => {
    const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         place.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Guia da Cidade de Paris
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra os melhores lugares para visitar, comer, comprar e se divertir na Cidade Luz.
          </p>
        </div>

        {/* Search and Map */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar lugares, restaurantes, atrações..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              <Navigation className="w-5 h-5" />
              <span>Obter Rotas</span>
            </button>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-1">Mapa Interativo da Cidade</h3>
              <p className="text-gray-600">GPS habilitado com localizações em tempo real</p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlaces.map((place) => (
            <div key={place.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {place.distance}
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {place.priceRange}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {place.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{place.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {place.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{place.address}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{place.hours}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{place.phone}</span>
                  </div>
                  <div className="flex items-center text-blue-600 text-sm">
                    <Globe className="w-4 h-4 mr-2" />
                    <span>{place.website}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {place.reviews.toLocaleString()} avaliações
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Rotas
                    </button>
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
                      Salvar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Services */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-red-900 mb-4">Serviços de Emergência</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🚨</span>
              </div>
              <div>
                <div className="font-semibold text-red-900">Emergência</div>
                <div className="text-red-700">112</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🚑</span>
              </div>
              <div>
                <div className="font-semibold text-red-900">Emergência Médica</div>
                <div className="text-red-700">15</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🚔</span>
              </div>
              <div>
                <div className="font-semibold text-red-900">Polícia</div>
                <div className="text-red-700">17</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityGuide;