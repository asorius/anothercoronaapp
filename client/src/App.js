import React, { useState, useEffect } from 'react';
import CountryCard from './components/CountryCard';
import SearchInput from './components/SearchInput';
import Charts from './components/Charts';
import OverallStats from './components/OverallStats';
import Loader from './components/Loader';
import './index.css';
function App() {
  const [data, updateData] = useState(null);
  const [timeline, setTimeline] = useState(null);
  const [country, setCountry] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const updateCountry = (input) => {
    setCountry(input);
    setLoading(true);
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
  return (
    <div
      className="App"
      style={{ margin: '0 auto', width: '80%', textAlign: 'center' }}
    >
      <SearchInput onclick={updateCountry}></SearchInput>

      {loading ? (
        <Loader></Loader>
      ) : !loading && data && timeline && country ? (
        <React.Fragment>
          <CountryCard data={data}></CountryCard>
          <Charts data={timeline}></Charts>
        </React.Fragment>
      ) : (
        <OverallStats data={stats}></OverallStats>
      )}
    </div>
  );
}

export default App;
