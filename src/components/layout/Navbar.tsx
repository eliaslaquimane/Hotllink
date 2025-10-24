import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, User, Globe } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('pt');
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Hotéis', href: '/hotels' },
    { name: 'Serviços', href: '/services' },
    { name: 'Planeador de Viagens', href: '/trip-planner' },
    { name: 'Guia da Cidade', href: '/city-guide' },
    { name: 'Aluguer de Carros', href: '/car-rental' },
    { name: 'Tradutores', href: '/translators' },
    { name: 'Contacto', href: '/contact' },
  ];

  // Função para trocar idioma (apenas exemplo)
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    // Aqui você pode integrar com i18n ou atualizar textos conforme o idioma
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HotlLink
              </span>
            </Link>
          </div>

          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center space-x-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/dashboard"
              className="flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <User className="w-4 h-4" />
              <span>Painel</span>
            </Link>
          </div>

          {/* Botão do menu mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navegação Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/dashboard"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-base font-medium"
              >
                Painel
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Seletor de idioma */}
      <div className="flex items-center justify-center md:justify-end space-x-4 py-2 px-4 bg-gray-50 border-t">
        <div className="flex items-center">
          <Globe className="w-5 h-5 text-gray-500 mr-1" />
          <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-transparent text-gray-700 border-none focus:ring-0 text-sm"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="pt">PT</option>
            <option value="es">ES</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;