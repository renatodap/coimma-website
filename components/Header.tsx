// Header component for COIMMA website
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Institucional', href: '/institucional' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Educacional', href: '/educacional' },
    { name: 'Loja Virtual', href: '/loja' },
  ];

  return (
    <header className="bg-coimma-primary flex items-center justify-center w-full" style={{height: '120px'}}>
      <Link href="/" className="flex items-center justify-center w-full h-full">
        <img src="/logo-coimma.png" alt="COIMMA Logo" className="h-28 md:h-32 object-contain mx-auto" style={{maxHeight: '100px'}} />
      </Link>
    </header>
  );
}
