import React from 'react';
import Hero from '../../organisms/Hero';
import LegacySection from '../../organisms/LegacySection';
import Stats from '../../organisms/Stats';
import MarketSplit from '../../organisms/MarketSplit';
import ProductShowcase from '../../organisms/ProductShowcase';
import ContactSection from '../../organisms/ContactSection';

const HomePage = ({ config }) => {
  const { hero, legacy, stats, marketSplit, products, contact } = config;

  return (
    <>
      <Hero config={hero} />
      <LegacySection config={legacy} />
      <Stats stats={stats} />
      <MarketSplit
        pecuaria={marketSplit.pecuaria}
        industrial={marketSplit.industrial}
      />
      <ProductShowcase config={products} />
      <ContactSection config={contact} />
    </>
  );
};

export default HomePage;
