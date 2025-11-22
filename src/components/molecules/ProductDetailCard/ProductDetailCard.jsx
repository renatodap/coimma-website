import React, { useState } from 'react';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';

const ProductDetailCard = ({ product, featured = false, onViewProduct }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    if (onViewProduct) {
      onViewProduct(product.id);
    }
  };

  return (
    <div
      className={`
        group relative bg-[#0a0a0a] border border-gray-900
        hover:border-coimma-red transition-all duration-500 cursor-pointer
        ${featured ? 'md:col-span-2' : ''}
      `}
      onClick={handleCardClick}
    >
      {/* Image Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-full group-hover:scale-110 transition-transform duration-700"
          grayscale
          overlay
          overlayGradient="from-black via-black/40 to-transparent"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-coimma-red/90 px-3 py-1">
            <Text variant="caption" className="text-white">
              {product.category}
            </Text>
          </div>
        </div>

        {/* Price Tag */}
        {product.price && (
          <div className="absolute top-4 right-4 bg-black/80 px-4 py-2">
            <Text variant="small" className="text-coimma-gold">
              {product.price}
            </Text>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8">
        {product.tagline && (
          <Text variant="caption" className="text-coimma-red mb-2 block">
            {product.tagline}
          </Text>
        )}

        <Text as="h3" variant="h4" className="text-white mb-4">
          {product.name}
        </Text>

        {product.description && (
          <Text variant="body" className="text-gray-400 mb-6 border-l-2 border-coimma-red pl-4">
            {product.description}
          </Text>
        )}

        {/* Features List */}
        {product.features && product.features.length > 0 && (
          <div className="mb-6">
            <ul className="space-y-2">
              {product.features.slice(0, showDetails ? undefined : 3).map((feature, index) => (
                <li key={index} className="flex items-start space-x-2 text-gray-400 text-sm">
                  <Icon name="Check" size={16} className="text-coimma-gold mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Specs (if show details) */}
        {showDetails && product.specs && (
          <div className="mb-6 bg-black/50 p-4 border border-gray-800">
            <Text variant="caption" className="text-coimma-gold mb-3 block">
              Especificações Técnicas
            </Text>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key}>
                  <Text variant="small" className="text-gray-500 capitalize">
                    {key.replace(/_/g, ' ')}
                  </Text>
                  <Text variant="small" className="text-white font-semibold">
                    {value}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-3">
          <Button
            variant="primary"
            size="medium"
            icon="ArrowRight"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
          >
            Ver Detalhes Completos
          </Button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowDetails(!showDetails);
            }}
            className="px-4 py-3 border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-all text-sm uppercase tracking-wider font-industrial"
          >
            {showDetails ? 'Menos' : 'Mais'} Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
