'use client';

import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from 'react';

interface AxisScrollProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setMaxDepth: (maxDepth: number) => void;
}

export const AxisScroll = (props: AxisScrollProps) => {
  const { setMaxDepth, ...divProps } = props;
  const scrollLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollLayerRef.current) return;
    setMaxDepth(scrollLayerRef.current.getBoundingClientRect().height * (scrollLayerRef.current.children.length - 1));
  }, [setMaxDepth]);

  return (
    <div
      ref={scrollLayerRef}
      id="scroll-layer"
      className="relative h-[94vh] overflow-scroll snap-y snap-mandatory" //scrollbar-hide
      {...divProps}
    >
      <div className="h-[94vh] bg-blue-100 opacity-20 overflow-hidden snap-start snap-always" />
      <div className="h-[94vh] bg-blue-200 opacity-20 overflow-hidden snap-start snap-always" />
      <div className="h-[94vh] bg-blue-300 opacity-20 overflow-hidden snap-start snap-always" />
      <div className="h-[94vh] bg-blue-400 opacity-20 overflow-hidden snap-start snap-always" />
      <div className="h-[94vh] bg-blue-500 opacity-20 overflow-hidden snap-start snap-always" />
      <div className="h-[94vh] bg-blue-600 opacity-20 overflow-hidden snap-start snap-always" />
      <div className="h-[94vh] bg-blue-700 opacity-20 overflow-hidden snap-start snap-always" />
      <div className="h-[94vh] bg-blue-800 opacity-20 overflow-hidden snap-start snap-always" />
    </div>
  );
};
