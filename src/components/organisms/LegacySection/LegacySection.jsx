import React from 'react';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import { useFadeIn } from '../../../hooks/useFadeIn';

const LegacySection = ({ config }) => {
  const { image, title, subtitle, paragraphs, signature } = config;
  const [imageRef, imageVisible] = useFadeIn();
  const [contentRef, contentVisible] = useFadeIn();

  return (
    <section className="py-32 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div
            ref={imageRef}
            className={`relative group scroll-fade-in ${imageVisible ? 'visible' : ''}`}
          >
            <div className="absolute inset-0 border border-coimma-gold opacity-20 transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 ease-out">
              <Image
                src={image.url}
                alt={image.caption}
                className="w-full h-auto shadow-2xl opacity-80"
                overlay
                overlayGradient="from-black via-transparent to-transparent"
              />
              <div className="absolute bottom-8 left-8">
                <Text variant="legacy" className="text-coimma-gold">
                  {image.caption}
                </Text>
              </div>
            </div>
          </div>

          <div
            ref={contentRef}
            className={`scroll-fade-in ${contentVisible ? 'visible' : ''}`}
          >
            <Text as="h2" variant="h2" className="text-white mb-8">
              {title} <br />
              <span className="text-gray-600 italic">{subtitle}</span>
            </Text>

            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <Text key={index} variant="bodyLarge" className="text-gray-400">
                  {paragraph}
                </Text>
              ))}
            </div>

            <div className="mt-10 flex items-center space-x-6">
              <div className="h-px w-20 bg-coimma-gold"></div>
              <Text variant="industrial" className="text-xl text-white">
                {signature}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
