import React, { useState, useEffect } from 'react';
import {
  CountryCard,
  SearchInput,
  Charts,
  OverallStats,
  Error,
} from './components';
import { Loader } from './utils';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './index.css';
function App() {
  const [data, updateData] = useState(null);
  const [timeline, setTimeline] = useState(null);
  const [country, setCountry] = useState(null);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const updateCountry = (input) => {
    if (input) {
      setCountry(input);
      setLoading(true);
    }
  };
  useEffect(() => {
    console.log('Effect iniated');
    if (country !== null) {
      const getData = async () => {
        try {
          const fetchedData = await fetch(
            `http://localhost:3001/api/${country}`
          );
          const { data: overallData } = await fetchedData.json();
          const fetchedHistory = await fetch(
            `http://localhost:3001/api/history/${overallData.country}`
          );
          const { data: history } = await fetchedHistory.json();

          setTimeline(history.timeline);
          updateData(overallData);
          setLoading(false);
        } catch (e) {
          console.log(e);
          setError(true);
        }
      };
      getData();
    } else {
      const getStats = async () => {
        try {
          const fetchedstats = await fetch(`http://localhost:3001/api/stats`);
          const { data: stats } = await fetchedstats.json();
          console.log(stats.results[0]);
          setStats(stats.results[0]);
        } catch (e) {
          console.log({ statseror: e });
        }
      };
      getStats();
    }
  }, [country]);
  const errorHandle = (e) => {
    if (e) {
      setTimeout(() => {
        setError(false);
        setCountry(null);
        setLoading(false);
      }, 2000);
      return <div>No data available for selected country...</div>;
    }
  };
  return (
    <div className="App">
      <Container>
        <Grid container justify="center" alignItems="center">
          <SearchInput onSubmit={updateCountry}></SearchInput>

          {error ? (
            errorHandle(error)
          ) : loading ? (
            <Loader></Loader>
          ) : !loading && data && timeline && country ? (
            <React.Fragment>
              <CountryCard data={data} timeline={timeline}></CountryCard>
              {/* <Charts data={timeline}></Charts> */}
            </React.Fragment>
          ) : (
            <OverallStats data={stats}></OverallStats>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
