"use client"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Cell, LabelList } from "recharts"
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
import { useGetAssetsconstraints } from '@/features/assetsconstraints/api/use-get-assetsconstraints';
export const description = "A bar chart with negative values"
// const chartData = [
//   { month: "January", visitors: 186 },
//   { month: "February", visitors: 205 },
//   { month: "March", visitors: -207 },
//   { month: "April", visitors: 173 },
//   { month: "May", visitors: -209 },
//   { month: "June", visitors: 214 },
// ]
const chartConfig = {
  groupId: {
    label: "groupId",
  },
} satisfies ChartConfig
export function Bchart() {
  const assetsconstraintsQuery = useGetAssetsconstraints();
  const assetsconstraints = assetsconstraintsQuery.data || [];
  return (
   
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={assetsconstraints}
            margin={{
                top: 24,
                left: 24,
                right: 24
            }}>
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
            <Bar dataKey="groupId">
              <LabelList position="top" dataKey="minDcs" fillOpacity={1} />
              {assetsconstraints.map((item) => (
                <Cell
                  key={item.minDcs}
                  fill={
                    item.groupId > 0
                      ? "hsl(var(--chart-1))"
                      : "hsl(var(--chart-2))"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
     
  )
}
