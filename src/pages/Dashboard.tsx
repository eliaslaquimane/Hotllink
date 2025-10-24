import React, { useState } from 'react';
import { Calendar, MapPin, DollarSign, User, Settings, Bell, CreditCard, Download } from 'lucide-react';


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const upcomingTrips = [
    {
      id: 1,
      destination: 'Paris, França',
      dates: '15-20 Março, 2024',
      hotel: 'Grand Plaza Hotel',
      status: 'Confirmado',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      destination: 'Tóquio, Japão',
      dates: '10-18 Abril, 2024',
      hotel: 'Sakura Resort',
      status: 'Pendente',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const recentBookings = [
    {
      id: 1,
      type: 'Hotel',
      name: 'Grand Plaza Hotel',
      date: '2024-03-15',
      amount: 299,
      status: 'Confirmado'
    },
    {
      id: 2,
      type: 'Aluguer de Carro',
      name: 'BMW Série 3',
      date: '2024-03-16',
      amount: 89,
      status: 'Confirmado'
    },
    {
      id: 3,
      type: 'Guia Turístico',
      name: 'Maria Rodriguez',
      date: '2024-03-17',
      amount: 45,
      status: 'Pendente'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Resumo', icon: User },
    { id: 'bookings', name: 'Minhas Reservas', icon: Calendar },
    { id: 'trips', name: 'Planos de Viagem', icon: MapPin },
    { id: 'payments', name: 'Pagamentos', icon: CreditCard },
    { id: 'settings', name: 'Configurações', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Bem-vindo de volta, Elias Laquimane!</h1>
                <p className="text-gray-600">Gerencie os seus planos e reservas de viagem</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="w-6 h-6" />
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200">
                Planear Nova Viagem
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">Próximas Viagens</p>
                        <p className="text-2xl font-bold text-gray-900">2</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">Total Gasto</p>
                        <p className="text-2xl font-bold text-gray-900">$2,847</p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">Países Visitados</p>
                        <p className="text-2xl font-bold text-gray-900">12</p>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Upcoming Trips */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Próximas Viagens</h2>
                  <div className="space-y-4">
                    {upcomingTrips.map((trip) => (
                      <div key={trip.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                        <img
                          src={trip.image}
                          alt={trip.destination}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-grow">
                          <h3 className="font-semibold text-gray-900">{trip.destination}</h3>
                          <p className="text-gray-600 text-sm">{trip.dates}</p>
                          <p className="text-gray-500 text-sm">{trip.hotel}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            trip.status === 'Confirmado' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {trip.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Reservas Recentes</h2>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{booking.name}</h3>
                            <p className="text-gray-600 text-sm">{booking.type} • {booking.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">${booking.amount}</p>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            booking.status === 'Confirmado' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {booking.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Minhas Reservas</h2>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                    <Download className="w-4 h-4" />
                    <span>Exportar</span>
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Serviço</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Data</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Valor</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Estado</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentBookings.map((booking) => (
                        <tr key={booking.id} className="border-b border-gray-100">
                          <td className="py-4 px-4">
                            <div>
                              <p className="font-medium text-gray-900">{booking.name}</p>
                              <p className="text-sm text-gray-600">{booking.type}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{booking.date}</td>
                          <td className="py-4 px-4 font-semibold text-gray-900">${booking.amount}</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              booking.status === 'Confirmado' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                              Ver Detalhes
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Configurações da Conta</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Apelido</label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold">
                      Guardar Alterações
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;