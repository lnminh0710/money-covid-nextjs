import { useState } from 'react';
import { Card } from '../../../components/card/Card';
import { dataByDate } from '../../../mockups/data-by-date';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const ChartPerDate = () => {
  const [{ options, series }] = useState({
    series: [
      {
        name: 'Đã nhận hỗ trợ',
        data: dataByDate.map((d) => d.totalReceive),
      },
    ],
    options: {
      chart: { zoom: { enabled: !1 }, toolbar: { show: !1 } },
      colors: ['#556ee6', '#f46a6a', '#34c38f'],
      dataLabels: { enabled: !1 },
      stroke: { width: [3], curve: 'straight', dashArray: [0] },
      title: {
        text: 'Dữ liệu nhận hỗ trợ theo ngày',
        align: 'left',
        style: {
          fontWeight: 'bold',
          fill: '#373d3f',
          opacity: 1,
          fontSize: 20,
        },
      },
      markers: { size: 5, hover: { size: 5, sizeOfSet: 0 }, colors: 'red' },
      xaxis: {
        categories: dataByDate.map((d) =>
          new Date(d.reportedDate).toLocaleDateString('fr-CA')
        ),
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: (e) => e,
            },
          },
        ],
      },
      grid: { borderColor: '#f1f1f1' },
    },
  });

  return (
    <Card width="70%">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height="380"
      />
    </Card>
  );
};

export { ChartPerDate };
