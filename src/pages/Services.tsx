import React, { useState } from 'react';
import { Calendar, Clock, Star, Space as Spa, ShirtIcon, Utensils, ZoomIn as Room } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState('spa');

  const services = {
    spa: {
      title: 'Spa & Bem-Estar',
      icon: Spa,
      description: 'Rejuvenesça corpo e mente com nossos serviços premium de spa',
      options: [
        { name: 'Massagem Profunda', duration: '60 min', price: 89, rating: 4.9 },
        { name: 'Sessão de Aromaterapia', duration: '45 min', price: 75, rating: 4.8 },
        { name: 'Pacote Spa para Casais', duration: '90 min', price: 169, rating: 4.9 },
        { name: 'Terapia com Pedras Quentes', duration: '75 min', price: 99, rating: 4.7 },
        { name: 'Tratamento Facial', duration: '50 min', price: 69, rating: 4.6 },
        { name: 'Relaxamento Corporal Completo', duration: '120 min', price: 149, rating: 4.8 }
      ]
    },
    laundry: {
      title: 'Serviço de Lavandaria',
      icon: ShirtIcon,
      description: 'Limpeza e cuidado profissional para todas as suas roupas',
      options: [
        { name: 'Lavagem Expressa e Dobradura', duration: '2 horas', price: 15, rating: 4.7 },
        { name: 'Lavagem a Seco', duration: '24 horas', price: 25, rating: 4.8 },
        { name: 'Cuidado com Delicados', duration: '48 horas', price: 35, rating: 4.9 },
        { name: 'Limpeza de Calçados', duration: '4 horas', price: 20, rating: 4.6 },
        { name: 'Cuidado com Couro', duration: '72 horas', price: 45, rating: 4.8 },
        { name: 'Vestido de Noiva', duration: '1 semana', price: 89, rating: 4.9 }
      ]
    },
    dining: {
      title: 'Planos de Refeição & Gastronomia',
      icon: Utensils,
      description: 'Planos de refeições personalizados e experiências gastronômicas',
      options: [
        { name: 'Café da Manhã Continental', duration: 'Diário', price: 29, rating: 4.6 },
        { name: 'Pacote Meia Pensão', duration: 'Diário', price: 65, rating: 4.7 },
        { name: 'Pensão Completa Premium', duration: 'Diário', price: 89, rating: 4.8 },
        { name: 'Jantar Especial do Chef', duration: '2 horas', price: 125, rating: 4.9 },
        { name: 'Experiência de Degustação de Vinhos', duration: '90 min', price: 75, rating: 4.8 },
        { name: 'Jantar Privativo', duration: '3 horas', price: 199, rating: 4.9 }
      ]
    },
    room: {
      title: 'Serviço de Quarto',
      icon: Room,
      description: 'Serviço de quarto 24h para sua comodidade',
      options: [
        { name: 'Café da Manhã na Cama', duration: '30 min', price: 35, rating: 4.7 },
        { name: 'Lanches Noturnos', duration: '24h', price: 19, rating: 4.5 },
        { name: 'Serviço de Champanhe', duration: '15 min', price: 89, rating: 4.8 },
        { name: 'Jantar Romântico', duration: '45 min', price: 149, rating: 4.9 },
        { name: 'Almoço Executivo', duration: '30 min', price: 45, rating: 4.6 },
        { name: 'Prato de Frutas Frescas', duration: '20 min', price: 25, rating: 4.7 }
      ]
    }
  };

  const serviceCategories = [
    { key: 'spa', name: 'Spa & Bem-Estar', icon: Spa },
    { key: 'laundry', name: 'Lavandaria', icon: ShirtIcon },
    { key: 'dining', name: 'Gastronomia', icon: Utensils },
    { key: 'room', name: 'Serviço de Quarto', icon: Room }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serviços Suplementares
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Melhore sua estadia com nossos serviços premium projetados para tornar sua experiência inesquecível.
          </p>
        </div>

        {/* Service Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedService(category.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                selectedService === category.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Service Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            {React.createElement(services[selectedService as keyof typeof services].icon, {
              className: "w-8 h-8 text-blue-600"
            })}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {services[selectedService as keyof typeof services].title}
              </h2>
              <p className="text-gray-600">
                {services[selectedService as keyof typeof services].description}
              </p>
            </div>
          </div>

          {/* Service Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services[selectedService as keyof typeof services].options.map((option, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{option.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{option.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{option.duration}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">
                    MZN{option.price}
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold">
                    Reservar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Calendar */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Agende Seu Serviço</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selecione a Data
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Horário Preferido
              </label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Manhã (9:00 - 12:00)</option>
                <option>Tarde (12:00 - 18:00)</option>
                <option>Noite (18:00 - 21:00)</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Solicitações Especiais
            </label>
            <textarea
              rows={4}
              placeholder="Algum requisito ou preferência especial..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Confirmar Reserva</span>
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-all duration-200 font-semibold">
              Salvar para Depois
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;