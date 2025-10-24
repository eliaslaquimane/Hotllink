import { Calendar, Link, MapPin, Search } from "lucide-react";


function Hero(){
    return (
        <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Sua Plataforma Completa de
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
    );
}

export default Hero;