export const SITE_CONFIG = {
  brand: {
    name: 'COIMMA',
    tagline: 'Desde 1951',
    logo: '/assets/images/branding/logo-coimma-original.png',
  },
  hero: {
    preTitle: {
      text: 'Desde 1951',
      lineColor: 'bg-red-600',
    },
    title: {
      line1: 'O Peso da',
      line2: 'Tradição',
      highlightColor: 'from-red-600 to-red-900',
    },
    description: 'Das primeiras carroças em Dracena à automação industrial 4.0. Não fabricamos apenas balanças. Construímos o legado de quem alimenta o mundo.',
    backgroundImage: '/assets/images/hero/black-november-campaign.webp',
    buttons: [
      {
        text: 'Explorar Linha 2025',
        variant: 'primary',
        icon: 'ArrowRight',
      },
      {
        text: 'Filme Institucional',
        variant: 'secondary',
        icon: 'Play',
      },
    ],
    scrollIndicator: {
      text: 'Role para Descobrir',
    },
  },
  legacy: {
    image: {
      url: 'https://images.unsplash.com/photo-1464695110811-dcf3903dc2f4?q=80&w=1974&auto=format&fit=crop',
      caption: 'Dracena, SP — 1951',
    },
    title: 'Começamos consertando carroças.',
    subtitle: 'Hoje, pesamos o PIB do Brasil.',
    paragraphs: [
      'Somos uma empresa familiar. Isso significa que cada equipamento que sai da nossa fábrica carrega não apenas aço e tecnologia, mas o sobrenome de quem dedicou a vida ao campo.',
      'Entendemos a poeira, o suor e o valor de uma arroba. Por isso, quando o CEO diz que 70% da nossa alma é pecuária, não é estatística. É raiz.',
      'Mas honrar o passado é evoluir. Os outros 30% são o futuro: a revolução industrial, a automação dos grãos, o controle absoluto.',
    ],
    signature: 'Família COIMMA',
  },
  marketSplit: {
    pecuaria: {
      percentage: 70,
      title: 'O Coração Pecuário',
      description: 'Balanças eletrônicas e troncos de contenção. Onde nossa liderança é incontestável e onde vamos expandir ainda mais.',
      tag: 'Fase 1: Expansão Imediata',
      backgroundImage: 'https://images.unsplash.com/photo-1545190628-e797d3e74b2d?q=80&w=2070&auto=format&fit=crop',
      cta: 'Ver Soluções Bovinas',
    },
    industrial: {
      percentage: 30,
      title: 'Front Industrial',
      description: 'Balanças de fluxo, rodoviárias e automação. O próximo horizonte de crescimento da COIMMA.',
      tag: 'Fase 2: Inovação',
      backgroundImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop',
      cta: 'Explorar Indústria',
    },
  },
  stats: [
    { value: '74', label: 'Anos de História' },
    { value: '23+', label: 'Países Atendidos' },
    { value: 'ISO', label: '9001 Certificado' },
    { value: '#1', label: 'Líder América Latina' },
  ],
  products: {
    title: 'Obras Primas',
    subtitle: 'em Aço',
    tag: 'Engenharia de Precisão',
    items: [
      {
        id: 1,
        title: 'KM3-Plus',
        category: 'Eletrônica Bovina',
        image: 'https://images.unsplash.com/photo-1615811361523-e7032643441d?q=80&w=2068&auto=format&fit=crop',
        description: 'O cérebro da pesagem moderna. Conectividade total.',
      },
      {
        id: 2,
        title: 'Tronco Americano',
        category: 'Contenção',
        image: 'https://images.unsplash.com/photo-1535136611368-3e4444333595?q=80&w=2060&auto=format&fit=crop',
        description: 'Segurança bruta. Hidráulico ou manual.',
      },
      {
        id: 3,
        title: 'Rodoviária 200t',
        category: 'Industrial',
        image: 'https://images.unsplash.com/photo-1485470764892-052584be5997?q=80&w=2070&auto=format&fit=crop',
        description: 'Pesagem de fluxo contínuo para o agronegócio pesado.',
      },
    ],
  },
  navigation: {
    items: ['Legado', 'Pecuária', 'Industrial', 'Contato'],
    cta: 'Menu',
  },
  contact: {
    title: 'Vamos falar de',
    subtitle: 'Negócios?',
    description: 'Nossa equipe de engenharia e vendas está pronta para desenhar a solução exata para sua fazenda ou indústria.',
    methods: [
      {
        icon: 'Phone',
        label: 'Telefone Comercial',
        value: '0800 11 2555',
      },
      {
        icon: 'Mail',
        label: 'Email Direto',
        value: 'vendas@coimma.com.br',
      },
    ],
    form: {
      fields: [
        {
          name: 'name',
          label: 'Seu Nome',
          type: 'text',
          placeholder: 'Digite seu nome completo',
        },
      ],
      segmentOptions: [
        { value: 'pecuaria', label: 'Pecuária', active: true },
        { value: 'industrial', label: 'Industrial', active: false },
      ],
      submitText: 'Solicitar Consultoria',
    },
  },
  footer: {
    copyright: '© 1951 - 2025',
    links: [
      { text: 'Contato', href: '#' },
      { text: 'Política de Privacidade', href: '#' },
      { text: 'Termos de Uso', href: '#' },
    ],
  },
};

export default SITE_CONFIG;
