import React from 'react';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';

const ProductDetailPage = ({ product, onBack, relatedProducts = [] }) => {
  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Text variant="h2" className="text-white">Produto não encontrado</Text>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          <Text variant="small" className="uppercase tracking-widest">Voltar aos Produtos</Text>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Product Image */}
          <div className="relative">
            <div className="sticky top-32">
              <div className="relative aspect-square overflow-hidden bg-[#0a0a0a] border border-gray-900">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full"
                  grayscale
                  overlay={false}
                />
              </div>

              {/* Category Badge */}
              <div className="absolute top-6 left-6 bg-coimma-red px-4 py-2">
                <Text variant="caption" className="text-white">
                  {product.category}
                </Text>
              </div>

              {/* Price Tag */}
              {product.price && (
                <div className="mt-6 bg-[#0a0a0a] border border-gray-900 p-6">
                  <Text variant="caption" className="text-gray-500 mb-2 block">
                    Preço
                  </Text>
                  <Text variant="h3" className="text-coimma-gold">
                    {product.price}
                  </Text>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {product.tagline && (
              <Text variant="caption" className="text-coimma-red mb-3 block">
                {product.tagline}
              </Text>
            )}

            <Text as="h1" variant="h1" className="text-white mb-6 text-5xl md:text-6xl">
              {product.name}
            </Text>

            {product.description && (
              <Text variant="bodyLarge" className="text-gray-300 mb-8 leading-relaxed border-l-2 border-coimma-red pl-6">
                {product.description}
              </Text>
            )}

            {/* Full Description */}
            {product.fullDescription && (
              <div className="mb-8 space-y-4">
                {product.fullDescription.split('\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <Text key={index} variant="body" className="text-gray-400">
                      {paragraph}
                    </Text>
                  )
                ))}
              </div>
            )}

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <Text variant="h5" className="text-white mb-4">
                  Características Principais
                </Text>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon name="Check" size={20} className="text-coimma-gold mt-1 flex-shrink-0" />
                      <Text variant="body" className="text-gray-300">
                        {feature}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Specs */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div className="mb-8 bg-[#0a0a0a] border border-gray-900 p-6">
                <Text variant="h5" className="text-white mb-4">
                  Especificações Técnicas
                </Text>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="border-l-2 border-coimma-red pl-4">
                      <Text variant="small" className="text-gray-500 capitalize mb-1">
                        {key.replace(/_/g, ' ')}
                      </Text>
                      <Text variant="body" className="text-white font-semibold">
                        {value}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
              <div className="mb-8">
                <Text variant="h5" className="text-white mb-4">
                  Aplicações
                </Text>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, index) => (
                    <div key={index} className="bg-[#0a0a0a] border border-gray-800 px-4 py-2">
                      <Text variant="small" className="text-gray-300">
                        {app}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" size="large" icon="Send" className="flex-1">
                Solicitar Orçamento
              </Button>
              <Button variant="secondary" size="large" icon="Phone" className="flex-1">
                Ligar Agora
              </Button>
            </div>

            {/* Additional Info */}
            <div className="bg-[#0a0a0a] border border-gray-900 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Icon name="Shield" size={24} className="text-coimma-gold mb-2" />
                  <Text variant="caption" className="text-gray-500 mb-1">
                    Garantia
                  </Text>
                  <Text variant="small" className="text-white">
                    {product.warranty || '24 meses'}
                  </Text>
                </div>
                <div>
                  <Icon name="Award" size={24} className="text-coimma-gold mb-2" />
                  <Text variant="caption" className="text-gray-500 mb-1">
                    Certificação
                  </Text>
                  <Text variant="small" className="text-white">
                    INMETRO
                  </Text>
                </div>
                <div>
                  <Icon name="Truck" size={24} className="text-coimma-gold mb-2" />
                  <Text variant="caption" className="text-gray-500 mb-1">
                    Entrega
                  </Text>
                  <Text variant="small" className="text-white">
                    Todo Brasil
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts && relatedProducts.length > 0 && (
          <div className="mt-20">
            <Text variant="h2" className="text-white mb-12">
              Produtos Relacionados
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.slice(0, 3).map((related) => (
                <div key={related.id} className="bg-[#0a0a0a] border border-gray-900 hover:border-coimma-red transition-all cursor-pointer group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.name}
                      className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                      grayscale
                      overlay
                    />
                  </div>
                  <div className="p-6">
                    <Text variant="caption" className="text-coimma-red mb-2">
                      {related.category}
                    </Text>
                    <Text variant="h5" className="text-white mb-2">
                      {related.name}
                    </Text>
                    <Text variant="small" className="text-gray-400">
                      {related.price}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
