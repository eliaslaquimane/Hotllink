import React, { useState } from 'react';
import { Calendar, MapPin, Users, Settings, Star, Fuel, Gauge } from 'lucide-react';

const CarRental = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');

  const carCategories = [
    { id: 'economy', name: 'Econômico', icon: '🚗', description: 'Eficiente no consumo, econômico' },
    { id: 'compact', name: 'Compacto', icon: '🚙', description: 'Pequeno e fácil de estacionar' },
    { id: 'midsize', name: 'Médio', icon: '🚘', description: 'Confortável para famílias' },
    { id: 'luxury', name: 'Luxo', icon: '🏎️', description: 'Conforto e estilo premium' },
    { id: 'suv', name: 'SUV', icon: '🚜', description: 'Espaçoso com armazenamento extra' },
    { id: 'van', name: 'Van', icon: '🚐', description: 'Perfeito para grupos grandes' }
  ];

  const vehicles = [
    {
      id: 1,
      name: 'Toyota Corolla',
      category: 'economy',
      rating: 4.7,
      reviews: 1234,
      price: 35,
      company: 'EconomyCars',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Manual', '5 Lugares', 'AC', '30 MPG'],
      transmission: 'Manual',
      seats: 5,
      luggage: 2,
      fuel: 'Gasolina',
      mileage: 'Ilimitado'
    },
    {
      id: 2,
      name: 'BMW 3 Series',
      category: 'luxury',
      rating: 4.9,
      reviews: 867,
      price: 89,
      company: 'LuxuryDrive',
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Automático', '5 Lugares', 'AC Premium', '25 MPG'],
      transmission: 'Automático',
      seats: 5,
      luggage: 3,
      fuel: 'Gasolina',
      mileage: 'Ilimitado'
    },
    {
      id: 3,
      name: 'Honda CR-V',
      category: 'suv',
      rating: 4.6,
      reviews: 2156,
      price: 65,
      company: 'FamilyRentals',
      image: 'https://images.pexels.com/photos/38637/car-audi-auto-automotive-38637.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Automático', '7 Lugares', 'AC', '28 MPG'],
      transmission: 'Automático',
      seats: 7,
      luggage: 4,
      fuel: 'Híbrido',
      mileage: 'Ilimitado'
    },
    {
      id: 4,
      name: 'Ford Transit',
      category: 'van',
      rating: 4.4,
      reviews: 543,
      price: 95,
      company: 'GroupTravel',
      image: 'https://images.pexels.com/photos/1408994/pexels-photo-1408994.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Manual', '9 Lugares', 'AC', '22 MPG'],
      transmission: 'Manual',
      seats: 9,
      luggage: 6,
      fuel: 'Diesel',
      mileage: '300km/dia'
    },
    {
      id: 5,
      name: 'Volkswagen Golf',
      category: 'compact',
      rating: 4.5,
      reviews: 1789,
      price: 42,
      company: 'CityDrive',
      image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Automático', '5 Lugares', 'AC', '32 MPG'],
      transmission: 'Automático',
      seats: 5,
      luggage: 2,
      fuel: 'Gasolina',
      mileage: 'Ilimitado'
    },
    {
      id: 6,
      name: 'Nissan Altima',
      category: 'midsize',
      rating: 4.6,
      reviews: 967,
      price: 55,
      company: 'ComfortRide',
      image: 'https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Automático', '5 Lugares', 'AC Premium', '29 MPG'],
      transmission: 'Automático',
      seats: 5,
      luggage: 3,
      fuel: 'Gasolina',
      mileage: 'Ilimitado'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredVehicles = selectedCategory === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serviços de Aluguer de Carros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare e reserve o veículo perfeito para a sua viagem com empresas de aluguer de confiança em todo o mundo.
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Local de levantamento"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Local de devolução"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="date"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <button className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold">
            Procurar Carros Disponíveis
          </button>
        </div>

        {/* Vehicle Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Escolha o Tipo de Veículo</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`p-4 rounded-xl text-center transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              <div className="text-2xl mb-2">🚗</div>
              <div className="font-semibold text-sm">Todos</div>
            </button>
            {carCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl text-center transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="font-semibold text-sm">{category.name}</div>
                <div className="text-xs opacity-75 mt-1">{category.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                
                <div className="md:w-1/2 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                      <p className="text-gray-600 text-sm">{vehicle.company}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{vehicle.rating}</span>
                      <span className="text-xs text-gray-500">({vehicle.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Settings className="w-4 h-4 text-gray-400" />
                      <span>{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span>{vehicle.seats} Lugares</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Fuel className="w-4 h-4 text-gray-400" />
                      <span>{vehicle.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Gauge className="w-4 h-4 text-gray-400" />
                      <span>{vehicle.mileage}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.features.map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">MZN{vehicle.price}</span>
                      <span className="text-gray-600 text-sm">/dia</span>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold">
                      Reservar Agora
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Insurance Options */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Planos de Seguro & Proteção</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Cobertura Básica</h4>
              <div className="text-2xl font-bold text-blue-600 mb-2">MZN12/dia</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Isenção de Danos por Colisão</li>
                <li>✓ Proteção contra Roubo</li>
                <li>✓ Responsabilidade Civil</li>
              </ul>
            </div>
            
            <div className="border-2 border-blue-500 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Mais Popular
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Cobertura Premium</h4>
              <div className="text-2xl font-bold text-blue-600 mb-2">MZN24/dia</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Todas as Coberturas Básicas</li>
                <li>✓ Seguro de Acidentes Pessoais</li>
                <li>✓ Cobertura de Efeitos Pessoais</li>
                <li>✓ Assistência na Estrada</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Proteção Total</h4>
              <div className="text-2xl font-bold text-blue-600 mb-2">MZN35/dia</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Todas as Coberturas Premium</li>
                <li>✓ Franquia Zero</li>
                <li>✓ Interrupção de Viagem</li>
                <li>✓ Assistência Premium na Estrada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRental;