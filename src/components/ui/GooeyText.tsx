import { useEffect, useState, useRef } from 'react';
import { cn } from '../../lib/utils';

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export default function GooeyText({
  texts,
  morphTime = 1.5,
  cooldownTime = 0.5,
  className,
  textClassName,
}: GooeyTextProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [morphProgress, setMorphProgress] = useState(0);
  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>();

  useEffect(() => {
    let currentTextIndex = 0;
    let nextTextIndex = 1;
    let morphing = false;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;

      if (!morphing) {
        if (elapsed >= cooldownTime * 1000) {
          morphing = true;
          startTimeRef.current = timestamp;
        }
      } else {
        const progress = Math.min(elapsed / (morphTime * 1000), 1);
        setMorphProgress(progress);

        if (progress >= 1) {
          morphing = false;
          currentTextIndex = nextTextIndex;
          nextTextIndex = (nextTextIndex + 1) % texts.length;
          setTextIndex(currentTextIndex);
          setMorphProgress(0);
          startTimeRef.current = timestamp;
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [texts, morphTime, cooldownTime]);

  const currentText = texts[textIndex];
  const nextText = texts[(textIndex + 1) % texts.length];

  const getMorphedText = () => {
    const maxLength = Math.max(currentText.length, nextText.length);
    let result = '';

    for (let i = 0; i < maxLength; i++) {
      const currentChar = currentText[i] || ' ';
      const nextChar = nextText[i] || ' ';

      if (morphProgress < 0.5) {
        result += currentChar;
      } else {
        result += nextChar;
      }
    }

    return result;
  };

  const blurAmount = Math.sin(morphProgress * Math.PI) * 8;

  return (
    <div className={cn('relative', className)}>
      <svg className="absolute" style={{ width: 0, height: 0 }}>
        <defs>
          <filter id="gooey-text-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation={blurAmount} result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div
        className={cn(
          'text-6xl md:text-[60px] font-bold font-mono tracking-wider',
          textClassName
        )}
        style={{
          filter: morphProgress > 0 ? 'url(#gooey-text-filter)' : 'none',
          transition: 'filter 0.1s ease-out',
        }}
      >
        {getMorphedText()}
      </div>
    </div>
  );
}
