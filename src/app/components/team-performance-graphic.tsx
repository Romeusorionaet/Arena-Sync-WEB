'use client'

import { StatisticsProps } from '@/@types/arena-sync'
import Chart from 'react-apexcharts'

interface Props {
  estatistica: StatisticsProps
  time: string
}

export function TeamPerformanceGraphic({ estatistica, time }: Props) {
  const data = [
    {
      name: 'Posse de Bola',
      value: parseFloat(estatistica[0].posseDeBola || '0'),
    },
    {
      name: 'Finalização',
      value: parseFloat(estatistica[0].finalizacao[0].precisao || '0'),
    },
    {
      name: 'Passe',
      value: parseFloat(estatistica[0].passe[0].precisao || '0'),
    },
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
      text: `${time}: Desempenho/Equipe`,
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
