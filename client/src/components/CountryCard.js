import React from 'react';
import styles from 'styled-components';
import Count from 'react-countup';
import Grid from '@material-ui/core/Grid';
import { Charts } from './';
const Container = styles.div`
text-align:center;
display:flex;
flex-direction:row;
padding:2rem;
justify-content:space-around;
height:25%;
`;
const DataDiv = styles.div`
text-align:center;
height:100%;
`;

const Logo = styles.div`
text-align:center;
height:10rem;
width:10rem;
display:grid;
place-items:center;
background:url(${(props) => props.url});
background-repeat: no-repeat;
background-position:center;
background-size:cover;
border-radius:50%;
`;
export default function CountryCard({ data, timeline }) {
  console.log(data);
  return (
    <React.Fragment>
      <Container>
        <Grid container>
          <Grid item xs={6} md={4}>
            <Logo url={data.countryInfo ? data.countryInfo.flag : ''}>
              <h1>{data.country}</h1>
            </Logo>
          </Grid>
          <Grid item container xs={6} md={8}>
            <Grid item>
              <DataDiv>
                <h3>
                  Total cases:{' '}
                  <Count
                    start={0}
                    end={data.cases}
                    duration={1}
                    separator=","
                  />
                </h3>
                <h3>
                  New cases today:{' '}
                  <Count
                    start={0}
                    end={data.todayCases}
                    duration={1}
                    separator=","
                  />
                </h3>
              </DataDiv>
            </Grid>
            <Grid item>
              <DataDiv>
                <h3>
                  Total recovered:{' '}
                  <Count
                    start={0}
                    end={data.recovered}
                    duration={1}
                    separator=","
                  />
                </h3>
                <p>
                  Recover percentage:{' '}
                  <Count
                    start={0}
                    end={+((data.recovered * 100) / data.cases).toFixed(2)}
                    duration={1}
                    separator=","
                  />
                  %
                </p>
              </DataDiv>
            </Grid>
            <Grid item>
              <DataDiv>
                <h3>
                  Total deaths:{' '}
                  <Count
                    start={0}
                    end={data.deaths}
                    duration={1}
                    separator=","
                  />
                </h3>
                <h3>
                  New deaths today:{' '}
                  <Count
                    start={0}
                    end={data.todayDeaths}
                    duration={1}
                    separator=","
                  />
                </h3>
                <p>
                  Death percentage:{' '}
                  <Count
                    start={0}
                    end={+((data.deaths * 100) / data.cases).toFixed(2)}
                    duration={1}
                    separator=","
                  />{' '}
                  %
                </p>
              </DataDiv>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Charts data={timeline}></Charts>
          </Grid>
        </Grid>

        <br></br>
      </Container>
      <div>
        <i>Updated at : {new Date(data.updated).toLocaleDateString()}</i>
      </div>
    </React.Fragment>
  );
}
