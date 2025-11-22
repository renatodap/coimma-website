import React from 'react';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';

const UnitCard = ({ unit }) => {
  return (
    <div className="bg-[#0a0a0a] border border-gray-900 hover:border-coimma-red transition-all duration-300 overflow-hidden group">
      {/* Image */}
      {unit.image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={unit.image}
            alt={unit.name}
            className="w-full h-full group-hover:scale-110 transition-transform duration-700"
            grayscale
            overlay
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <Text variant="caption" className="text-coimma-red mb-1 block">
            {unit.type}
          </Text>
          <Text as="h3" variant="h4" className="text-white">
            {unit.name}
          </Text>
        </div>

        {/* Address */}
        {unit.address && (
          <div className="mb-4 flex items-start space-x-2">
            <Icon name="MapPin" size={16} className="text-coimma-gold mt-1 flex-shrink-0" />
            <div>
              <Text variant="small" className="text-gray-400">
                {unit.address}<br />
                {unit.city}, {unit.state}
                {unit.cep && ` - ${unit.cep}`}
              </Text>
            </div>
          </div>
        )}

        {/* Contact Info */}
        <div className="space-y-3 mb-6">
          {unit.phone && (
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={16} className="text-coimma-gold" />
              <Text variant="small" className="text-white">
                {unit.phone}
              </Text>
            </div>
          )}
          {unit.email && (
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={16} className="text-coimma-gold" />
              <Text variant="small" className="text-white">
                {unit.email}
              </Text>
            </div>
          )}
        </div>

        {/* Hours */}
        {unit.hours && (
          <div className="pt-4 border-t border-gray-800">
            <Text variant="small" className="text-gray-500">
              {unit.hours}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnitCard;
