"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useGetDistancebydemands } from '@/features/distancebydemands/api/use-get-distancebydemands';

export const description = "A pie chart with a label"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  siteName: {
    label: "siteName",
   },
  // chrome: {
  //   label: "Chrome",
  //   color: "hsl(var(--chart-1))",
  // },
  // safari: {
  //   label: "Safari",
  //   color: "hsl(var(--chart-2))",
  // },
  // firefox: {
  //   label: "Firefox",
  //   color: "hsl(var(--chart-3))",
  // },
  // edge: {
  //   label: "Edge",
  //   color: "hsl(var(--chart-4))",
  // },
  // other: {
  //   label: "Other",
  //   color: "hsl(var(--chart-5))",
  // },
} satisfies ChartConfig

export function Pchart() {
  const distancebydemandsQuery = useGetDistancebydemands();
  const distancebydemands = distancebydemandsQuery.data || [];
 console.log(distancebydemands)
  return (
    
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={distancebydemands} dataKey="demandPercentage" label nameKey="siteName" />
          </PieChart>
        </ChartContainer>
     
  )
}
