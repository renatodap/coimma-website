import React from 'react';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';

const HistoryPage = () => {
  const awards = [
    {
      year: '2023',
      title: 'Top of Mind',
      organization: 'Revista Rural',
      category: 'Fabricante de Balança para Pecuária'
    },
    {
      year: '2022',
      title: 'Touro de Ouro',
      organization: 'Revista AG',
      category: 'Melhor Balança Pecuária'
    },
    {
      year: '2021',
      title: 'Prêmio de Confiança do Consumidor',
      organization: 'Revista Seleções',
      category: 'Equipamentos Agropecuários'
    },
    {
      year: '2020',
      title: 'Top do Agronegócio',
      organization: 'IEPQ',
      category: 'Indústria de Balançaș'
    },
    {
      year: '2019',
      title: 'Master de Ciência e Tecnologia',
      organization: 'Editora Referência',
      category: 'Inovação Tecnológica'
    },
    {
      year: '2018',
      title: 'Exporta São Paulo',
      organization: 'Governo do Estado SP',
      category: 'Exportação Internacional'
    }
  ];

  const timeline = [
    {
      year: '1951',
      title: 'O Início',
      description: 'Em Dracena, interior de São Paulo, a família COIMMA inicia suas atividades consertando carroças. O aço, o ferro e a precisão já estavam no DNA.',
      icon: 'Wrench'
    },
    {
      year: '1960-1970',
      title: 'Primeiras Balanças',
      description: 'Evolução natural: das carroças para as primeiras balanças mecânicas. O campo brasileiro começa a confiar na precisão COIMMA.',
      icon: 'Scale'
    },
    {
      year: '1980-1990',
      title: 'Expansão Nacional',
      description: 'COIMMA se torna referência nacional em balanças para pecuária. A marca se consolida como sinônimo de qualidade e durabilidade.',
      icon: 'TrendingUp'
    },
    {
      year: '2000-2010',
      title: 'Inovação Tecnológica',
      description: 'Desenvolvimento de balanças eletrônicas com microprocessadores. Lançamento do KM3-Plus e integração com tecnologias digitais.',
      icon: 'Cpu'
    },
    {
      year: '2011-2020',
      title: 'Liderança Latino-Americana',
      description: 'COIMMA se torna a maior fabricante de balanças e troncos da América Latina. Exportação para 23+ países. Certificação ISO 9001.',
      icon: 'Award'
    },
    {
      year: '2021-2025',
      title: 'Automação Industrial',
      description: 'Expansão para balanças rodoviárias e de fluxo. Automação 4.0. Integração IoT e IA. COIMMA pesa o PIB brasileiro.',
      icon: 'Zap'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-20 text-center border-b border-gray-900 pb-12">
          <Text variant="caption" className="text-coimma-red mb-4 block uppercase tracking-widest">
            Desde 1951
          </Text>
          <Text as="h1" variant="h1" className="text-white mb-6 text-5xl md:text-6xl">
            Nossa História
          </Text>
          <Text variant="bodyLarge" className="text-gray-300 max-w-3xl mx-auto">
            Das primeiras carroças em Dracena ao PIB do Brasil. 74 anos construindo o legado de quem alimenta o mundo.
          </Text>
        </div>

        {/* Timeline */}
        <section className="mb-32">
          <div className="mb-12">
            <Text variant="h3" className="text-coimma-gold mb-4">
              Linha do Tempo
            </Text>
            <Text variant="body" className="text-gray-400">
              Cada década, uma conquista. Cada conquista, um compromisso renovado.
            </Text>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-coimma-red transform md:-translate-x-1/2"></div>

            {timeline.map((milestone, index) => (
              <div key={index} className={`relative mb-16 md:mb-20 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                <div className={`flex items-start gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-coimma-red rounded-full flex items-center justify-center relative z-10">
                    <Icon name={milestone.icon} size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 bg-[#0a0a0a] border border-gray-900 p-6 md:p-8 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Text variant="h5" className="text-coimma-gold mb-2">
                      {milestone.year}
                    </Text>
                    <Text variant="h4" className="text-white mb-4">
                      {milestone.title}
                    </Text>
                    <Text variant="body" className="text-gray-300">
                      {milestone.description}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <Text variant="h3" className="text-coimma-gold mb-4">
              Prêmios e Reconhecimentos
            </Text>
            <Text variant="body" className="text-gray-400 max-w-2xl mx-auto">
              Mais de 20 prêmios nacionais e internacionais. O reconhecimento do mercado que move o Brasil.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-[#0a0a0a] border border-gray-900 p-6 hover:border-coimma-gold transition-all group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-coimma-gold/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-coimma-gold" />
                  </div>
                  <div className="flex-1">
                    <Text variant="caption" className="text-coimma-red block mb-1">
                      {award.year}
                    </Text>
                    <Text variant="h6" className="text-white mb-2 group-hover:text-coimma-gold transition-colors">
                      {award.title}
                    </Text>
                    <Text variant="small" className="text-gray-400 block mb-1">
                      {award.organization}
                    </Text>
                    <Text variant="caption" className="text-gray-500">
                      {award.category}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-[#0a0a0a] border-2 border-coimma-red p-12 md:p-16 text-center">
          <Icon name="Target" size={48} className="text-coimma-gold mx-auto mb-6" />
          <Text variant="h4" className="text-white mb-6">
            Nossa Missão
          </Text>
          <Text variant="bodyLarge" className="text-gray-300 max-w-3xl mx-auto italic mb-8">
            "Contribuir para a evolução da pecuária, estimulando as boas práticas na atividade, oferecendo soluções inovadoras que gerem valor e garantam eficiência, segurança e bem-estar animal."
          </Text>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-coimma-red"></div>
            <Text variant="caption" className="text-coimma-gold uppercase tracking-widest">
              Família COIMMA
            </Text>
            <div className="h-px w-12 bg-coimma-red"></div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 border border-gray-900">
            <Text as="div" variant="h2" className="text-coimma-red mb-2">74</Text>
            <Text variant="small" className="text-gray-400">Anos de Experiência</Text>
          </div>
          <div className="text-center p-6 border border-gray-900">
            <Text as="div" variant="h2" className="text-coimma-gold mb-2">23+</Text>
            <Text variant="small" className="text-gray-400">Países Atendidos</Text>
          </div>
          <div className="text-center p-6 border border-gray-900">
            <Text as="div" variant="h2" className="text-white mb-2">#1</Text>
            <Text variant="small" className="text-gray-400">América Latina</Text>
          </div>
          <div className="text-center p-6 border border-gray-900">
            <Text as="div" variant="h2" className="text-coimma-red mb-2">3</Text>
            <Text variant="small" className="text-gray-400">Unidades no Brasil</Text>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HistoryPage;
