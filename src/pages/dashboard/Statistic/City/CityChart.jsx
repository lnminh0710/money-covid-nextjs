import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { parseNumber } from 'util/number';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options = {
  chart: {
    type: 'bar',
    height: 850,
    stacked: true,
  },

  colors: ['#00e396', '#f2a320'],
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff'],
  },

  xaxis: {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    labels: {
      formatter: function (val) {
        return val + 'K';
      },
    },
  },
  yaxis: {
    title: {
      text: undefined,
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return parseNumber(val);
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40,
  },
};

const CityChart = ({ data }) => {
  const [{ series, xaxis }, setState] = useState({
    series: [],
    xaxis: {},
  });

  useEffect(() => {
    setState({
      series: [
        {
          name: 'Đã giao',
          data: data.map((d) => d.totalReceive),
        },
        {
          name: 'Chờ giao',
          data: data.map((d) => d.totalApprove - d.totalReceive),
        },
      ],
      xaxis: {
        categories: data.map((d) => d.name),
        labels: {
          formatter: function (val) {
            return val;
          },
        },
      },
    });
  }, [data]);

  return (
    <ReactApexChart
      options={{ ...options, xaxis }}
      series={series}
      type="bar"
    />
  );
};

export { CityChart };
