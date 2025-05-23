
"use client";

import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock4 } from "lucide-react";
import { AnalogClock } from "@/components/AnalogClock"; // Import the new AnalogClock component

interface ClockCityConfig {
  key: string;
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
                <AnalogClock timeZone={city.timeZone} size={120} idSuffix={city.key} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
