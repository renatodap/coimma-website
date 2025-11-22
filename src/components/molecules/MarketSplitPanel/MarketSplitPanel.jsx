import React from 'react';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';

const MarketSplitPanel = ({
  percentage,
  title,
  description,
  tag,
  backgroundImage,
  cta,
  variant = 'primary',
  className = '',
}) => {
  const isPrimary = variant === 'primary';
  const widthClass = isPrimary ? 'w-full lg:w-[70%]' : 'w-full lg:w-[30%]';
  const heightClass = isPrimary ? 'h-[60vh] lg:h-screen' : 'h-[40vh] lg:h-screen';
  const percentageColor = isPrimary ? 'text-coimma-red' : 'text-coimma-gold';
  const bgClass = isPrimary ? '' : 'bg-[#111]';

  return (
    <div className={`${widthClass} relative group overflow-hidden ${heightClass} border-r border-gray-900 ${bgClass} ${className}`}>
      <div
        className={`
          absolute inset-0 bg-cover bg-center
          transition-transform duration-1000 group-hover:scale-105
          filter ${isPrimary ? 'grayscale brightness-[0.3] group-hover:brightness-[0.4]' : 'sepia-[0.5] brightness-[0.2] group-hover:brightness-[0.3]'}
        `}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {isPrimary && (
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
      )}

      <div className={`absolute ${isPrimary ? 'bottom-0' : 'top-0'} left-0 p-10 lg:p-${isPrimary ? '20' : '12'} w-full ${!isPrimary && 'h-full flex flex-col justify-between'}`}>
        <div>
          <div className="flex items-end justify-between border-b border-gray-700 pb-6 mb-6">
            <Text as="h3" variant="h1" className={`text-6xl md:text-8xl text-white`}>
              {percentage}
              <span className={`${percentageColor} text-4xl align-top`}>%</span>
            </Text>
            {isPrimary && (
              <Text variant="caption" className="text-gray-400 mb-4">
                {tag}
              </Text>
            )}
          </div>
          {!isPrimary && (
            <Text variant="caption" className="text-coimma-gold mb-2 block">
              {tag}
            </Text>
          )}
          <Text as="h2" variant={isPrimary ? 'h2' : 'h4'} className="text-white mb-4 leading-none">
            {title}
          </Text>
        </div>

        <div>
          <Text variant="body" className={`text-gray-${isPrimary ? '400' : '500'} ${isPrimary ? 'max-w-md' : 'text-sm'} mb-8`}>
            {description}
          </Text>
          {isPrimary ? (
            <button className="flex items-center text-white font-bold uppercase tracking-widest text-xs hover:text-coimma-red transition-colors">
              {cta} <span className="ml-2">→</span>
            </button>
          ) : (
            <Button variant="secondary" fullWidth size="medium">
              {cta}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketSplitPanel;
