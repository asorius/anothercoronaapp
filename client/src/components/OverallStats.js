import React, { useEffect, useState } from 'react';
import PieCharts from './PieCharts';
import styles from 'styled-components';
import { Loader } from '../utils';
import Count from 'react-countup';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
  if (stats === null)
    return (
      <Grid item container justify="center">
        <Grid item>
          <Loader></Loader>
        </Grid>
      </Grid>
    );
  return (
    <Grid item>
      <Grid container justify="center">
        <Container>
          <Paper>
            <h1>Overall world statistics of Covid-19 virus</h1>
            <Grid container justify="center" alignItems="stretch" spacing={2}>
              <Grid item>
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
              </Grid>
              <Grid item>
                <PieCharts
                  data={{
                    dead: stats.total_deaths,
                    unclear: stats.total_unresolved,
                    recover: stats.total_recovered,
                    serious: stats.total_serious_cases,
                  }}
                ></PieCharts>
              </Grid>
              <Grid item>
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
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
