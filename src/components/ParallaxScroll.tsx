'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { GridBox } from './GridBox';
import Link from 'next/link';
import { cp } from 'fs';

export const ParallaxScroll = () => {
  const scrollLayerRef = useRef<HTMLDivElement>(null);
  const [depth, setDepth] = useState<number>(0);
  const [maxDepth, setMaxDepth] = useState<number>(0);

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

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prevX, setPrevX] = useState<number>(0);
  const [prevY, setPrevY] = useState<number>(50);

  const clearDot = useCallback(
    (context: CanvasRenderingContext2D) => {
      context.clearRect(prevX - 6, prevY - 6, 12, 12);
    },
    [prevX, prevY]
  );

  function drawDot(context: CanvasRenderingContext2D, x: number, y: number) {
    context.beginPath();
    context.arc(x, y, 5, 0, 2 * Math.PI);
    context.fillStyle = 'black';
    context.fill();
  }
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const currentDepth = (depth / maxDepth) * 400;

    clearDot(context);

    //선 세팅
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    const { width, height } = canvas;

    //중앙 선 그리기
    context.beginPath();
    context.moveTo(50, height / 2);
    context.lineTo(width - 50, height / 2);
    context.stroke();

    //양 끝선 그리기
    context.beginPath();
    context.moveTo(50, 10);
    context.lineTo(50, height - 10);
    context.stroke();

    context.beginPath();
    context.moveTo(width - 50, 10);
    context.lineTo(width - 50, height - 10);
    context.stroke();

    //점 찍기
    drawDot(context, currentDepth + 50, canvas.height / 2);
    setPrevX(currentDepth + 50);
    setPrevY(canvas.height / 2);
  }, [maxDepth, depth, clearDot]);

  return (
    <>
      <div id="debug-navi" className="relative z-2 bg-white text-black p-2">
        <div className="flex gap-4 p-2">
          <div>perspective: {maxDepth}px</div>
          <div>current Depth: {depth}px</div>
        </div>
        <div className="flex justify-center align-center">
          <canvas className="border-2 border-black" ref={canvasRef} width={500} height={50} />
        </div>
      </div>
      <div
        ref={scrollLayerRef}
        id="scroll-layer"
        className="relative h-[94vh] overflow-scroll snap-y snap-mandatory" //scrollbar-hide
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
        <div className="h-[23.5vh] bg-blue-100 opacity-20 overflow-hidden snap-start snap-always" />
        <div className="h-[23.5vh] bg-blue-100 opacity-20 overflow-hidden snap-start snap-always" />
        <div className="h-[23.5vh] bg-blue-100 opacity-20 overflow-hidden snap-start snap-always" />
        <div className="h-[23.5vh] bg-blue-100 opacity-20 overflow-hidden snap-start snap-always" />
        <div className="h-[23.5vh] bg-blue-100 opacity-20 overflow-hidden snap-start snap-always" />
        <div className="h-[23.5vh] bg-blue-100 opacity-20 overflow-hidden snap-start snap-always" />
        <div className="h-[23.5vh] bg-blue-100 opacity-20 overflow-hidden snap-start snap-always" />
        <div className="h-[23.5vh] bg-blue-100 opacity-20 overflow-hidden snap-start snap-always" />
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
