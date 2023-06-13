'use client';

import Link from 'next/link';
import { GridBox } from './GridBox';

interface AxisViewProps {
  maxDepth: number;
  depth: number;
}

export const AxisView = ({ maxDepth, depth }: AxisViewProps) => {
  return (
    <div
      id="view-layer"
      className="relative top-[-94vh] w-screen h-[94vh] z-[-10] flex justify-center items-center"
      style={{
        perspective: `${maxDepth}px`,
        transformStyle: 'preserve-3d',
      }}
    >
      <GridBox
        canvasProps={{
          style: {
            position: 'absolute',
            transform: `translate3d(0,0,${depth + 2000}px)`,
          },
        }}
      />
      <GridBox
        canvasProps={{
          width: 1500,
          style: {
            position: 'absolute',
            transform: `translate3d(150px,100px,${depth + 4000}px) rotatez(25deg) rotateY(70deg)`,
          },
        }}
      />
      <GridBox
        canvasProps={{
          style: {
            position: 'absolute',
            transform: `translate3d(100px,-100px,${depth + 6000}px)`,
          },
        }}
      />
      <GridBox
        canvasProps={{
          style: {
            position: 'absolute',
            transform: `translate3d(-100px,-100px,${depth + 7000}px)`,
          },
        }}
      />
      <Link
        href="/about"
        style={{
          position: 'absolute',
          transform: `translate3d(0,0,${depth + 100}px)`,
        }}
      >
        About
      </Link>
    </div>
  );
};
