import React, { useState, useEffect } from 'react';
import CountryCard from './components/CountryCard';
import SearchInput from './components/SearchInput';
import Charts from './components/Charts';
//image https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80
function App() {
  const [data, updateData] = useState(null);
  const [timeline, setTimeline] = useState(null);
  const [country, setCountry] = useState(null);
  const updateCountry = (input) => {
    console.log(input);
    setCountry(input);
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
        } catch (e) {
          console.log(e);
        }
      };
      getData();
    }
  }, [country]);
  return (
    <div
      className="App"
      style={{ margin: '0 auto', width: '80%', textAlign: 'center' }}
    >
      <SearchInput onclick={updateCountry}></SearchInput>

      {data && timeline && country ? (
        <React.Fragment>
          <CountryCard data={data}></CountryCard>
          <Charts data={timeline}></Charts>
        </React.Fragment>
      ) : null}
    </div>
  );
}

export default App;
