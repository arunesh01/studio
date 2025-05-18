
"use client" // For charts

import { CardComponent } from "@/components/CardComponent";
import { DollarSign, Users, Activity, BarChart3 } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"; // Assuming ChartTooltip is for Recharts
import type { ChartConfig } from "@/components/ui/chart";

const chartData = [
  { month: "January", revenue: Math.floor(Math.random() * 5000) + 1000 },
  { month: "February", revenue: Math.floor(Math.random() * 5000) + 1000 },
  { month: "March", revenue: Math.floor(Math.random() * 5000) + 1000 },
  { month: "April", revenue: Math.floor(Math.random() * 5000) + 1000 },
  { month: "May", revenue: Math.floor(Math.random() * 5000) + 1000 },
  { month: "June", revenue: Math.floor(Math.random() * 5000) + 1000 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;


export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back, Admin! Here's what's happening.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <CardComponent
          title="Total Revenue"
          description="$45,231.89"
          icon={<DollarSign className="h-6 w-6 text-muted-foreground" />}
          footerContent={<p className="text-xs text-muted-foreground">+20.1% from last month</p>}
        />
        <CardComponent
          title="Active Clients"
          description="+2350"
          icon={<Users className="h-6 w-6 text-muted-foreground" />}
          footerContent={<p className="text-xs text-muted-foreground">+180.1% from last month</p>}
        />
        <CardComponent
          title="Open Tickets"
          description="12"
          icon={<Activity className="h-6 w-6 text-muted-foreground" />}
          footerContent={<p className="text-xs text-muted-foreground">+5 since yesterday</p>}
        />
         <CardComponent
          title="Projects In Progress"
          description="32"
          icon={<BarChart3 className="h-6 w-6 text-muted-foreground" />}
          footerContent={<p className="text-xs text-muted-foreground">+2 completed this week</p>}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
            <CardDescription>
              Tracking revenue generation over the past 6 months.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                  <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                   <RechartsTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dot" />}
                    />
                  <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
             <CardDescription>Latest updates and actions within the system.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                {user: "Alice", action: "Closed ticket #1234", time: "2m ago"},
                {user: "Bob", action: "Started new project 'Website Redesign'", time: "1h ago"},
                {user: "Charlie", action: "Onboarded new client 'Acme Corp'", time: "3h ago"},
                {user: "David", action: "Pushed update to Cloud Server X", time: "5h ago"},
                {user: "Eve", action: "Responded to inquiry from 'Beta LLC'", time: "Yesterday"},
              ].map((activity, index) => (
                 <li key={index} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-md">
                    <div>
                        <span className="font-medium text-sm">{activity.user}</span>
                        <span className="text-xs text-muted-foreground ml-1">{activity.action}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                 </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
