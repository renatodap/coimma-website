import React from 'react';
import SectionHeader from '../../molecules/SectionHeader';
import ProductCard from '../../molecules/ProductCard';
import Text from '../../atoms/Text';
import { useFadeIn } from '../../../hooks/useFadeIn';

const ProductShowcase = ({ config }) => {
  const { title, subtitle, tag, items } = config;

  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <SectionHeader tag={tag} title={title} subtitle={subtitle} />
          <div className="hidden md:block pb-2">
            <Text variant="small" className="text-gray-500 text-right">
              Deslize para ver o catálogo
            </Text>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const [ref, isVisible] = useFadeIn();
            return (
              <div
                key={item.id}
                ref={ref}
                className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <ProductCard
                  index={item.id}
                  title={item.title}
                  category={item.category}
                  image={item.image}
                  description={item.description}
                  delay={index * 150}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
