import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, Star, ArrowRight, Hotel, Car, Map, UserCheck } from 'lucide-react';

const Home = () => {

  const features = [
    {
      icon: Hotel,
      title: 'Reserva de Hotéis',
      description: 'Encontre e reserve acomodações perfeitas com disponibilidade em tempo real e os melhores preços.',
      link: '/hotels'
    },
    {
      icon: Calendar,
      title: 'Planeador de Viagens',
      description: 'Crie roteiros detalhados com ferramentas inteligentes de planeamento e recomendações.',
      link: '/trip-planner'
    },
    {
      icon: Car,
      title: 'Aluguer de Carros',
      description: 'Compare e reserve veículos de empresas de aluguer confiáveis em todo o mundo.',
      link: '/car-rental'
    },
    {
      icon: Map,
      title: 'Guia da Cidade',
      description: 'Explore destinos com mapas interativos e dicas locais.',
      link: '/city-guide'
    },
    {
      icon: UserCheck,
      title: 'Guias Turísticos',
      description: 'Conecte-se com guias locais verificados para experiências autênticas.',
      link: '/translators'
    },
    {
      icon: Users,
      title: 'Serviços para Grupos',
      description: 'Coordene viagens em grupo com ferramentas especializadas de reserva e planeamento.',
      link: '/services'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Nova Iorque, EUA',
      rating: 5,
      text: 'O HotlLink tornou o planeamento das nossas férias na Europa muito fácil. O planeador de viagens é incrível!'
    },
    {
      name: 'Michael Chen',
      location: 'Toronto, Canadá',
      rating: 5,
      text: 'A melhor plataforma de viagens que já usei. Encontrei ofertas incríveis e o processo de reserva foi perfeito.'
    },
    {
      name: 'Emma Rodriguez',
      location: 'Madrid, Espanha',
      rating: 5,
      text: 'A melhor plataforma de viagens que já usei. Encontrei ofertas incríveis e o processo de reserva foi perfeito.'
    },
    {
      name: 'Emma Rodriguez',
      location: 'Madrid, Espanha',
      rating: 5,
      text: 'A funcionalidade de guias locais ajudou-nos a descobrir verdadeiros tesouros escondidos. Recomendo muito!'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              A sua Plataforma Completa de
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Planeamento de Viagens
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Descubra destinos incríveis, reserve acomodações perfeitas e crie experiências inesquecíveis com as nossas soluções completas de viagem.
            </p>
            
            {/* Barra de Pesquisa */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Para onde?"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  />
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Pesquisar</span>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/trip-planner"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Planear Viagem</span>
              </Link>
              <Link
                to="/hotels"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Explorar Hotéis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tudo o que precisa para uma viagem perfeita
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Da acomodação às atividades, temos todos os aspetos da sua viagem cobertos com ferramentas e serviços profissionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  <span>Saber Mais</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Hotéis no Mundo</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Viajantes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Países</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Apoio ao Cliente</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que dizem os nossos viajantes
            </h2>
            <p className="text-xl text-gray-600">
              Junte-se a milhões de clientes satisfeitos que confiam no HotlLink para as suas viagens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-700 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Pronto para Começar a Sua Próxima Aventura?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
        Junte-se ao HotlLink hoje e descubra um mundo de possibilidades com a nossa plataforma completa de viagens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/trip-planner"
          className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <Calendar className="w-5 h-5" />
          <span>Começar a Planear</span>
        </Link>
        <Link
          to="/dashboard"
          className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-all duration-200"
        >
          Criar Conta
        </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;