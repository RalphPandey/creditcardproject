import React from 'react';
import { cn } from '../../lib/utils';

interface StarBorderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  speed?: string;
  as?: React.ElementType;
}

export default function StarBorder({
  children,
  speed = '6s',
  className,
  as: Component = 'button',
  ...props
}: StarBorderProps) {
  return (
    <Component
      className={cn(
        'relative overflow-hidden rounded-[20px] p-[2px] transition-all duration-200 hover:scale-[1.02] hover:brightness-110',
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(90deg, transparent, transparent)',
        }}
      >
        <div
          className="absolute inset-[-100%] animate-spin-slow"
          style={{
            background: `conic-gradient(
              from 0deg,
              transparent 0deg,
              rgba(247, 179, 43, 0.7) 60deg,
              transparent 120deg
            )`,
            animationDuration: speed,
          }}
        />
        <div
          className="absolute inset-[-100%] animate-spin-slow-reverse"
          style={{
            background: `conic-gradient(
              from 180deg,
              transparent 0deg,
              rgba(247, 179, 43, 0.7) 60deg,
              transparent 120deg
            )`,
            animationDuration: speed,
          }}
        />
      </div>
      <div
        className={cn(
          'relative z-10 rounded-[18px] bg-gradient-to-b from-surface/90 to-background/90 px-6 py-4',
          'backdrop-blur-sm transition-all duration-200',
          'text-gold font-semibold text-base leading-tight'
        )}
      >
        {children}
      </div>
    </Component>
  );
}
