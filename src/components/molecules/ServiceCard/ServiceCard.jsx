import React from 'react';
import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';

const ServiceCard = ({ service }) => {
  return (
    <div className="group bg-[#0a0a0a] border border-gray-900 hover:border-coimma-red transition-all duration-300 p-8">
      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 bg-coimma-red/10 group-hover:bg-coimma-red/20 transition-colors flex items-center justify-center">
          <Icon name={service.icon} size={32} className="text-coimma-red" />
        </div>
      </div>

      {/* Content */}
      <Text as="h3" variant="h4" className="text-white mb-3">
        {service.name}
      </Text>

      <Text variant="body" className="text-gray-400 mb-6">
        {service.description}
      </Text>

      {/* Features */}
      {service.features && (
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-gray-400 text-sm">
              <Icon name="Check" size={14} className="text-coimma-gold mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Price */}
      {service.price && (
        <div className="mb-6 pt-6 border-t border-gray-800">
          <Text variant="legacy" className="text-coimma-gold">
            {service.price}
          </Text>
        </div>
      )}

      {/* CTA */}
      <Button variant="secondary" size="small" icon="ArrowRight" fullWidth>
        Solicitar Serviço
      </Button>
    </div>
  );
};

export default ServiceCard;
