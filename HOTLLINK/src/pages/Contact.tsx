import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, HeadphonesIcon } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Suporte Telefônico 24/7',
      description: 'Fale com nossos especialistas em viagens a qualquer momento',
      contact: '+258841111122',
      availability: 'Disponível 24/7'
    },
    {
      icon: Mail,
      title: 'Suporte por E-mail',
      description: 'Obtenha ajuda detalhada por e-mail',
      contact: 'suporte@hotelink.com',
      availability: 'Resposta em até 2 horas'
    },
    {
      icon: MessageCircle,
      title: 'Chat ao Vivo',
      description: 'Ajuda instantânea pelo nosso sistema de chat',
      contact: 'Iniciar Chat',
      availability: 'Disponível 24/7'
    },
    {
      icon: HeadphonesIcon,
      title: 'Suporte por Videochamada',
      description: 'Atendimento presencial para dúvidas complexas',
      contact: 'Agendar Chamada',
      availability: 'Seg-Sex, 9h - 18h'
    }
  ];

  const offices = [
    {
    city: 'Nampula',
    address: 'Moçambique, Cidade de Nampula',
    phone: '+258861144847',
    hours: 'Seg-Sex: 9h - 18h'
  }
  ];

  const faqs = [
    {
      question: 'Como faço para cancelar ou modificar minha reserva?',
      answer: 'Você pode cancelar ou modificar sua reserva pelo seu painel ou entrando em contato com nossa equipe de suporte. As políticas de cancelamento variam conforme o fornecedor do serviço.'
    },
    {
      question: 'Quais métodos de pagamento vocês aceitam?',
      answer: 'Aceitamos todos os principais cartões de crédito, PayPal, transferências bancárias e carteiras digitais. O pagamento é seguro e processado por canais criptografados.'
    },
    {
      question: 'O seguro viagem está incluído?',
      answer: 'O seguro viagem está disponível como adicional durante a reserva. Trabalhamos com seguradoras líderes para oferecer opções de cobertura abrangentes.'
    },
    {
      question: 'Com que antecedência devo reservar?',
      answer: 'Para melhores tarifas e disponibilidade, recomendamos reservar com pelo menos 2-3 semanas de antecedência. No entanto, reservas de última hora também estão disponíveis.'
    },
    {
      question: 'Vocês oferecem descontos para grupos?',
      answer: 'Sim! Oferecemos tarifas especiais para grupos de 10 ou mais pessoas. Entre em contato com nossos especialistas em viagens para grupos para pacotes e preços personalizados.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fale Conosco
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa equipe de suporte está pronta para te ajudar a planejar a viagem perfeita. Entre em contato a qualquer momento!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{method.description}</p>
              <div className="text-blue-600 font-semibold mb-2">{method.contact}</div>
              <div className="text-xs text-gray-500">{method.availability}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="João"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sobrenome
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Silva"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="joao@exemplo.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+55 (11) 91234-5678"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Dúvida Geral</option>
                  <option>Suporte de Reserva</option>
                  <option>Problema Técnico</option>
                  <option>Parceria</option>
                  <option>Feedback</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Como podemos te ajudar hoje?"
                />
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold">
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Office Locations & FAQ */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nossos Escritórios</h2>
              
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{office.city}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-4 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-red-900 mb-4">Suporte de Emergência em Viagens</h3>
            <p className="text-red-700 mb-4">
              Precisa de assistência imediata durante a viagem? Nossa linha de emergência está disponível 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-red-900 font-semibold">
                <Phone className="w-5 h-5" />
                <span>Linha de Emergência: +258 861 911-HELP</span>
              </div>
              <div className="flex items-center space-x-2 text-red-900 font-semibold">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp: +258 855 911-CHAT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;