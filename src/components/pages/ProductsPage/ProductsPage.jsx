import React, { useState } from 'react';
import Hero from '../../organisms/Hero';
import ProductCategory from '../../organisms/ProductCategory';
import Stats from '../../organisms/Stats';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';

const ProductsPage = ({ pecuaria, industrial, services, onViewProduct }) => {
  const [activeSegment, setActiveSegment] = useState('pecuaria');

  const heroConfig = {
    preTitle: {
      text: activeSegment === 'pecuaria' ? pecuaria.subtitle : industrial.subtitle,
      lineColor: 'bg-coimma-red'
    },
    title: {
      line1: 'Construído Para',
      line2: 'A Guerra Diária',
      highlightColor: 'from-coimma-red to-red-900'
    },
    description: activeSegment === 'pecuaria' ? pecuaria.description : industrial.description,
    backgroundImage: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2074',
    buttons: [
      { text: 'Solicitar Orçamento Técnico', variant: 'primary', icon: 'ArrowRight' }
    ],
    scrollIndicator: {
      text: 'Explore o Catálogo'
    }
  };

  const statsData = [
    { value: activeSegment === 'pecuaria' ? '70%' : '30%', label: 'Do nosso DNA' },
    { value: '74', label: 'Anos de História' },
    { value: '30+', label: 'Modelos Diferentes' },
    { value: '#1', label: 'Líder América Latina' }
  ];

  return (
    <>
      {/* Segment Switcher */}
      <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-40 bg-black/90 backdrop-blur-sm border border-gray-800 p-2 flex gap-2">
        <button
          onClick={() => setActiveSegment('pecuaria')}
          className={`px-6 py-3 font-industrial uppercase tracking-wider text-sm transition-all ${
            activeSegment === 'pecuaria'
              ? 'bg-coimma-red text-white'
              : 'bg-transparent text-gray-400 hover:text-white'
          }`}
        >
          Pecuária (70%)
        </button>
        <button
          onClick={() => setActiveSegment('industrial')}
          className={`px-6 py-3 font-industrial uppercase tracking-wider text-sm transition-all ${
            activeSegment === 'industrial'
              ? 'bg-coimma-gold text-black'
              : 'bg-transparent text-gray-400 hover:text-white'
          }`}
        >
          Industrial (30%)
        </button>
      </div>

      <Hero config={heroConfig} />

      <Stats stats={statsData} />

      {/* Product Categories */}
      <div className="bg-black">
        {activeSegment === 'pecuaria' ? (
          <>
            {pecuaria.categories.map((category, index) => (
              <ProductCategory
                key={category.id}
                category={category}
                featured={index === 0}
                onViewProduct={onViewProduct}
              />
            ))}
          </>
        ) : (
          <>
            {industrial.categories.map((category, index) => (
              <ProductCategory
                key={category.id}
                category={category}
                featured={index === 0}
                onViewProduct={onViewProduct}
              />
            ))}
          </>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-32 bg-coimma-red relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <Text as="h2" variant="h2" className="text-white mb-8">
            Não Encontrou o Que Procura?
          </Text>
          <Text variant="bodyLarge" className="text-red-100 mb-12 max-w-2xl mx-auto">
            Nossa engenharia desenvolve soluções sob medida. Fale com nossos especialistas.
          </Text>
          <Button variant="outline" size="large" icon="Phone">
            Falar com Especialista
          </Button>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
