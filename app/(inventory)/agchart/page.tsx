'use client';


import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { getData } from '@/app/(inventory)/agchart/data';
export default function ChartExample () {
  const [options, setOptions] = useState<AgChartOptions>({

    title: {
      text: "Apple's Revenue by Product Category",
    },
    subtitle: {
      text: "In Billion U.S. Dollars",
    },
    data: getData(),
    series: [
      {
        type: "bar",
        xKey: "quarter",
        yKey: "iphone",
        yName: "iPhone",
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey: "mac",
        yName: "Mac",
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey: "ipad",
        yName: "iPad",
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey: "wearables",
        yName: "Wearables",
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey: "services",
        yName: "Services",
      },
    ],
    
  });
  return <AgCharts options={options} />;
};