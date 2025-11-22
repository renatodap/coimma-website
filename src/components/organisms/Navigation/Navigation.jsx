import React, { useState } from 'react';
import LogoBadge from '../../molecules/LogoBadge';
import NavItem from '../../molecules/NavItem';
import Icon from '../../atoms/Icon';

const Navigation = ({ logo, navItems, ctaText, onNavigate, currentPage, pages }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageKey) => {
    if (onNavigate) onNavigate(pageKey);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full z-50 top-0 left-0 px-4 md:px-6 py-4 md:py-6 bg-black/95 backdrop-blur-sm border-b border-gray-900 text-white">
        <div className="flex justify-between items-center">
          {/* Logo - Click to go home */}
          <div onClick={() => handleNavClick('home')} className="cursor-pointer">
            <LogoBadge logoSrc={logo} />
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((pageKey, index) => (
              <NavItem
                key={index}
                onClick={() => handleNavClick(pageKey)}
                className={currentPage === pageKey ? 'text-coimma-red' : ''}
              >
                {pages && pages[pageKey] ? pages[pageKey] : pageKey}
              </NavItem>
            ))}
          </div>

          {/* Spacer for layout balance on desktop - no CTA button */}
          <div className="hidden md:block w-8"></div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <Icon name="X" size={24} />
            ) : (
              <Icon name="Menu" size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-black border-l border-gray-900 z-50 md:hidden
          transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4 border-b border-gray-900">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-900 transition-colors"
            >
              <Icon name="X" size={24} />
            </button>
          </div>

          {/* Mobile Nav Items */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="space-y-1">
              {navItems.map((pageKey, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(pageKey)}
                  className={`
                    w-full text-left px-6 py-4 font-industrial uppercase tracking-widest text-sm
                    hover:bg-gray-900 transition-colors border-l-2
                    ${currentPage === pageKey
                      ? 'border-coimma-red text-coimma-red bg-gray-900'
                      : 'border-transparent text-gray-300'
                    }
                  `}
                >
                  {pages && pages[pageKey] ? pages[pageKey] : pageKey}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="p-4 border-t border-gray-900">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-coimma-red text-white font-industrial uppercase py-4 hover:bg-red-800 transition-colors"
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
