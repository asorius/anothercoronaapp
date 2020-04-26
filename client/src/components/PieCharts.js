import React from 'react';
import Chart from 'react-apexcharts';
import styles from 'styled-components';
const ChartContainer = styles.div`
margin:0 auto;
width:100%;
text-align:center
`;
export default function PieCharts({ data }) {
  const cases = {
    options: {
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val.toFixed(2) + '%';
        },
      },
      labels: ['Deaths', 'Still sick', 'Recovered'],
    },
    plotOptions: {
      donut: {
        total: {
          show: true,
          showAlways: true,
          label: 'Total',
          fontSize: '22px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 600,
          color: '#373d3f',
          formatter: function (w) {
            return w.globals.seriesTotals.reduce((a, b) => {
              return a + b;
            }, 0);
          },
        },
      },
    },
    series: [data.dead, data.unclear, data.recover],
  };
  console.log(
    [data.dead, data.unclear, data.recover].reduce((a, val) => a + val, 0)
  );
  return (
    <ChartContainer>
      <Chart
        options={cases.options}
        series={cases.series}
        width="480"
        type="donut"
      />
    </ChartContainer>
  );
}
