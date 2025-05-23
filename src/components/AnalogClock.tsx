
"use client";

import type { FC } from 'react';
import { useState, useEffect } from 'react';

interface AnalogClockProps {
  timeZone: string;
  size?: number;
  idSuffix?: string; // To ensure unique IDs for SVG elements if multiple clocks are on one page
}

export const AnalogClock: FC<AnalogClockProps> = ({ timeZone, size = 120, idSuffix = "" }) => {
  const [currentTime, setCurrentTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateClockTime = () => {
      const now = new Date();
      try {
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: timeZone,
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: false,
        });
        const parts = formatter.formatToParts(now);
        const hours = parseInt(parts.find(p => p.type === 'hour')?.value || '0');
        const minutes = parseInt(parts.find(p => p.type === 'minute')?.value || '0');
        const seconds = parseInt(parts.find(p => p.type === 'second')?.value || '0');
        setCurrentTime({ hours, minutes, seconds });
      } catch (error) {
        console.error(`Error formatting time for timezone ${timeZone}:`, error);
      }
    };

    updateClockTime();
    const intervalId = setInterval(updateClockTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone]);

  const { hours, minutes, seconds } = currentTime;

  const secondAngle = seconds * 6;
  const minuteAngle = (minutes + seconds / 60) * 6;
  const hourAngle = ((hours % 12) + minutes / 60) * 30;

  const center = size / 2;
  const baseStrokeWidth = Math.max(1, Math.round(size / 60));
  
  const hourHandLength = size * 0.25;
  const minuteHandLength = size * 0.35;
  const secondHandLength = size * 0.40;

  return (
    <svg 
        width={size} 
        height={size} 
        viewBox={`0 0 ${size} ${size}`} 
        className="block mx-auto" 
        aria-label={`Analog clock for ${timeZone}`}
        role="img"
    >
      <title>Analog clock showing time for {timeZone}</title>
      <circle 
        cx={center} 
        cy={center} 
        r={size * 0.46} 
        fill="hsl(var(--card))" 
        stroke="hsl(var(--foreground))" 
        strokeWidth={baseStrokeWidth} 
      />
      
      {[...Array(12)].map((_, i) => (
        <line
          key={`h-mark-${idSuffix}-${i}`}
          x1={center}
          y1={center - size * 0.38}
          x2={center}
          y2={center - size * 0.44}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth={baseStrokeWidth * 1.5}
          transform={`rotate(${i * 30} ${center} ${center})`}
        />
      ))}

       {[...Array(60)].map((_, i) => {
        if (i % 5 === 0) return null;
        return (
          <line
            key={`m-mark-${idSuffix}-${i}`}
            x1={center}
            y1={center - size * 0.41}
            x2={center}
            y2={center - size * 0.44}
            stroke="hsl(var(--muted-foreground))"
            strokeWidth={baseStrokeWidth * 0.75}
            transform={`rotate(${i * 6} ${center} ${center})`}
          />
        );
      })}

      <line
        x1={center}
        y1={center}
        x2={center}
        y2={center - hourHandLength}
        stroke="hsl(var(--foreground))"
        strokeWidth={baseStrokeWidth * 2.5}
        strokeLinecap="round"
        transform={`rotate(${hourAngle} ${center} ${center})`}
      />
      <line
        x1={center}
        y1={center}
        x2={center}
        y2={center - minuteHandLength}
        stroke="hsl(var(--foreground))"
        strokeWidth={baseStrokeWidth * 1.8}
        strokeLinecap="round"
        transform={`rotate(${minuteAngle} ${center} ${center})`}
      />
      <circle cx={center} cy={center} r={baseStrokeWidth * 2.5} fill="hsl(var(--foreground))" />
      
      <line
        x1={center}
        y1={center}
        x2={center}
        y2={center - secondHandLength}
        stroke="hsl(var(--primary))" 
        strokeWidth={baseStrokeWidth}
        strokeLinecap="round"
        transform={`rotate(${secondAngle} ${center} ${center})`}
      />
      <circle cx={center} cy={center} r={baseStrokeWidth * 1.2} fill="hsl(var(--primary))" />
    </svg>
  );
};
