
"use client";

import { useState, useEffect, type FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock4 } from "lucide-react"; // Changed to Clock4 for a more generic icon if needed, or keep Clock

interface ClockCityConfig {
  key: string; // Unique key for React list
  label: string;
  timeZone: string;
}

const CITIES_CONFIG: ClockCityConfig[] = [
  { key: "dubai", label: "Dubai", timeZone: "Asia/Dubai" },
  { key: "india", label: "India", timeZone: "Asia/Kolkata" },
  { key: "berlin", label: "Europe - Berlin", timeZone: "Europe/Berlin" },
  { key: "sydney", label: "Australia - Sydney", timeZone: "Australia/Sydney" },
  { key: "london", label: "London", timeZone: "Europe/London" },
];

interface AnalogClockProps {
  timeZone: string;
  size?: number;
}

const AnalogClock: FC<AnalogClockProps> = ({ timeZone, size = 120 }) => {
  // This state will store an object with h, m, s for the specific timezone
  const [currentTime, setCurrentTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateClockTime = () => {
      const now = new Date();
      try {
        const formatter = new Intl.DateTimeFormat('en-GB', { // en-GB for consistent parsing
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
        // Keep previous time or set to a default error state if needed
      }
    };

    updateClockTime(); // Initial update
    const intervalId = setInterval(updateClockTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [timeZone]);

  const { hours, minutes, seconds } = currentTime;

  const secondAngle = seconds * 6; // 360 / 60 = 6
  const minuteAngle = (minutes + seconds / 60) * 6; // 360 / 60 = 6
  const hourAngle = ((hours % 12) + minutes / 60) * 30; // 360 / 12 = 30

  const center = size / 2;
  const baseStrokeWidth = Math.max(1, Math.round(size / 60)); // Adjusted stroke width scaling
  
  const hourHandLength = size * 0.25;
  const minuteHandLength = size * 0.35;
  const secondHandLength = size * 0.40;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block mx-auto" aria-label={`Analog clock for ${timeZone}`}>
      <circle cx={center} cy={center} r={size * 0.46} fill="hsl(var(--card))" stroke="hsl(var(--foreground))" strokeWidth={baseStrokeWidth} />
      
      {/* Hour Marks */}
      {[...Array(12)].map((_, i) => (
        <line
          key={`h-mark-${i}`}
          x1={center}
          y1={center - size * 0.38}
          x2={center}
          y2={center - size * 0.44}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth={baseStrokeWidth * 1.5} // Thicker hour marks
          transform={`rotate(${i * 30} ${center} ${center})`}
        />
      ))}

      {/* Minute Marks */}
       {[...Array(60)].map((_, i) => {
        if (i % 5 === 0) return null; // Skip where hour marks are
        return (
          <line
            key={`m-mark-${i}`}
            x1={center}
            y1={center - size * 0.41}
            x2={center}
            y2={center - size * 0.44}
            stroke="hsl(var(--muted-foreground))"
            strokeWidth={baseStrokeWidth * 0.75} // Thinner minute marks
            transform={`rotate(${i * 6} ${center} ${center})`}
          />
        );
      })}

      {/* Hour hand */}
      <line
        x1={center}
        y1={center}
        x2={center}
        y2={center - hourHandLength}
        stroke="hsl(var(--foreground))"
        strokeWidth={baseStrokeWidth * 2.5} // Thickest hand
        strokeLinecap="round"
        transform={`rotate(${hourAngle} ${center} ${center})`}
      />
      {/* Minute hand */}
      <line
        x1={center}
        y1={center}
        x2={center}
        y2={center - minuteHandLength}
        stroke="hsl(var(--foreground))"
        strokeWidth={baseStrokeWidth * 1.8} // Medium thickness
        strokeLinecap="round"
        transform={`rotate(${minuteAngle} ${center} ${center})`}
      />
      {/* Center Dot */}
      <circle cx={center} cy={center} r={baseStrokeWidth * 2.5} fill="hsl(var(--foreground))" /> {/* Adjusted center dot for better proportion */}
      
      {/* Second hand */}
      <line
        x1={center}
        y1={center}
        x2={center}
        y2={center - secondHandLength}
        stroke="hsl(var(--primary))" 
        strokeWidth={baseStrokeWidth} // Thinnest hand
        strokeLinecap="round"
        transform={`rotate(${secondAngle} ${center} ${center})`}
      />
       {/* Smaller center dot on top of second hand for pivot appearance */}
      <circle cx={center} cy={center} r={baseStrokeWidth * 1.2} fill="hsl(var(--primary))" />
    </svg>
  );
};

export const WorldClockDisplay: FC = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-4">
          <Clock4 className="h-10 w-10 text-primary mr-3" /> 
          <h2 className="text-3xl font-bold text-center text-foreground">
            Global Time Zones
          </h2>
        </div>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Stay connected with our teams and clients across different time zones.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {CITIES_CONFIG.map((city) => (
            <Card key={city.key} className="shadow-lg text-center bg-card hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2 pt-4">
                <CardTitle className="text-lg font-medium text-card-foreground">
                  {city.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4 pt-2">
                <AnalogClock timeZone={city.timeZone} size={120} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
