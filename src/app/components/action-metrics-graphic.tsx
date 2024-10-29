'use client'

import { StatisticsProps } from '@/@types/arena-sync'
import React from 'react'
import Chart from 'react-apexcharts'

interface Props {
  estatistica: StatisticsProps
  time: string
}

export function ActionMetricsGraphic({ estatistica, time }: Props) {
  const data = [
    { name: 'Faltas', value: (estatistica[0].faltas || 0) * 5 },
    { name: 'Defesas', value: (estatistica[0].defesas || 0) * 5 },
    { name: 'Cartões', value: (estatistica[0].cartao?.length || 0) * 5 },
    { name: 'Gols', value: (estatistica[0].gol.length || 0) * 5 },
    { name: 'Escanteios', value: (estatistica[0].escanteios || 0) * 5 },
  ]

  const series = [
    {
      data: data.map((item) => item.value),
    },
  ]

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'radar' as const,
      height: 350,
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    title: {
      text: `${time}: Métricas de ação`,
      style: {
        fontSize: '12',
      },
    },
    stroke: {
      width: 1,
    },
    fill: {
      opacity: 0.8,
    },
    markers: {
      size: 3,
    },
    xaxis: {
      categories: data.map((item) => item.name),
    },
    yaxis: {
      show: false,
    },
    colors: ['#82ca9d'],
  }

  return (
    <div className="h-80 rounded-lg bg-yellow-50 p-2 md:w-[25rem]">
      <Chart options={options} series={series} type="radar" height={350} />
    </div>
  )
}
