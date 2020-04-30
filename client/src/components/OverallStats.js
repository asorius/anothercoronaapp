import React, { useEffect, useState } from 'react';
import PieCharts from './PieCharts';
import styles from 'styled-components';
import Loader from './Loader';
import Count from 'react-countup';
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

            <p>
              CASES:{' '}
              <Count
                start={0}
                end={stats.total_cases}
                duration={1}
                separator=","
              />
            </p>
            <p>
              RECOVERED:{' '}
              <Count
                start={0}
                end={stats.total_recovered}
                duration={1}
                separator=","
              />
            </p>
            <p>
              DEATHS:{' '}
              <Count
                start={0}
                end={stats.total_deaths}
                duration={1}
                separator=","
              />
            </p>
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
              <Count
                start={0}
                end={stats.total_new_cases_today}
                duration={1}
                separator=","
              />
            </p>
            <p>
              NEW DEATHS TODAY:{' '}
              <Count
                start={0}
                end={stats.total_new_deaths_today}
                duration={1}
                separator=","
              />
            </p>
          </Div>
        </Container>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
}
