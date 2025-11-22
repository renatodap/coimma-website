export const PRODUCTS_CONFIG = {
  pecuaria: {
    title: 'O Comando do Campo',
    subtitle: 'Pecuária',
    description: 'Precisão absoluta para manejar e pesar o maior rebanho comercial do mundo.',
    percentage: 70,
    categories: [
      {
        id: 'balancas-eletronicas',
        name: 'Balanças Eletrônicas Bovinas',
        description: 'Tecnologia de ponta para pesagem precisa',
        products: [
          {
            id: 'km3-plus',
            name: 'KM3-Plus',
            tagline: 'O Cérebro Portátil',
            category: 'Balança Eletrônica',
            price: 'A partir de R$ 8.500',
            image: '/assets/images/products/balancas-eletronicas/km3-plus-main.png',
            features: [
              'Display LCD colorido 4.3" touch screen',
              'Bateria com até 26 horas de autonomia',
              'Bluetooth, Serial RS232 e USB integrados',
              'Memória: 5.475 sessões de pesagem',
              '100.000 cadastros de animais',
              'App COIMMA Pec 2.0 (iOS/Android)',
              'Estatísticas avançadas com IA'
            ],
            specs: {
              capacidade: '2.000 kg',
              divisao: '500g',
              barras: '600mm, 900mm, 1150mm',
              bateria: '26h autonomia',
              garantia: '24 meses',
              aprovacao: 'INMETRO + IPEM'
            },
            description: 'O cérebro da pesagem moderna. Conectividade total para gerenciar seu rebanho com precisão militar.',
            fullDescription: 'O KM3-Plus é o indicador mais avançado da COIMMA, equipado com microprocessador inteligente com IA para gestão completa do rebanho. Display LCD colorido 4.3" touch screen oferece interface intuitiva, enquanto a bateria interna recarregável proporciona até 26 horas de trabalho contínuo. Conectividade Bluetooth permite integração com leitor de brincos, PC e smartphone. Armazena 5.475 sessões de pesagem, 1.000.000 de pesagens arquivadas e 100.000 cadastros de animais. Inclui software PC gratuito e App COIMMA Pec 2.0 para sincronização em tempo real.',
            applications: [
              'Pesagem individual de bovinos',
              'Monitoramento de ganho de peso',
              'Planejamento de abate e comercialização',
              'Registro individual do rebanho',
              'Integração com sistemas de gestão de fazenda'
            ],
            warranty: '24 meses'
          },
          {
            id: 'km3-n',
            name: 'KM3-N',
            tagline: 'Estabilidade Garantida',
            category: 'Balança Eletrônica',
            price: 'A partir de R$ 6.500',
            image: '/assets/images/products/balancas-eletronicas/km3-plus-main.png',
            features: [
              'Display LED/LCD robusto',
              'Maior durabilidade que KM3-Plus',
              'Menor consumo de energia',
              'Células de carga COIMMA',
              'Estrutura anti-corrosiva',
              'Operação manual/semiautomática'
            ],
            specs: {
              capacidade: '2.000 kg',
              divisao: '500g',
              barras: '600mm, 900mm, 1150mm',
              garantia: '24 meses',
              aprovacao: 'INMETRO + IPEM'
            },
            description: 'Confiabilidade inabalável. A escolha para quem não aceita margem de erro.',
            fullDescription: 'O KM3-N é a versão mais robusta e resistente da linha KM3, projetado para ambientes adversos. Construído com células de carga de fabricação nacional COIMMA e estrutura de aço carbono com tratamento anti-corrosivo, oferece maior durabilidade que o KM3-Plus. Display LED/LCD mais simples mas extremamente confiável. Menor consumo de energia e ideal para pecuaristas que precisam de equipamento robusto sem recursos extras. Preço mais acessível sem comprometer a precisão.',
            applications: [
              'Pesagem individual de bovinos',
              'Ambientes adversos',
              'Zonas rurais remotas',
              'Operações com energia limitada'
            ],
            warranty: '24 meses'
          },
          {
            id: 'w810',
            name: 'W810 Premium',
            tagline: 'Linha Premium',
            category: 'Balança Eletrônica',
            price: 'A partir de R$ 7.800',
            image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070',
            features: [
              'Tecnologia de ponta',
              'Interface premium',
              'Precisão máxima',
              'Design robusto',
              'Garantia estendida'
            ],
            specs: {
              capacidade: '3.000 kg',
              divisao: '500g',
              bateria: '40h'
            }
          },
          {
            id: 'w310',
            name: 'W310 Standard',
            tagline: 'Confiança Comprovada',
            category: 'Balança Eletrônica',
            price: 'A partir de R$ 5.500',
            image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2070',
            features: [
              'Custo-benefício imbatível',
              'Durabilidade testada',
              'Manutenção simplificada',
              'Display resistente',
              'Portabilidade'
            ],
            specs: {
              capacidade: '2.500 kg',
              divisao: '1kg',
              bateria: '25h'
            }
          }
        ]
      },
      {
        id: 'troncos',
        name: 'Troncos de Contenção',
        description: 'Segurança e eficiência no manejo',
        products: [
          {
            id: 'tronco-americano',
            name: 'Tronco Americano',
            tagline: 'O Tanque de Guerra',
            category: 'Contenção Premium',
            price: 'A partir de R$ 28.000',
            image: '/assets/images/products/troncos/robust-plus-diagram.png',
            features: [
              'Design original americano comprovado',
              'Estrutura com Vigas perfil I',
              'Resistência estrutural superior',
              'Sistema de guilhotina versátil',
              'Portões laterais robustos',
              'Compatível com balanças eletrônicas',
              'Fácil limpeza e manutenção'
            ],
            specs: {
              capacidade: '1 bovino',
              estrutura: 'Vigas perfil I',
              sistema: 'Design americano',
              compatibilidade: 'Balanças eletrônicas'
            },
            description: 'Construído para a guerra diária. O padrão ouro da contenção bovina.',
            fullDescription: 'O Tronco Americano combina design original americano comprovado há décadas com estrutura de Vigas perfil I para máxima resistência. Sistema de guilhotina americano versátil garante segurança máxima para técnico e animal. Estrutura comprovada internacionalmente com durabilidade notória. Portões laterais robustos facilitam acesso durante procedimentos veterinários. Compatível com integração de balanças eletrônicas para operação completa.',
            applications: [
              'Castração',
              'Inseminação Artificial (IA)',
              'Marcação e identificação',
              'Transferência de embriões',
              'Palpação e exames',
              'Casqueamento',
              'Vacinações',
              'Descorna'
            ],
            warranty: '24 meses'
          },
          {
            id: 'tronco-convencional-plus',
            name: 'Tronco Convencional Plus',
            tagline: 'NOVO - Máxima Versatilidade',
            category: 'Contenção Avançada',
            price: 'A partir de R$ 22.000',
            image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2074',
            features: [
              'Quatro compartimentos (3 animal + 1 operador)',
              '12 portões de acesso estratégicos',
              'Guilhotinas hidráulicas simétricas',
              'Parte superior centralizada',
              'Trancas automáticas nos portões',
              'Cabine ampla para técnico',
              'Dispositivo Castrador com patente INPI',
              'Chassis metálico com 2 vigas I'
            ],
            specs: {
              comprimento: '3,85m',
              altura_total: '3,00m',
              largura_superior: '0,94m',
              largura_inferior: '0,48m',
              compartimentos: '4',
              portoes: '12',
              guilhotinas: '3 (2 pescoceiras + 1 virilheira)',
              sistema: 'Hidráulico com pistões'
            },
            description: 'Inovação COIMMA. Mais portões, mais eficiência, mesma robustez.',
            fullDescription: 'O Tronco Convencional Plus representa o estado da arte em contenção bovina. Com quatro compartimentos (três para o animal e um para operador), oferece segurança aumentada. Inovador sistema de 12 portões de acesso facilita trabalho em diferentes regiões do corpo do animal. Parte superior centralizada torna o equipamento mais compacto, estável e economiza espaço no curral. Guilhotinas hidráulicas simétricas sobre trilhos prendem animais de qualquer tamanho. Portões com trancas automáticas ao bater/empurrar. Pronto para integração com balanças eletrônicas. Inclui dispositivo castrador com patente INPI concedida.',
            applications: [
              'Castração',
              'Inseminação Artificial',
              'Marcação a ferro/brinco',
              'Transferência de embriões',
              'Palpação andrológica',
              'Casqueamento',
              'Identificação eletrônica',
              'Medida de perímetro escrotal',
              'Vacinações',
              'Coleta de sangue',
              'Descorna'
            ],
            warranty: '24 meses'
          },
          {
            id: 'tronco-robust-plus',
            name: 'Tronco Robust Plus',
            tagline: 'Linha Premium',
            category: 'Contenção Premium',
            price: 'A partir de R$ 35.000',
            image: '/assets/images/products/troncos/robust-plus-main.png',
            features: [
              'Hidráulico premium',
              'Acabamento superior',
              'Tecnologia avançada',
              'Garantia estendida',
              'Assistência prioritária'
            ],
            specs: {
              sistema: 'Hidráulico Premium',
              garantia: '24 meses'
            }
          },
          {
            id: 'tronco-sertanejo',
            name: 'Tronco Sertanejo',
            tagline: 'Tradição Sertaneja',
            category: 'Contenção',
            price: 'A partir de R$ 15.000',
            image: '/assets/images/products/troncos/sertanejo-main.png',
            features: [
              'Design tradicional sertanejo',
              'Estrutura robusta',
              'Sistema manual confiável',
              'Ideal para médios produtores',
              'Manutenção simplificada'
            ],
            specs: {
              sistema: 'Manual',
              acabamento: 'Tradicional'
            },
            description: 'Tradição e confiabilidade do sertanejo brasileiro.',
            warranty: '24 meses'
          },
          {
            id: 'tronco-megatron',
            name: 'Tronco Megatron',
            tagline: 'Tecnologia Avançada',
            category: 'Contenção Avançada',
            price: 'A partir de R$ 32.000',
            image: '/assets/images/products/troncos/megatron-main.png',
            features: [
              'Tecnologia de ponta',
              'Sistema hidráulico avançado',
              'Laterais almofadadas',
              'Pescoceira dupla',
              'Abertura lateral facilitada',
              'Controle móvel'
            ],
            specs: {
              sistema: 'Hidráulico avançado',
              tecnologia: 'Premium'
            },
            description: 'O futuro da contenção bovina com tecnologia de ponta.',
            warranty: '24 meses'
          },
          {
            id: 'tronco-standard',
            name: 'Tronco Standard',
            tagline: 'Eficiência Comprovada',
            category: 'Contenção',
            price: 'A partir de R$ 12.000',
            image: '/assets/images/products/troncos/sertanejo-main.png',
            features: [
              'Sistema manual confiável',
              'Estrutura robusta',
              'Manutenção simplificada',
              'Custo-benefício',
              'Mobilidade opcional'
            ],
            specs: {
              sistema: 'Manual',
              versoes: 'Fixa/Móvel'
            }
          }
        ]
      },
      {
        id: 'balancas-mecanicas',
        name: 'Balanças Mecânicas',
        description: 'Robustez sem eletrônica',
        products: [
          {
            id: 'brete-me',
            name: 'Balança Mecânica Brete ME',
            category: 'Mecânica Individual',
            price: 'R$ 8.500',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070',
            features: [
              'Sem necessidade de bateria',
              'Durabilidade extrema',
              'Precisão mecânica',
              'Baixa manutenção'
            ],
            specs: {
              capacidade: '1.500 kg',
              divisao: '1kg',
              tamanho: '2,80m'
            }
          },
          {
            id: 'retangular-me',
            name: 'Balança Retangular ME',
            category: 'Mecânica Coletiva',
            price: 'R$ 12.000',
            features: [
              'Pesagem coletiva',
              'Estrutura reforçada',
              'Sem eletrônica',
              'Vida útil superior'
            ],
            specs: {
              capacidade: '10.000 kg',
              divisao: '5kg'
            }
          }
        ]
      },
      {
        id: 'pequenos-animais',
        name: 'Pequenos Animais',
        description: 'Suínos, caprinos e ovinos',
        products: [
          {
            id: 'ics-300',
            name: 'Balança ICS-300',
            category: 'Pequenos Animais',
            price: 'R$ 4.500',
            features: [
              'Suínos e caprinos',
              'Compacta e portátil',
              'Display LED',
              'Bateria recarregável'
            ],
            specs: {
              capacidade: '300 kg',
              divisao: '100g'
            }
          }
        ]
      },
      {
        id: 'equipamentos-especiais',
        name: 'Equipamentos Especializados',
        description: 'Inovação COIMMA',
        products: [
          {
            id: 'imogado',
            name: 'IMOGADO',
            tagline: 'Revolução no Manejo',
            category: 'Imobilizador Eletrônico',
            price: 'A partir de R$ 3.000',
            image: '/assets/images/products/especiais/imogado-main.png',
            features: [
              'Pulsos eletrônicos controlados por microprocessador',
              'Imobilização imediata sem sedação',
              'Sonda introduzida no reto do animal',
              'Completamente portátil',
              'Alarme de segurança automático',
              'Sem efeitos colaterais',
              'Uso veterinariamente validado'
            ],
            specs: {
              tecnologia: 'Pulsos eletrônicos',
              metodo: 'Sonda retal',
              efeito: 'Imobilização imediata',
              portabilidade: 'Completamente portátil',
              seguranca: 'Microprocessador com alarme'
            },
            description: 'A revolução silenciosa. Imobilização sem estresse, eficiência sem precedentes.',
            fullDescription: 'O IMOGADO é um imobilizador eletrônico único no mercado, utilizando pulsos eletrônicos de baixa intensidade transmitidos via sonda retal para bovinos e búfalos. Microprocessador controla a emissão de pulsos que interferem na comunicação nervosa periférica, causando enrijecimento da musculatura e imobilização imediata. Sem necessidade de sedação ou anestesia. Equipamento robusto, durável e muito fácil de operar. Microprocessador inteligente com sistema de alarme de segurança. Nenhum efeito colateral reportado. Ideal para castração, marcação a ferro, tratamentos cirúrgicos externos e procedimentos que requerem total imobilização. Portabilidade total permite uso em qualquer lugar da fazenda.',
            applications: [
              'Castração sem sedação',
              'Marcação a ferro',
              'Tratamentos cirúrgicos externos',
              'Cirurgias simples',
              'Procedimentos veterinários complexos'
            ],
            warranty: '24 meses'
          }
        ]
      }
    ]
  },
  industrial: {
    title: 'A Força da Indústria',
    subtitle: 'Industrial',
    description: 'A mesma robustez que domina o curral, agora move suas operações de fluxo e rodovias.',
    percentage: 30,
    categories: [
      {
        id: 'rodoviarias',
        name: 'Balanças Rodoviárias',
        description: 'Pesagem de 40 a 200 toneladas',
        products: [
          {
            id: 'clu-concreto',
            name: 'CLU Concreto',
            tagline: 'Fundação Eterna',
            category: 'Rodoviária Premium',
            price: 'A partir de R$ 120.000',
            image: '/assets/images/products/industrial/balanca-rodoviaria-main.jpg',
            features: [
              'Laje de concreto sobre estrutura metálica',
              'Durabilidade superior a 30 anos',
              'Capacidade de 40 a 200 toneladas',
              'Células digitais WT27-R incluídas',
              'Aprovada conforme Normas ABNT',
              'Instalação sobre piso, semi-embutida ou embutida',
              'Baixa manutenção',
              'Indicadores analógicos ou digitais'
            ],
            specs: {
              capacidade: '40-200 toneladas',
              plataforma: 'Concreto armado',
              divisao_minima: '10-50 kg',
              dimensoes: '10-60m x 3,20-4,00m',
              instalacao: 'Sobre piso/Semi-embutida/Embutida',
              garantia: '24 meses',
              aprovacao: 'ABNT'
            },
            description: 'Pesamos o PIB brasileiro. Quando a precisão não é negociável.',
            fullDescription: 'A Balança Rodoviária CLU em Concreto representa o padrão ouro em pesagem industrial. Estrutura de laje de concreto sobre base metálica proporciona durabilidade excepcional superior a 30 anos. Capacidades de 40 a 200 toneladas em plataformas de 10 a 60 metros. Células de carga digitais WT27-R com certificação OIML R60 garantem precisão absoluta. Aprovada conforme Normas ABNT com opções de instalação sobre piso com rampa, semi-embutida sem rampa, ou completamente embutida no chão. Custo-benefício excelente com manutenção mínima. Indicadores disponíveis em versões analógicas ou digitais com display gráfico 7". Ideal para operações pesadas que exigem confiabilidade máxima.',
            applications: [
              'Pesagem de caminhões carregados',
              'Controle de carga rodoviária',
              'Armazéns e centros de distribuição',
              'Indústrias de grãos e commodities',
              'Mineração e construção civil',
              'Portos e terminais de carga'
            ],
            warranty: '24 meses'
          },
          {
            id: 'metalica-modular',
            name: 'Metálica Modular',
            tagline: 'Mobilidade Industrial',
            category: 'Rodoviária',
            price: 'A partir de R$ 85.000',
            image: '/assets/images/products/industrial/balanca-rodoviaria-main.jpg',
            features: [
              'Estrutura 100% metálica',
              'Montagem rápida (7 dias)',
              'Relocável',
              'Mesma precisão da CLU',
              'Ideal para expansões'
            ],
            specs: {
              capacidade: '40-200 ton',
              plataforma: 'Aço modular',
              montagem: '7 dias'
            },
            description: 'Força total, mobilidade estratégica.'
          },
          {
            id: 'mcm-hibrida',
            name: 'MCM Híbrida',
            tagline: 'O Melhor de Dois Mundos',
            category: 'Rodoviária Híbrida',
            price: 'A partir de R$ 95.000',
            image: '/assets/images/products/industrial/mcm-hybrid.png',
            features: [
              'Base de concreto',
              'Superestrutura metálica',
              'Durabilidade + Flexibilidade',
              'Instalação otimizada',
              'Custo-benefício superior'
            ],
            specs: {
              capacidade: '40-200 ton',
              tipo: 'Concreto + Metal'
            }
          }
        ]
      },
      {
        id: 'fluxo',
        name: 'Balanças de Fluxo',
        description: 'Automação para grãos e insumos',
        products: [
          {
            id: 'fluxo-160',
            name: 'Balança de Fluxo 160t',
            category: 'Fluxo Automático',
            price: 'A partir de R$ 95.000',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070',
            features: [
              'Pesagem automática por batelada',
              'Capacidade até 160 toneladas',
              'Células de carga de alta precisão',
              'Microprocessador com controle automático',
              'Display em tempo real',
              'Estrutura em aço inox (contato alimentos)',
              'Taxa de fluxo ajustável',
              'Alarmes de sobrecarga e fluxo'
            ],
            specs: {
              capacidade: 'Até 160 toneladas',
              precisao: '±0,5%',
              estrutura: 'Aço inox',
              montagem: 'Sobre estrutura H em silo',
              ciclo: 'Automático',
              display: 'Tempo real contínuo'
            },
            description: 'Não perca um grama de produtividade. Automação que paga a si mesma.',
            fullDescription: 'A Balança de Fluxo 160t automatiza completamente o processo de pesagem por batelada para grãos e insumos. Sistema de células de carga de alta precisão com microprocessador inteligente controla automaticamente as bateladas, liberando material quando atinge o peso programado. Estrutura em aço inox apropriada para contato com alimentos. Display em tempo real mostra pesagem contínua. Alarmes automáticos para sobrecarga e interrupção de fluxo. Taxa de fluxo ajustável conforme produto. Montagem sobre suporte tipo H na estrutura do silo com 4 vigas perfil I. Instalação profissional COIMMA sem soldagem para preservar células de carga. Ideal para armazéns de grãos, silos, unidades de processamento e exportadores de commodities. ROI típico de 18 meses através de redução de desperdícios e aumento de eficiência.',
            applications: [
              'Carregamento de grãos',
              'Silos e armazéns',
              'Unidades de processamento',
              'Exportadores de commodities',
              'Indústria de alimentos',
              'Controle de bateladas automático'
            ],
            warranty: '24 meses'
          },
          {
            id: 'fluxo-300',
            name: 'Balança de Fluxo 300t',
            category: 'Fluxo Industrial',
            price: 'A partir de R$ 180.000',
            features: [
              'Alto volume (161-300 ton)',
              'Sistema completamente automatizado',
              'Rastreabilidade total',
              'Manutenção programada',
              'Suporte 24/7'
            ],
            specs: {
              capacidade: '161-300 ton',
              automacao: 'Total'
            }
          }
        ]
      }
    ]
  },
  services: {
    title: 'Sua Operação Não Pode Parar',
    items: [
      {
        id: 'calibracao',
        name: 'Calibração Certificada',
        icon: 'Scale',
        description: 'Certificação INMETRO com rastreabilidade RBC',
        price: 'A partir de R$ 800',
        features: [
          'Certificado INMETRO',
          'Rastreabilidade garantida',
          'Relatório técnico completo',
          'Aferição de precisão',
          'Conformidade legal'
        ]
      },
      {
        id: 'manutencao',
        name: 'Manutenção Preventiva',
        icon: 'Wrench',
        description: 'Planos anuais com visitas programadas',
        price: 'A partir de R$ 1.200/ano',
        features: [
          '4 visitas técnicas/ano',
          'Troca de componentes incluída',
          'Prioridade no atendimento',
          'Desconto em peças',
          'Relatório de saúde do equipamento'
        ]
      },
      {
        id: 'assistencia',
        name: 'Assistência Técnica',
        icon: 'Headphones',
        description: 'Suporte técnico especializado em todo Brasil',
        price: 'A partir de R$ 350',
        features: [
          'Atendimento em até 48h',
          'Técnicos certificados',
          'Peças originais',
          'Garantia do serviço',
          'Plantão WhatsApp'
        ]
      },
      {
        id: 'treinamento',
        name: 'Treinamento Operacional',
        icon: 'GraduationCap',
        description: 'Capacitação da sua equipe no uso correto',
        price: 'R$ 2.500 (in-company)',
        features: [
          'Treinamento presencial',
          'Material didático',
          'Certificado',
          'Até 10 participantes',
          'Suporte pós-treinamento'
        ]
      }
    ]
  }
};

export default PRODUCTS_CONFIG;
