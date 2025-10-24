import React, { useState } from 'react';
import { Search, Star, MessageCircle, Video, Globe, Clock, DollarSign, Award } from 'lucide-react';

const Translators = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [serviceType, setServiceType] = useState('all');

  const languages = [
    { code: 'all', name: 'Todos os Idiomas', flag: '🌍' },
    { code: 'en-es', name: 'Inglês ↔ Espanhol', flag: '🇪🇸' },
    { code: 'en-fr', name: 'Inglês ↔ Francês', flag: '🇫🇷' },
    { code: 'en-de', name: 'Inglês ↔ Alemão', flag: '🇩🇪' },
    { code: 'en-it', name: 'Inglês ↔ Italiano', flag: '🇮🇹' },
    { code: 'en-pt', name: 'Inglês ↔ Português', flag: '🇵🇹' },
    { code: 'en-ja', name: 'Inglês ↔ Japonês', flag: '🇯🇵' },
    { code: 'en-ko', name: 'Inglês ↔ Coreano', flag: '🇰🇷' },
    { code: 'en-zh', name: 'Inglês ↔ Chinês', flag: '🇨🇳' }
  ];

  const services = [
    { id: 'all', name: 'Todos os Serviços', icon: Globe },
    { id: 'interpretation', name: 'Interpretação ao Vivo', icon: MessageCircle },
    { id: 'video', name: 'Chamadas de Vídeo', icon: Video },
    { id: 'tour', name: 'Guia Turístico', icon: Award }
  ];

  const translators = [
    {
      id: 1,
      name: 'Maria Rodriguez',
      languages: ['Inglês', 'Espanhol', 'Português'],
      specialties: ['Médico', 'Negócios', 'Turismo'],
      rating: 4.9,
      reviews: 247,
      hourlyRate: 45,
      responseTime: '< 5 min',
      experience: '8 anos',
      verified: true,
      available: true,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      services: ['interpretation', 'video', 'tour'],
      description: 'Intérprete profissional com ampla experiência em ambientes médicos e empresariais.',
      certifications: ['Certificada ATA', 'Intérprete Médico'],
      location: 'Madri, Espanha'
    },
    {
      id: 2,
      name: 'Jean-Pierre Dubois',
      languages: ['Francês', 'Inglês', 'Italiano'],
      specialties: ['Jurídico', 'Negócios', 'Cultura'],
      rating: 4.8,
      reviews: 189,
      hourlyRate: 55,
      responseTime: '< 10 min',
      experience: '12 anos',
      verified: true,
      available: true,
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400',
      services: ['interpretation', 'video'],
      description: 'Tradutor jurídico especializado e consultor cultural para delegações empresariais.',
      certifications: ['Membro AIIC', 'Certificado em Tradução Jurídica'],
      location: 'Paris, França'
    },
    {
      id: 3,
      name: 'Hans Mueller',
      languages: ['Alemão', 'Inglês', 'Holandês'],
      specialties: ['Técnico', 'Engenharia', 'Turismo'],
      rating: 4.7,
      reviews: 156,
      hourlyRate: 50,
      responseTime: '< 15 min',
      experience: '6 anos',
      verified: true,
      available: false,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      services: ['interpretation', 'tour'],
      description: 'Tradutor técnico especializado em setores de engenharia e indústria.',
      certifications: ['Certificado BDÜ', 'Tradução Técnica'],
      location: 'Berlim, Alemanha'
    },
    {
      id: 4,
      name: 'Yuki Tanaka',
      languages: ['Japonês', 'Inglês', 'Coreano'],
      specialties: ['Negócios', 'Cultura', 'Tecnologia'],
      rating: 4.9,
      reviews: 298,
      hourlyRate: 60,
      responseTime: '< 5 min',
      experience: '10 anos',
      verified: true,
      available: true,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      services: ['interpretation', 'video', 'tour'],
      description: 'Intérprete de negócios com profundo conhecimento cultural e experiência na indústria de tecnologia.',
      certifications: ['Certificada JACI', 'Intérprete de Negócios'],
      location: 'Tóquio, Japão'
    },
    {
      id: 5,
      name: 'Li Wei',
      languages: ['Chinês', 'Inglês', 'Japonês'],
      specialties: ['Negócios', 'Turismo', 'Educação'],
      rating: 4.6,
      reviews: 134,
      hourlyRate: 40,
      responseTime: '< 20 min',
      experience: '5 anos',
      verified: true,
      available: true,
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400',
      services: ['interpretation', 'tour'],
      description: 'Guia cultural e intérprete especializado nos setores educacional e de turismo.',
      certifications: ['CATTI Nível 2', 'Licença de Guia de Turismo'],
      location: 'Pequim, China'
    },
    {
      id: 6,
      name: 'Isabella Romano',
      languages: ['Italiano', 'Inglês', 'Espanhol'],
      specialties: ['Arte', 'História', 'Turismo'],
      rating: 4.8,
      reviews: 203,
      hourlyRate: 48,
      responseTime: '< 8 min',
      experience: '7 anos',
      verified: true,
      available: true,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      services: ['interpretation', 'video', 'tour'],
      description: 'Historiadora da arte e intérprete cultural especializada em arte renascentista e clássica.',
      certifications: ['Certificada AITI', 'Graduação em História da Arte'],
      location: 'Florença, Itália'
    }
  ];

  const filteredTranslators = translators.filter(translator => {
    const languageMatch = selectedLanguage === 'all' || 
      translator.languages.some(lang => selectedLanguage.includes(lang.toLowerCase()));
    const serviceMatch = serviceType === 'all' || 
      translator.services.includes(serviceType);
    return languageMatch && serviceMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serviços Profissionais de Tradução
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conecte-se com tradutores e intérpretes verificados para uma comunicação sem barreiras em todo o mundo.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nome ou especialidade..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Service Type Buttons */}
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setServiceType(service.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  serviceType === service.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <service.icon className="w-4 h-4" />
                <span>{service.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Translator Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredTranslators.map((translator) => (
            <div key={translator.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img
                    src={translator.image}
                    alt={translator.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  {translator.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${
                    translator.available ? 'bg-green-400' : 'bg-gray-400'
                  }`}></div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{translator.name}</h3>
                      <p className="text-gray-600 text-sm">{translator.location}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{translator.rating}</span>
                      <span className="text-xs text-gray-500">({translator.reviews})</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {translator.languages.map((lang, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {translator.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      <span>MZN{translator.hourlyRate}/hora</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{translator.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-gray-400" />
                      <span>{translator.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-gray-400" />
                      <span>{translator.services.length} serviços</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {translator.specialties.map((specialty, index) => (
                      <span key={index} className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {translator.certifications.map((cert, index) => (
                      <span key={index} className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-full">
                        ✓ {cert}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <button 
                      className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                        translator.available
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!translator.available}
                    >
                      {translator.available ? 'Agendar Agora' : 'Indisponível'}
                    </button>
                    <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                      Mensagem
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rate Calculator */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculadora de Tarifas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Serviço</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Interpretação ao Vivo</option>
                <option>Chamada de Vídeo</option>
                <option>Serviço de Guia Turístico</option>
                <option>Tradução de Documentos</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duração (Horas)</label>
              <input
                type="number"
                min="1"
                defaultValue="2"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Par de Idiomas</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Inglês ↔ Espanhol</option>
                <option>Inglês ↔ Francês</option>
                <option>Inglês ↔ Alemão</option>
                <option>Inglês ↔ Japonês</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Especialidade</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Geral</option>
                <option>Médico</option>
                <option>Jurídico</option>
                <option>Negócios</option>
                <option>Técnico</option>
              </select>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Custo Estimado</h4>
                <p className="text-gray-600">Baseado nas tarifas médias para o serviço selecionado</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">MZN90 - MZN120</div>
                <div className="text-sm text-gray-600">para 2 horas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translators;