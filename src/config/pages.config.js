export const PAGES_CONFIG = {
  legacy: {
    hero: {
      title: 'De Uma Oficina de Carroças',
      subtitle: 'À Liderança Continental',
      backgroundImage: 'https://images.unsplash.com/photo-1464695110811-dcf3903dc2f4?q=80&w=1974',
      year: '1951'
    },
    origin: {
      title: 'A Origem',
      content: [
        'Começamos consertando o transporte do passado. Hoje, garantimos a precisão do futuro.',
        'Somos uma empresa familiar que entende o valor do nome. Cada equipamento soldado carrega 74 anos de uma promessa: a COIMMA não falha.',
        'Do conserto de carroças em Dracena à liderança absoluta em balanças e troncos na América Latina, nossa jornada é marcada pela obsessão em não decepcionar quem confia no nosso aço.'
      ],
      images: [
        {
          url: 'https://images.unsplash.com/photo-1464695110811-dcf3903dc2f4?q=80&w=1974',
          caption: 'Dracena, SP — 1951'
        },
        {
          url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
          caption: 'Crescimento — Anos 80'
        }
      ]
    },
    timeline: [
      {
        year: '1951',
        title: 'Fundação',
        description: 'Nasce a oficina de conserto de carroças em Dracena, SP'
      },
      {
        year: '1975',
        title: 'Primeira Balança',
        description: 'Início da fabricação de balanças mecânicas bovinas'
      },
      {
        year: '1998',
        title: 'Era Digital',
        description: 'Lançamento da primeira balança eletrônica KM3'
      },
      {
        year: '2009',
        title: 'Touro de Ouro',
        description: 'Primeiro de 15 prêmios consecutivos'
      },
      {
        year: '2015',
        title: 'Expansão Industrial',
        description: 'Entrada no mercado de balanças rodoviárias'
      },
      {
        year: '2025',
        title: 'Liderança Absoluta',
        description: '74 anos dominando a América Latina'
      }
    ],
    infrastructure: {
      title: 'Estrutura Atual',
      description: 'Não terceirizamos nossa responsabilidade',
      stats: [
        { value: '45.000m²', label: 'Área fabril' },
        { value: '20+', label: 'Caminhões próprios' },
        { value: '23', label: 'Países atendidos' },
        { value: '180+', label: 'Colaboradores' }
      ],
      features: [
        'Frota própria de entrega',
        'Montagem técnica especializada',
        'Assistência em todo território nacional',
        '3 unidades (Dracena, Marabá, Cuiabá)',
        'Estoque permanente de peças'
      ],
      image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2071'
    },
    values: {
      title: 'Nossos Valores',
      items: [
        {
          icon: 'Shield',
          title: 'Compromisso Familiar',
          description: 'Cada equipamento carrega o sobrenome COIMMA'
        },
        {
          icon: 'Award',
          title: 'Excelência Técnica',
          description: '15 anos consecutivos de Touro de Ouro'
        },
        {
          icon: 'Zap',
          title: 'Inovação Constante',
          description: 'Patentes exclusivas e lançamentos anuais'
        },
        {
          icon: 'Users',
          title: 'Parceria de Longo Prazo',
          description: 'Relacionamento que vai além da venda'
        }
      ]
    }
  },
  services: {
    hero: {
      title: 'Sua Operação Não Pode Parar',
      subtitle: 'Suporte Tático COIMMA',
      description: '5% do nosso faturamento vem de garantir que você nunca perca dinheiro por imprecisão.',
      backgroundImage: '/assets/images/lifestyle/service/truck-service-main.webp'
    },
    commitment: {
      title: 'Nosso Compromisso',
      content: 'A venda é apenas o começo. Nossa relação com você é medida em décadas, não em transações. Por isso, mantemos a maior estrutura de pós-venda do setor.',
      stats: [
        { value: '48h', label: 'Tempo máximo de resposta' },
        { value: '95%', label: 'Taxa de resolução remota' },
        { value: '24/7', label: 'Plantão técnico' },
        { value: '100%', label: 'Peças originais' }
      ]
    },
    certification: {
      title: 'Certificações e Garantias',
      items: [
        {
          icon: 'CheckCircle',
          title: 'INMETRO',
          description: 'Todos os equipamentos certificados e rastreáveis'
        },
        {
          icon: 'Shield',
          title: 'ISO 9001',
          description: 'Gestão de qualidade internacional'
        },
        {
          icon: 'Award',
          title: 'Garantia Estendida',
          description: 'Até 24 meses para linha premium'
        },
        {
          icon: 'FileCheck',
          title: 'RBC Rastreável',
          description: 'Calibração com rastreabilidade oficial'
        }
      ]
    },
    support: {
      title: 'Canais de Suporte',
      channels: [
        {
          icon: 'Phone',
          title: 'Central Técnica',
          value: '0800 11 2555',
          description: 'Segunda a sexta, 7h às 18h'
        },
        {
          icon: 'MessageSquare',
          title: 'WhatsApp Plantão',
          value: '(18) 98134-6067',
          description: 'Atendimento emergencial 24/7'
        },
        {
          icon: 'Mail',
          title: 'E-mail Técnico',
          value: 'sac@coimma.com.br',
          description: 'Resposta em até 4 horas úteis'
        },
        {
          icon: 'MapPin',
          title: 'Assistência Presencial',
          value: '3 unidades',
          description: 'Dracena, Marabá e Cuiabá'
        }
      ]
    }
  },
  contact: {
    hero: {
      title: 'Linha Direta',
      subtitle: 'Inicie Seu Projeto',
      description: 'Estamos onde o agronegócio acontece',
      backgroundImage: '/assets/images/hero/black-november-campaign.webp'
    },
    units: [
      {
        id: 'matriz',
        name: 'Matriz Dracena',
        type: 'Sede e Fábrica',
        address: 'Via Marginal José Dansieri, 605',
        city: 'Dracena',
        state: 'SP',
        cep: '17900-000',
        phone: '(18) 3821-9900',
        email: 'vendas@coimma.com.br',
        coords: { lat: -21.4842, lng: -51.5346 },
        image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2071',
        hours: 'Segunda a sexta: 7h às 17h30 | Sábado: 7h às 11h30'
      },
      {
        id: 'maraba',
        name: 'Filial Marabá',
        type: 'Centro de Distribuição Norte',
        city: 'Marabá',
        state: 'PA',
        phone: '(94) 3312-3400',
        email: 'maraba@coimma.com.br',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070'
      },
      {
        id: 'cuiaba',
        name: 'Filial Cuiabá',
        type: 'Centro de Distribuição Centro-Oeste',
        city: 'Cuiabá',
        state: 'MT',
        phone: '(65) 3052-5200',
        email: 'cuiaba@coimma.com.br',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070'
      }
    ],
    urgentContacts: {
      title: 'Diretório Completo',
      subtitle: 'Todos os departamentos COIMMA à sua disposição',
      items: [
        {
          department: 'Vendas',
          email: 'vendas@coimma.com.br',
          phone: '0800 11 2555',
          icon: 'ShoppingCart',
          description: 'Orçamentos e consultoria comercial'
        },
        {
          department: 'Assistência Técnica',
          email: 'sac@coimma.com.br',
          phone: '(18) 98134-6067',
          icon: 'Wrench',
          description: 'Suporte técnico 24/7 e emergências'
        },
        {
          department: 'Peças e Reposição',
          email: 'pecas@coimma.com.br',
          phone: '(18) 3821-9922',
          icon: 'Package',
          description: 'Estoque permanente de peças originais'
        },
        {
          department: 'Exportação',
          email: 'exportacao@coimma.com.br',
          phone: '(18) 3821-9933',
          icon: 'Globe',
          description: 'Atendimento internacional (23+ países)'
        },
        {
          department: 'Financeiro',
          email: 'financeiro@coimma.com.br',
          phone: '(18) 3821-9900',
          icon: 'DollarSign',
          description: 'Faturamento, pagamentos e financiamentos'
        },
        {
          department: 'Logística',
          email: 'logistica@coimma.com.br',
          phone: '(18) 3821-9944',
          icon: 'Truck',
          description: 'Rastreamento de entregas e montagens'
        },
        {
          department: 'Qualidade',
          email: 'qualidade@coimma.com.br',
          phone: '(18) 3821-9955',
          icon: 'Award',
          description: 'Certificações e controle de qualidade'
        },
        {
          department: 'Diretoria',
          email: 'contato@coimma.com.br',
          phone: '(18) 3821-9900',
          icon: 'Building',
          description: 'Contato direto com gestão executiva'
        }
      ]
    },
    form: {
      title: 'Solicite um Orçamento',
      subtitle: 'Resposta em até 2 horas úteis',
      fields: [
        { name: 'nome', label: 'Nome Completo', type: 'text', required: true },
        { name: 'empresa', label: 'Empresa/Fazenda', type: 'text', required: false },
        { name: 'email', label: 'E-mail', type: 'email', required: true },
        { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true },
        { name: 'cidade', label: 'Cidade/Estado', type: 'text', required: true }
      ],
      segments: [
        { value: 'pecuaria', label: 'Pecuária', description: 'Balanças e troncos bovinos' },
        { value: 'industrial', label: 'Industrial', description: 'Rodoviárias e fluxo' },
        { value: 'assistencia', label: 'Assistência', description: 'Manutenção e calibração' },
        { value: 'outro', label: 'Outro', description: 'Outros serviços' }
      ],
      products: [
        'Balança Eletrônica (KM3-Plus/KM3-N)',
        'Tronco de Contenção',
        'Balança + Tronco (Conjunto)',
        'Balança Rodoviária',
        'Balança de Fluxo',
        'Assistência Técnica',
        'Calibração',
        'Outro'
      ]
    }
  }
};

export default PAGES_CONFIG;
