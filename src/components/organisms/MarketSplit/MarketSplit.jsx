import React from 'react';
import MarketSplitPanel from '../../molecules/MarketSplitPanel';

const MarketSplit = ({ pecuaria, industrial }) => {
  return (
    <section className="py-0 min-h-screen bg-black flex flex-col lg:flex-row">
      <MarketSplitPanel
        variant="primary"
        percentage={pecuaria.percentage}
        title={pecuaria.title}
        description={pecuaria.description}
        tag={pecuaria.tag}
        backgroundImage={pecuaria.backgroundImage}
        cta={pecuaria.cta}
      />

      <MarketSplitPanel
        variant="secondary"
        percentage={industrial.percentage}
        title={industrial.title}
        description={industrial.description}
        tag={industrial.tag}
        backgroundImage={industrial.backgroundImage}
        cta={industrial.cta}
      />
    </section>
  );
};

export default MarketSplit;
