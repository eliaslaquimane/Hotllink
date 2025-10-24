import React, { useState } from 'react';
import { Calendar, MapPin, Plus, Clock, DollarSign, Users, Download, Share } from 'lucide-react';

const TripPlanner = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [tripDays] = useState(5);
  
  const itinerary = {
    1: [
      { time: '09:00', activity: 'Check-in no Hotel', location: 'Grand Plaza Hotel', cost: 0, type: 'accommodation' },
      { time: '12:00', activity: 'Almoço de Boas-vindas', location: 'Bistrô Local', cost: 45, type: 'dining' },
      { time: '14:30', activity: 'Passeio a Pé pela Cidade', location: 'Centro Histórico', cost: 25, type: 'activity' },
      { time: '18:00', activity: 'Ver o Pôr do Sol', location: 'Mirante da Cidade', cost: 0, type: 'activity' }
    ],
    2: [
      { time: '08:00', activity: 'Café da Manhã', location: 'Restaurante do Hotel', cost: 20, type: 'dining' },
      { time: '10:00', activity: 'Visita ao Museu', location: 'Museu Nacional de Arte', cost: 15, type: 'activity' },
      { time: '13:00', activity: 'Almoço', location: 'Restaurante Tradicional', cost: 35, type: 'dining' },
      { time: '15:30', activity: 'Distrito de Compras', location: 'Rua Principal', cost: 100, type: 'activity' }
    ],
    3: [
      { time: '07:30', activity: 'Café da Manhã Cedo', location: 'Café Central', cost: 18, type: 'dining' },
      { time: '09:00', activity: 'Excursão de um Dia', location: 'Parque Nacional da Montanha', cost: 75, type: 'activity' },
      { time: '12:30', activity: 'Almoço de Piquenique', location: 'Mirante Cênico', cost: 25, type: 'dining' },
      { time: '16:00', activity: 'Trilha', location: 'Caminho da Floresta', cost: 0, type: 'activity' }
    ]
  };

  const totalBudget = Object.values(itinerary).flat().reduce((sum, item) => sum + item.cost, 0);
  
  const activityTypes = {
    accommodation: { color: 'bg-blue-100 text-blue-800', icon: '🏨' },
    dining: { color: 'bg-green-100 text-green-800', icon: '🍽️' },
    activity: { color: 'bg-purple-100 text-purple-800', icon: '🎯' }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Minha Viagem a Paris
              </h1>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>15-20 de Março de 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>2 Viajantes</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4" />
                  <span>MZN{totalBudget} Orçamento</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Share className="w-4 h-4" />
                <span>Compartilhar</span>
              </button>
              <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <Download className="w-4 h-4" />
                <span>Exportar</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Day Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Linha do Tempo</h3>
              <div className="space-y-2">
                {[...Array(tripDays)].map((_, index) => {
                  const day = index + 1;
                  return (
                    <button
                      key={day}
                      onClick={() => setCurrentDay(day)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        currentDay === day
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      <div className="font-semibold">Dia {day}</div>
                      <div className="text-sm opacity-75">
                        {day === 1 && 'Chegada & Exploração'}
                        {day === 2 && 'Cultura & Compras'}
                        {day === 3 && 'Aventura na Natureza'}
                        {day === 4 && 'Dia de Relaxamento'}
                        {day === 5 && 'Partida'}
                      </div>
                    </button>
                  );
                })}
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Estatísticas Rápidas</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Total de Dias:</span>
                    <span className="font-medium">{tripDays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Atividades:</span>
                    <span className="font-medium">{Object.values(itinerary).flat().length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Custo Estimado:</span>
                    <span className="font-medium text-blue-600">MZN{totalBudget}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Itinerary Details */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Itinerário do Dia {currentDay}
                </h2>
                <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200">
                  <Plus className="w-4 h-4" />
                  <span>Adicionar Atividade</span>
                </button>
              </div>

              <div className="space-y-4">
                {(itinerary[currentDay as keyof typeof itinerary] || []).map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-200 group">
                    <div className="flex-shrink-0 w-16 text-center">
                      <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm font-semibold">
                        {item.time}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {item.activity}
                          </h3>
                          <div className="flex items-center text-gray-600 mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${activityTypes[item.type as keyof typeof activityTypes].color}`}>
                              {activityTypes[item.type as keyof typeof activityTypes].icon} {item.type === 'accommodation' ? 'Hospedagem' : item.type === 'dining' ? 'Refeição' : 'Atividade'}
                            </span>
                            {item.cost > 0 && (
                              <span className="text-green-600 font-semibold text-sm">
                                MZN{item.cost}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                            <Clock className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                            ×
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Day Summary */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Resumo do Dia {currentDay}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {(itinerary[currentDay as keyof typeof itinerary] || []).length}
                    </div>
                    <div className="text-sm text-gray-600">Atividades</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      MZN{(itinerary[currentDay as keyof typeof itinerary] || []).reduce((sum, item) => sum + item.cost, 0)}
                    </div>
                    <div className="text-sm text-gray-600">Custo Diário</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {(itinerary[currentDay as keyof typeof itinerary] || []).length > 0 ? 
                        `${(itinerary[currentDay as keyof typeof itinerary] || [])[0].time} - ${(itinerary[currentDay as keyof typeof itinerary] || [])[(itinerary[currentDay as keyof typeof itinerary] || []).length - 1].time}` 
                        : 'N/A'
                      }
                    </div>
                    <div className="text-sm text-gray-600">Período</div>
                  </div>
                </div>
              </div>

              {/* Weather & Tips */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2">Previsão do Tempo</h5>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">☀️</span>
                    <div>
                      <div className="font-medium text-blue-800">22°C / 72°F</div>
                      <div className="text-sm text-blue-600">Ensolarado e Limpo</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-900 mb-2">Dicas Locais</h5>
                  <p className="text-sm text-green-700">
                    Compre ingressos para museus com antecedência para evitar filas. Considere adquirir um passe da cidade para transporte público.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;