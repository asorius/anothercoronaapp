import React from 'react';
import Chart from 'react-apexcharts';
import styles from 'styled-components';
const ChartContainer = styles.div`
max-Width:60rem;
margin:0 auto;
`;
function Charts({ data }) {
  const cases = {
    options: {
      markers: {
        size: 2,
      },
      // stroke: {
      //   curve: 'stepline',
      // },
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: Object.keys(data.cases),
      },
    },
    series: [
      {
        name: 'Cases',
        data: Object.values(data.cases),
      },
      {
        name: 'Deaths',
        data: Object.values(data.deaths),
      },
      {
        name: 'Recovers',
        data: Object.values(data.recovered),
      },
    ],
  };
  return (
    <ChartContainer>
      <Chart options={cases.options} series={cases.series} type="area" />
    </ChartContainer>
  );
}
export default React.memo(Charts);
