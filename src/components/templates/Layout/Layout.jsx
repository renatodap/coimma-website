import React from 'react';
import Navigation from '../../organisms/Navigation';
import Footer from '../../organisms/Footer';

const Layout = ({ children, navigation, footer }) => {
  return (
    <div className="bg-black min-h-screen text-gray-200 selection:bg-coimma-red selection:text-white">
      <Navigation {...navigation} />
      <div className="grain-overlay"></div>
      <main className="relative z-10">{children}</main>
      <Footer config={footer} onNavigate={navigation.onNavigate} />
    </div>
  );
};

export default Layout;
