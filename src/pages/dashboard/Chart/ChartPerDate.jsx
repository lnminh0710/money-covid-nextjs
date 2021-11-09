import { useEffect, useMemo, useState } from 'react';
import { Card } from '../../../components/card/Card';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const ChartPerDate = () => {
  const [{ xaxis, series }, setState] = useState({
    series: [],
    xaxis: {
      categories: [],
    },
  });

  const options = useMemo(
    () => ({
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
      xaxis,
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
    }),
    [xaxis]
  );

  useEffect(() => {
    fetch('http://210.2.93.91:3000/v1/data/provinces/1/days')
      .then((res) => res.json())
      .then((data) => {
        setState({
          xaxis: {
            categories: data.map((d) =>
              new Date(d.ProcessedDate).toDateString('fr-CA')
            ),
          },
          series: [
            {
              name: 'Đã nhận hỗ trợ',
              data: data.map((d) => d.TotalSigned),
            },
          ],
        });
      });
  }, []);

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
