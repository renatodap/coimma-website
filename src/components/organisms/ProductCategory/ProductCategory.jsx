import React from 'react';
import Text from '../../atoms/Text';
import ProductDetailCard from '../../molecules/ProductDetailCard';
import SectionHeader from '../../molecules/SectionHeader';

const ProductCategory = ({ category, featured = false, onViewProduct }) => {
  return (
    <section className="py-20 border-b border-gray-900">
      <div className="container mx-auto px-6">
        {/* Category Header */}
        <div className="mb-12">
          <SectionHeader
            tag={category.name}
            title={category.description}
            titleClassName="text-coimma-gold"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product, index) => (
            <ProductDetailCard
              key={product.id}
              product={product}
              featured={featured && index === 0}
              onViewProduct={onViewProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
