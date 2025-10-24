import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informações da Empresa */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">HotlLink</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A sua plataforma completa de planeamento de viagens. Descubra, planeie e reserve experiências inesquecíveis com facilidade.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Ligações Rápidas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ligações Rápidas</h3>
            <ul className="space-y-2">
              {['hotels', 'services', 'trip-planner', 'city-guide', 'car-rental'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(' ', '-').replace('ç','c').replace('ã','a').replace('é','e').replace('í','i')}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Reserva de Hotéis</li>
              <li>Serviços de Guia Turístico</li>
              <li>Transporte</li>
              <li>Serviços de Tradução</li>
              <li>Planeamento de Atividades</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacte-nos</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+351 912 345 678</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                <span>suporte@hotllink.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Rua das Viagens, 123<br />Moçambique, Nampula 1000-001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} HotlLink. Todos os direitos reservados. | Política de Privacidade | Termos de Serviço
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;