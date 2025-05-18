
"use client"; // For charts

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip, Legend } from "recharts";
import { Users, ExternalLink, TrendingUp, TrendingDown } from "lucide-react";

const trafficData = [
  { date: "2024-01-01", visits: 2400, unique: 1500 },
  { date: "2024-02-01", visits: 1398, unique: 900 },
  { date: "2024-03-01", visits: 9800, unique: 6800 },
  { date: "2024-04-01", visits: 3908, unique: 2800 },
  { date: "2024-05-01", visits: 4800, unique: 3500 },
  { date: "2024-06-01", visits: 3800, unique: 2800 },
];

const trafficChartConfig = {
  visits: { label: "Total Visits", color: "hsl(var(--chart-1))" },
  unique: { label: "Unique Visitors", color: "hsl(var(--chart-2))" },
} satisfies ChartConfig;

const sourceData = [
  { name: 'Organic Search', value: 400, fill: 'hsl(var(--chart-1))' },
  { name: 'Direct', value: 300, fill: 'hsl(var(--chart-2))' },
  { name: 'Referral', value: 300, fill: 'hsl(var(--chart-3))' },
  { name: 'Social Media', value: 200, fill: 'hsl(var(--chart-4))' },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Website Analytics</h1>
        <p className="text-muted-foreground">Insights into your website traffic and user engagement.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10,293</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45.2%</div>
            <p className="text-xs text-muted-foreground text-destructive">-2.1% from last month <TrendingDown className="inline h-3 w-3" /></p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session Duration</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2m 34s</div>
            <p className="text-xs text-muted-foreground">+5s from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.8%</div>
            <p className="text-xs text-muted-foreground">+0.5% from last month</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Overview</CardTitle>
            <CardDescription>Monthly visitor trends.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={trafficChartConfig} className="h-[300px] w-full">
              <LineChart data={trafficData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short' })} tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <RechartsTooltip content={<ChartTooltipContent indicator="line" />} />
                <Line type="monotone" dataKey="visits" stroke="var(--color-visits)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="unique" stroke="var(--color-unique)" strokeWidth={2} dot={false} />
                <Legend />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Distribution of visitors by source.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <ChartContainer config={{}} className="h-[300px] w-full max-w-xs">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={sourceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} />
                  <RechartsTooltip content={<ChartTooltipContent hideLabel />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
