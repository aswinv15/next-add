'use client';
import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { useGetLinearranges } from '@/features/linearranges/api/use-get-linearranges';

export const description = 'An area chart with gradient fill';
// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },

//   {
//     id: 17,
//     name: 'starlight',
//     lowerBound: '3.00',
//     expression: 'ex4',
//     upperBound: '8.00'
//   },
//   {
//     id: 18,
//     name: 'mintchip',
//     lowerBound: '5.00',
//     expression: 'ex5',
//     upperBound: '9.00'
//   },
//   {
//     id: 19,
//     name: 'sunkist',
//     lowerBound: '6.00',
//     expression: 'ex6',
//     upperBound: '10.00'
//   },
//   {
//     id: 20,
//     name: 'coralreef',
//     lowerBound: '7.00',
//     expression: 'ex7',
//     upperBound: '11.00'
//   },
//   {
//     id: 21,
//     name: 'lavenderdream',
//     lowerBound: '8.00',
//     expression: 'ex8',
//     upperBound: '12.00'
//   },
//   {
//     id: 22,
//     name: 'powderpuff',
//     lowerBound: '9.00',
//     expression: 'ex9',
//     upperBound: '13.00'
//   },
//   {
//     id: 23,
//     name: 'rosepetal',
//     lowerBound: '10.00',
//     expression: 'ex10',
//     upperBound: '14.00'
//   },
//   {
//     id: 24,
//     name: 'lemondrop',
//     lowerBound: '11.00',
//     expression: 'ex11',
//     upperBound: '15.00'
//   },
//   {
//     id: 25,
//     name: 'honeycomb',
//     lowerBound: '12.00',
//     expression: 'ex12',
//     upperBound: '16.00'
//   }
// ]
const chartConfig = {
  upperBound: {
    label: 'upperBound',
    color: 'hsl(var(--chart-1))'
  },
  lowerBound: {
    label: 'lowerBound',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export function Achart() {
  const linearrangesQuery = useGetLinearranges();
  const linearranges = linearrangesQuery.data || [];

  return (
    <div>
      <ChartContainer config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={linearranges}
          margin={{
            left: 20,
            right: 20
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="expression"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <defs>
            <linearGradient id="fillupperBound" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-upperBound)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-upperBound)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-lowerBound)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-lowerBound)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="lowerBound"
            type="natural"
            fill="url(#filllowerBound)"
            fillOpacity={0.4}
            stroke="var(--color-lowerBound)"
            stackId="a"
          />
          <Area
            dataKey="upperBound"
            type="natural"
            fill="url(#fillupperBound)"
            fillOpacity={0.4}
            stroke="var(--color-upperBound)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
