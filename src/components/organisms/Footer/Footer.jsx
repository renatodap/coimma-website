import React from 'react';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';

const Footer = ({ config, onNavigate }) => {
  const { copyright, links } = config;

  const certifications = [
    { name: 'ISO 9001', icon: 'Award' },
    { name: 'INMETRO', icon: 'CheckCircle' },
    { name: 'Top of Mind', icon: 'Trophy' },
    { name: 'Touro de Ouro', icon: 'Award' }
  ];

  const handleLinkClick = (e, linkText) => {
    e.preventDefault();
    if (linkText === 'Política de Privacidade' && onNavigate) {
      onNavigate('privacy');
    } else if (linkText === 'Termos de Uso' && onNavigate) {
      onNavigate('terms');
    } else if (linkText === 'Contato' && onNavigate) {
      onNavigate('contact');
    }
  };

  return (
    <footer className="bg-black border-t border-gray-900">
      {/* Certifications Bar */}
      <div className="border-b border-gray-900 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-500 hover:text-coimma-gold transition-colors">
                <Icon name={cert.icon} size={16} />
                <Text variant="caption" className="uppercase tracking-wider">
                  {cert.name}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-white px-2 py-1 rounded-sm">
              <Text variant="industrial" className="text-black text-lg">
                COIMMA
              </Text>
            </div>
            <Text variant="small" className="text-gray-600">
              {copyright}
            </Text>
          </div>
          <div className="flex space-x-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.text)}
                className="text-gray-600 text-xs hover:text-white cursor-pointer uppercase tracking-widest"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
