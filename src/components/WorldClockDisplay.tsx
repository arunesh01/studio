
"use client";

import { useState, useEffect, type FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

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

interface CityTime {
  label: string;
  time: string;
}

export const WorldClockDisplay: FC = () => {
  const [cityTimes, setCityTimes] = useState<CityTime[]>([]);

  useEffect(() => {
    const getTimeForCity = (cityConfig: ClockCityConfig): CityTime => {
      try {
        const timeString = new Date().toLocaleTimeString('en-GB', { // en-GB for HH:MM:SS format
          timeZone: cityConfig.timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        return { label: cityConfig.label, time: timeString };
      } catch (error) {
        console.error(`Error fetching time for ${cityConfig.label} (${cityConfig.timeZone}):`, error);
        return { label: cityConfig.label, time: "Error" };
      }
    };

    const updateAllTimes = () => {
      setCityTimes(CITIES_CONFIG.map(getTimeForCity));
    };

    updateAllTimes(); // Initial update
    const intervalId = setInterval(updateAllTimes, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (cityTimes.length === 0) {
    // Initial loading state or if something went wrong with all timezones
    return (
        <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">Loading world clocks...</p>
        </div>
    );
  }

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-4">
          <Clock className="h-10 w-10 text-primary mr-3" />
          <h2 className="text-3xl font-bold text-center text-foreground">
            Global Time Zones
          </h2>
        </div>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Stay connected with our teams and clients across different time zones.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cityTimes.map((cityTime) => (
            <Card key={cityTime.label} className="shadow-lg text-center bg-card hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2 pt-4">
                <CardTitle className="text-lg font-medium text-card-foreground">
                  {cityTime.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-4xl font-mono text-primary tracking-wider">
                  {cityTime.time}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
