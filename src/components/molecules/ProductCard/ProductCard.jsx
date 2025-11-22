import React from 'react';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';

const ProductCard = ({
  index,
  title,
  category,
  image,
  description,
  delay = 0,
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-[500px] overflow-hidden bg-[#111] border border-gray-900 group-hover:border-gray-700 transition-colors">
        <div className="absolute top-6 right-6 z-20 text-right">
          <Text
            variant="h1"
            className="text-gray-500 text-6xl opacity-20 group-hover:opacity-100 transition-opacity"
          >
            0{index}
          </Text>
        </div>

        <Image
          src={image}
          alt={title}
          className="absolute inset-0 opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          overlay
          overlayGradient="from-black via-transparent to-transparent"
        />

        <div className="absolute bottom-0 left-0 p-8 w-full">
          <Text variant="caption" className="text-coimma-red mb-2 block">
            {category}
          </Text>
          <Text as="h3" variant="h3" className="text-white mb-4">
            {title}
          </Text>
          <div className="h-0 overflow-hidden group-hover:h-auto transition-all">
            <p className="font-tech text-gray-400 text-sm border-l border-coimma-red pl-4 mb-6">
              {description}
            </p>
            <span className="text-white text-xs uppercase border-b border-white pb-1">
              Detalhes Técnicos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
