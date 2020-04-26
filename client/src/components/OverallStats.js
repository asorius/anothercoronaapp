import React, { useEffect, useState } from 'react';
import PieCharts from './PieCharts';
import styles from 'styled-components';
import Loader from '../helpers/Loader';
const Div = styles.div`
margin:0 auto;
width:50%;
}
`;
const Container = styles.div`
margin:0 auto;
padding:2rem;
display:flex;
flex-direction:row;

`;

export default function OverallStats({ data }) {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setStats(data);
    }, 1000);
  }, [data]);
  return (
    <div>
      <h1>Overall world statistics of Covid-19 virus</h1>
      {stats !== null ? (
        <Container>
          <Div>
            <h4>World wide stats: </h4>

            <p>CASES: {stats.total_cases.toLocaleString('en-GB')}</p>
            <p>RECOVERED: {stats.total_recovered.toLocaleString('en-GB')}</p>
            <p>DEATHS: {stats.total_deaths.toLocaleString('en-GB')}</p>
          </Div>
          <PieCharts
            data={{
              dead: stats.total_deaths,
              unclear: stats.total_unresolved,
              recover: stats.total_recovered,
              serious: stats.total_serious_cases,
            }}
          ></PieCharts>
          <Div>
            <h4>Todays stats: </h4>
            <p>
              NEW CASES TODAY:{' '}
              {stats.total_new_cases_today.toLocaleString('en-GB')}
            </p>
            <p>
              NEW DEATHS TODAY:{' '}
              {stats.total_new_deaths_today.toLocaleString('en-GB')}
            </p>
          </Div>
        </Container>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
}
