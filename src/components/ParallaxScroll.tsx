'use client';

import { useEffect, useRef, useState } from 'react';
import { GridBox } from './GridBox';
import Link from 'next/link';

export const ParallaxScroll = () => {
  const scrollLayerRef = useRef<HTMLDivElement>(null);
  const [depth, setDepth] = useState<number>(0);
  const [maxDepth, setMaxDepth] = useState<number>(0);

  const buttonClick = () => {
    console.log('click');
  };

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement?.style.setProperty('overflow', 'hidden');
  }, []);

  useEffect(() => {
    document.querySelector('#cover')?.addEventListener('scroll', (e) => {
      e.stopPropagation();
    });

    if (!scrollLayerRef.current) return;
    setMaxDepth(scrollLayerRef.current.getBoundingClientRect().height);
  }, []);

  return (
    <>
      <div
        ref={scrollLayerRef}
        id="scroll-layer"
        className="relative h-[94vh] overflow-scroll scrollbar-hide"
        onScroll={(e) => {
          setDepth(e.currentTarget.scrollTop);
        }}
        onClick={(event) => {
          const { pageX: x, pageY: y } = event;
          const elements = document.elementsFromPoint(x, y);

          // id가 "view-layer"인 버튼 요소들을 필터링하여 buttonsInViewLayer에 추가
          elements.forEach(function (element) {
            if (element.tagName === 'A') {
              const button = element as HTMLAnchorElement;
              button.click();
            }
          });
        }}
      >
        <div className="h-[200vh] bg-blue-100 opacity-20 overflow-hidden" />
      </div>
      <div
        id="view-layer"
        className="relative top-[-94vh] w-screen h-[94vh] z-[-10] flex justify-center items-center"
        style={{
          perspective: `${maxDepth}px`,
        }}
      >
        <GridBox depth={depth} />
        <Link
          href="/about"
          style={{
            transform: `translateZ(${depth || 0}px)`,
          }}
        >
          About
        </Link>
      </div>
    </>
  );
};
