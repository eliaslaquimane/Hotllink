import { Hotel, Calendar, Car, UserCheck, Users, ArrowRight, Map as MapIcon } from "lucide-react";
import { Link } from "react-router-dom";


const Features = () => {
    
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
      icon: MapIcon,
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

    return(
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
    )
}

export default Features;