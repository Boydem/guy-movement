'use client'

import { debounce } from '@/lib/utils';
import { FC, useRef, useState, useLayoutEffect, useCallback, useMemo, Children } from 'react';

interface MarqueeSliderProps {
  // direction?: 'left' | 'right';
  autoFill?: boolean;
  children: React.ReactNode;
  speed?: number;
  itemsGap?: string;
}

interface CSSPropertiesWithCustomProps extends React.CSSProperties {
  '--duration'?: string;
}

const MarqueeSlider: FC<MarqueeSliderProps> = ({
  autoFill = true,
  children,
  speed = 50,
  itemsGap = '1.5rem'
}) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const calculateWidth = useCallback(() => {
    if (marqueeRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const marqueeRect = marqueeRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const marqueeWidth = marqueeRect.width;

      if (autoFill && containerWidth && marqueeWidth) {
        setMultiplier(marqueeWidth < containerWidth ? Math.ceil(containerWidth / marqueeWidth) : 1);
      } else {
        setMultiplier(1);
      }

      setContainerWidth(containerWidth);
      setMarqueeWidth(marqueeWidth);
    }
  }, [autoFill]);

  useLayoutEffect(() => {
    calculateWidth();

    const handleResize = () => {
      calculateWidth();
    };
    const debouncedResizeHandler = debounce(handleResize);
    window.addEventListener('resize', debouncedResizeHandler);
    return () => window.removeEventListener('resize', debouncedResizeHandler);
  }, [calculateWidth]);

  const duration = useMemo(() => {
    if (autoFill) {
      return (marqueeWidth * multiplier) / speed;
    } else {
      return marqueeWidth < containerWidth ? containerWidth / speed : marqueeWidth / speed;
    }
  }, [autoFill, containerWidth, marqueeWidth, multiplier, speed]);

  const marqueeStyle = useMemo<CSSPropertiesWithCustomProps>(() => ({
    '--duration': duration + 's',
    '--gap' : itemsGap,
    gap: itemsGap,
  }),[duration,itemsGap]);

  const childrenArray = useMemo(() => Array(multiplier).fill(children), [children , multiplier]);
  return (
    <div ref={containerRef} className="relative w-full flex select-none overflow-hidden">
      <div style={marqueeStyle} className="animate-marquee will-change-transform flex-shrink-0 flex items-center whitespace-nowrap">
        {childrenArray.map((_, index) => (
            index === 0 ? 
            <div key={index} ref={marqueeRef}>{children}</div>
            : 
          <div key={index}>{children}</div>
        ))}
      </div>
        <div style={marqueeStyle} className="absolute top-0 animate-marquee2 will-change-transform flex-shrink-0 flex items-center whitespace-nowrap" aria-hidden={true}>
            {childrenArray.map((_, index) => (
                <div key={index}>{children}</div>
            ))}
        </div>

    </div>
  );
};

export default MarqueeSlider;
