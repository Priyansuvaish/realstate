'use client';

import React, { useEffect, useRef, useState } from 'react';

const DriveImage = () => {
  const imageUrl = 'https://landresources.s3.ap-southeast-2.amazonaws.com/vaishnavi.jpg';
  const watermarkLabel = 'VAISHNAVI AT-ONE | KRISHNA BRINDAVAN';
  const watermarkSvg = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="rgba(255,255,255,0.35)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.15)"/>
        </linearGradient>
      </defs>
      <rect width="360" height="240" fill="none"/>
      <g transform="rotate(-30 180 120)">
        <text x="0" y="160" fill="url(#g)" font-size="28" font-family="sans-serif" letter-spacing="2">${watermarkLabel}</text>
      </g>
    </svg>`
  );
  const watermarkUrl = `url("data:image/svg+xml,${watermarkSvg}")`;

  // Zoom and pan state
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 }); // px translation
  const [baseSize, setBaseSize] = useState({ w: 0, h: 0 }); // displayed img size at scale=1
  const [dragging, setDragging] = useState(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    lastPointRef.current = { x: e.clientX, y: e.clientY };
  };

  const getBounds = () => {
    const container = containerRef.current;
    if (!container) return { maxX: 0, maxY: 0 };
    const containerRect = container.getBoundingClientRect();
    const scaledW = baseSize.w * scale;
    const scaledH = baseSize.h * scale;
    const maxX = Math.max(0, (scaledW - containerRect.width) / 2);
    const maxY = Math.max(0, (scaledH - containerRect.height) / 2);
    return { maxX, maxY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const last = lastPointRef.current;
    if (!last) return;
    const dx = e.clientX - last.x;
    const dy = e.clientY - last.y;
    lastPointRef.current = { x: e.clientX, y: e.clientY };
    const { maxX, maxY } = getBounds();
    setTranslate((t) => ({
      x: clamp(t.x + dx, -maxX, maxX),
      y: clamp(t.y + dy, -maxY, maxY)
    }));
  };

  const endDrag = () => {
    setDragging(false);
    lastPointRef.current = null;
  };

  const afterZoomClamp = (nextScale: number) => {
    const { maxX, maxY } = getBounds();
    setTranslate((t) => ({ x: clamp(t.x, -maxX, maxX), y: clamp(t.y, -maxY, maxY) }));
  };

  const zoomIn = () => setScale((s) => {
    const ns = clamp(parseFloat((s + 0.25).toFixed(2)), 1, 4);
    setTimeout(() => afterZoomClamp(ns), 0);
    return ns;
  });
  const zoomOut = () => setScale((s) => {
    const ns = clamp(parseFloat((s - 0.25).toFixed(2)), 1, 4);
    setTimeout(() => afterZoomClamp(ns), 0);
    return ns;
  });
  const resetView = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  };

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const img = imageRef.current;
      if (!container || !img) return;
      // Image uses object-contain at scale 1; take current client size
      setBaseSize({ w: img.clientWidth, h: img.clientHeight });
      afterZoomClamp(scale);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [scale]);

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] select-none overflow-hidden"
            onContextMenu={(e) => e.preventDefault()}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onTouchStart={(e) => {
              if (e.touches[0]) {
                setDragging(true);
                lastPointRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
              }
            }}
            onTouchMove={(e) => {
              if (!dragging || !e.touches[0]) return;
              const last = lastPointRef.current;
              if (!last) return;
              const dx = e.touches[0].clientX - last.x;
              const dy = e.touches[0].clientY - last.y;
              lastPointRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
              const { maxX, maxY } = getBounds();
              setTranslate((t) => ({
                x: clamp(t.x + dx, -maxX, maxX),
                y: clamp(t.y + dy, -maxY, maxY)
              }));
            }}
            onTouchEnd={endDrag}
          >
            {/* Image element ensures no cropping at 100% (object-contain) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                ref={imageRef}
                src={imageUrl}
                alt="Promotional"
                className="max-w-full max-h-full object-contain select-none"
                draggable={false}
                style={{
                  transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
                  transition: dragging ? 'none' : 'transform 120ms ease-out',
                  transformOrigin: 'center center'
                }}
                onLoad={() => {
                  const img = imageRef.current;
                  if (!img) return;
                  setBaseSize({ w: img.clientWidth, h: img.clientHeight });
                }}
              />
            </div>
            {/* Zoom controls */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
              <button
                type="button"
                onClick={zoomOut}
                disabled={scale <= 1}
                className="bg-gray-900/70 text-white text-xs md:text-sm px-2 py-1 rounded disabled:opacity-40"
                aria-label="Zoom out"
                title="Zoom out"
              >
                −
              </button>
              <span className="px-2 py-1 text-xs bg-gray-900/50 text-white rounded">{Math.round(scale * 100)}%</span>
              <button
                type="button"
                onClick={zoomIn}
                className="bg-gray-900/70 text-white text-xs md:text-sm px-2 py-1 rounded"
                aria-label="Zoom in"
                title="Zoom in"
              >
                +
              </button>
              <button
                type="button"
                onClick={resetView}
                className="bg-gray-900/70 text-white text-xs md:text-sm px-2 py-1 rounded"
                aria-label="Reset"
                title="Reset view"
              >
                Reset
              </button>
            </div>
            {/* Watermark overlay to discourage screenshots */}
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                backgroundImage: `${watermarkUrl}`,
                backgroundRepeat: 'repeat',
                backgroundSize: '360px 240px',
                mixBlendMode: 'multiply'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriveImage;


