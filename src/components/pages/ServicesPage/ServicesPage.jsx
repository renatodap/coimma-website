import React from 'react';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';
import ServicesGrid from '../../organisms/ServicesGrid';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

const ServicesPage = ({ config, services }) => {
  const { hero, commitment, certification, support } = config;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src={hero.backgroundImage}
            alt="Suporte COIMMA"
            className="w-full h-full opacity-30"
            grayscale
            overlay
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <Text as="h1" variant="h1" className="mb-6">
              {hero.title}
            </Text>
            <Text variant="bodyLarge" className="text-gray-300 mb-8">
              {hero.description}
            </Text>
            <Button variant="primary" icon="Phone" size="large">
              Falar com Suporte
            </Button>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Text as="h2" variant="h2" className="text-white mb-8">
              {commitment.title}
            </Text>
            <Text variant="bodyLarge" className="text-gray-400 mb-16">
              {commitment.content}
            </Text>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {commitment.stats.map((stat, index) => (
                <div key={index}>
                  <Text variant="h2" className="text-coimma-red mb-2">
                    {stat.value}
                  </Text>
                  <Text variant="small" className="text-gray-400 uppercase tracking-widest">
                    {stat.label}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid title="Nossos Serviços" services={services} />

      {/* Certifications */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <Text as="h2" variant="h2" className="text-white mb-16 text-center">
            {certification.title}
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certification.items.map((item, index) => (
              <div key={index} className="bg-[#0a0a0a] border border-gray-900 p-8 text-center hover:border-coimma-gold transition-all">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-coimma-gold/10 flex items-center justify-center">
                    <Icon name={item.icon} size={40} className="text-coimma-gold" />
                  </div>
                </div>
                <Text as="h3" variant="h5" className="text-white mb-4">
                  {item.title}
                </Text>
                <Text variant="body" className="text-gray-400">
                  {item.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <Text as="h2" variant="h2" className="text-white mb-16 text-center">
            {support.title}
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {support.channels.map((channel, index) => (
              <div key={index} className="bg-black border border-gray-900 p-8 hover:border-coimma-red transition-all group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-coimma-red/10 group-hover:bg-coimma-red/20 transition-colors flex items-center justify-center">
                    <Icon name={channel.icon} size={32} className="text-coimma-red" />
                  </div>
                </div>
                <Text variant="caption" className="text-coimma-red mb-2 block">
                  {channel.title}
                </Text>
                <Text as="h3" variant="h4" className="text-white mb-3">
                  {channel.value}
                </Text>
                <Text variant="small" className="text-gray-400">
                  {channel.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-coimma-red">
        <div className="container mx-auto px-6 text-center">
          <Text as="h2" variant="h2" className="text-white mb-8">
            Precisa de Atendimento Imediato?
          </Text>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="outline" size="large" icon="Phone">
              Ligar Agora: 0800 11 2555
            </Button>
            <Button variant="outline" size="large" icon="MessageSquare">
              WhatsApp Plantão
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
