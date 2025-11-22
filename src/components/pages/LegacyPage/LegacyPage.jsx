import React from 'react';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';
import Timeline from '../../organisms/Timeline';
import Stats from '../../organisms/Stats';
import Icon from '../../atoms/Icon';

const LegacyPage = ({ config }) => {
  const { hero, origin, timeline, infrastructure, values } = config;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src={hero.backgroundImage}
            alt="COIMMA Legacy"
            className="w-full h-full opacity-30 scale-105"
            grayscale
            overlay
            overlayGradient="from-black via-black/70 to-black"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-[1px] w-12 bg-coimma-gold"></div>
              <Text variant="legacy" className="text-coimma-gold">
                {hero.year}
              </Text>
            </div>

            <Text as="h1" variant="h1" className="mb-8">
              {hero.title} <br />
              <span className="text-coimma-gold gold-glow">
                {hero.subtitle}
              </span>
            </Text>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute inset-0 border border-coimma-gold opacity-20 transform translate-x-4 translate-y-4"></div>
              <Image
                src={origin.images[0].url}
                alt={origin.images[0].caption}
                className="relative shadow-2xl"
                grayscale
                overlay
              />
              <div className="absolute bottom-8 left-8">
                <Text variant="legacy" className="text-coimma-gold">
                  {origin.images[0].caption}
                </Text>
              </div>
            </div>

            <div>
              <Text as="h2" variant="h2" className="text-white mb-8">
                {origin.title}
              </Text>

              <div className="space-y-6">
                {origin.content.map((paragraph, index) => (
                  <Text key={index} variant="bodyLarge" className="text-gray-400">
                    {paragraph}
                  </Text>
                ))}
              </div>

              <div className="mt-10 flex items-center space-x-6">
                <div className="h-px w-20 bg-coimma-gold"></div>
                <Text variant="industrial" className="text-xl text-white">
                  Família COIMMA
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline title="Nossa Jornada" items={timeline} />

      {/* Infrastructure */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <Text as="h2" variant="h2" className="text-white mb-6">
                {infrastructure.title}
              </Text>
              <Text variant="bodyLarge" className="text-gray-400 mb-12">
                {infrastructure.description}
              </Text>

              <div className="grid grid-cols-2 gap-8 mb-12">
                {infrastructure.stats.map((stat, index) => (
                  <div key={index}>
                    <Text variant="h2" className="text-coimma-gold mb-2">
                      {stat.value}
                    </Text>
                    <Text variant="small" className="text-gray-400 uppercase tracking-widest">
                      {stat.label}
                    </Text>
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {infrastructure.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon name="Check" size={20} className="text-coimma-gold mt-1 flex-shrink-0" />
                    <Text variant="body" className="text-gray-300">
                      {feature}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Image
                src={infrastructure.image}
                alt="Infraestrutura COIMMA"
                className="shadow-2xl"
                overlay
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <Text as="h2" variant="h2" className="text-white mb-16 text-center">
            {values.title}
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.items.map((value, index) => (
              <div key={index} className="bg-[#0a0a0a] border border-gray-900 p-8 hover:border-coimma-gold transition-all duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-coimma-gold/10 flex items-center justify-center">
                    <Icon name={value.icon} size={32} className="text-coimma-gold" />
                  </div>
                </div>
                <Text as="h3" variant="h5" className="text-white mb-4">
                  {value.title}
                </Text>
                <Text variant="body" className="text-gray-400">
                  {value.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LegacyPage;
