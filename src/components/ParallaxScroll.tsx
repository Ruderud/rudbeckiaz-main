'use client';

import { use, useEffect, useMemo, useRef, useState } from 'react';
import { GridBox } from './GridBox';

export const ParallaxScroll = () => {
  const scrollLayerRef = useRef<HTMLDivElement>(null);
  const [depth, setDepth] = useState<number>(0);
  const maxDepth = useMemo(() => {
    return scrollLayerRef?.current?.getBoundingClientRect().height || window.innerHeight;
  }, []);

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement?.style.setProperty('overflow', 'hidden');
  }, []);

  return (
    <div className="max-h-[94vh]">
      <div
        ref={scrollLayerRef}
        id="scroll-layer"
        style={{
          position: 'relative',
          height: '94vh',
          overflow: 'scroll',
        }}
        onScroll={(e) => {
          setDepth(e.currentTarget.scrollTop);
        }}
      >
        <div className="h-[200vh] bg-blue-100 opacity-20 overflow-hidden" />
      </div>
      <div
        id="view-layer"
        style={{
          position: 'relative',
          top: '-94vh',
          zIndex: -10,
          width: '100vw',
          height: '94vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          perspective: `${maxDepth}px`,
        }}
      >
        <GridBox depth={depth} />
      </div>
    </div>
  );
};
