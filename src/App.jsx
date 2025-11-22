import React, { useState, useEffect } from 'react';
import Layout from './components/templates/Layout';
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import ProductDetailPage from './components/pages/ProductDetailPage';
import LegacyPage from './components/pages/LegacyPage';
import ServicesPage from './components/pages/ServicesPage';
import ContactPage from './components/pages/ContactPage';
import PrivacyPage from './components/pages/PrivacyPage';
import TermsPage from './components/pages/TermsPage';
import HistoryPage from './components/pages/HistoryPage';
import SITE_CONFIG from './config/content.config';
import PRODUCTS_CONFIG from './config/products.config';
import PAGES_CONFIG from './config/pages.config';
import './styles/index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);

  const pages = {
    home: 'Home',
    products: 'A Máquina',
    legacy: 'O Legado',
    services: 'Suporte',
    contact: 'Contato',
    privacy: 'Privacidade',
    terms: 'Termos'
  };

  // Find product by ID across all categories
  const findProduct = (productId) => {
    // Search in pecuaria
    for (const category of PRODUCTS_CONFIG.pecuaria.categories) {
      const product = category.products.find(p => p.id === productId);
      if (product) return { product, category: category.name };
    }
    // Search in industrial
    for (const category of PRODUCTS_CONFIG.industrial.categories) {
      const product = category.products.find(p => p.id === productId);
      if (product) return { product, category: category.name };
    }
    return null;
  };

  const handleNavigate = (page, productId = null) => {
    setCurrentPage(page);
    setSelectedProductId(productId);
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewProduct = (productId) => {
    setCurrentPage('product-detail');
    setSelectedProductId(productId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProducts = () => {
    setCurrentPage('products');
    setSelectedProductId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationConfig = {
    logo: SITE_CONFIG.brand.logo,
    navItems: Object.keys(pages).slice(1).filter(key =>
      !['contact', 'privacy', 'terms'].includes(key)
    ), // Exclude 'home', 'contact', 'privacy', 'terms' from top nav
    ctaText: SITE_CONFIG.navigation.cta,
    onNavigate: handleNavigate,
    currentPage: currentPage === 'product-detail' ? 'products' : currentPage,
    pages
  };

  const homePageConfig = {
    hero: SITE_CONFIG.hero,
    legacy: SITE_CONFIG.legacy,
    stats: SITE_CONFIG.stats,
    marketSplit: SITE_CONFIG.marketSplit,
    products: SITE_CONFIG.products,
    contact: SITE_CONFIG.contact,
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage config={homePageConfig} onNavigate={handleNavigate} />;

      case 'products':
        return (
          <ProductsPage
            pecuaria={PRODUCTS_CONFIG.pecuaria}
            industrial={PRODUCTS_CONFIG.industrial}
            services={PRODUCTS_CONFIG.services.items}
            onViewProduct={handleViewProduct}
          />
        );

      case 'product-detail': {
        const result = findProduct(selectedProductId);
        if (!result) {
          setCurrentPage('products');
          return null;
        }
        // Get related products from same category
        const allCategoryProducts = [
          ...PRODUCTS_CONFIG.pecuaria.categories.flatMap(c => c.products),
          ...PRODUCTS_CONFIG.industrial.categories.flatMap(c => c.products)
        ];
        const relatedProducts = allCategoryProducts
          .filter(p => p.id !== selectedProductId)
          .slice(0, 3);

        return (
          <ProductDetailPage
            product={result.product}
            onBack={handleBackToProducts}
            relatedProducts={relatedProducts}
          />
        );
      }

      case 'legacy':
        return <HistoryPage />;

      case 'services':
        return (
          <ServicesPage
            config={PAGES_CONFIG.services}
            services={PRODUCTS_CONFIG.services.items}
          />
        );

      case 'contact':
        return <ContactPage config={PAGES_CONFIG.contact} />;

      case 'privacy':
        return <PrivacyPage />;

      case 'terms':
        return <TermsPage />;

      default:
        return <HomePage config={homePageConfig} onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout navigation={navigationConfig} footer={SITE_CONFIG.footer}>
      {renderPage()}
    </Layout>
  );
}

export default App;
