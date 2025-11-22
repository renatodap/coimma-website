import React from 'react';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';

const Hero = ({ config }) => {
  const { preTitle, title, description, backgroundImage, buttons, scrollIndicator } = config;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 grayscale brightness-50 scale-105 animate-pulse-slow"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-8 animate-fade-in-down">
            <div className={`h-[1px] w-12 ${preTitle.lineColor}`}></div>
            <Text variant="legacy" className="text-coimma-gold">
              {preTitle.text}
            </Text>
          </div>

          <Text as="h1" variant="h1" className="mb-8 mix-blend-lighten">
            {title.line1} <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${title.highlightColor} text-glow`}>
              {title.line2}
            </span>
          </Text>

          <Text
            variant="bodyLarge"
            className="text-gray-400 max-w-xl mb-12 border-l-2 border-gray-800 pl-6"
          >
            {description}
          </Text>

          <div className="flex flex-col md:flex-row gap-6">
            {buttons.map((btn, index) => (
              <Button
                key={index}
                variant={btn.variant}
                icon={btn.icon}
              >
                {btn.text}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-50 animate-bounce">
        <Text variant="caption" className="mb-2">
          {scrollIndicator.text}
        </Text>
        <Icon name="ChevronDown" size={16} />
      </div>
    </section>
  );
};

export default Hero;
