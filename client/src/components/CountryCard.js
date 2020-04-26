import React from 'react';
import styles from 'styled-components';
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

export default function CountryCard({ data }) {
  console.log(data);
  return (
    <React.Fragment>
      <Container>
        <h1>{data.country}</h1>
        <DataDiv>
          <h3>Total cases: {data.cases}</h3>
          <h3>New cases today: {data.todayCases}</h3>
          <h3>Cases per one million citizens: {data.casesPerOneMillion}</h3>
        </DataDiv>
        <DataDiv>
          <h3>Total deaths: {data.deaths}</h3>
          <h3>New deaths today: {data.todayDeaths}</h3>
          <h3>Deaths per one million citizens: {data.deathsPerOneMillion}</h3>
        </DataDiv>
        <br></br>
        {data.countryInfo ? (
          <img src={data.countryInfo.flag} alt=""></img>
        ) : null}
      </Container>
      <div>
        <i>Updated at : {new Date(data.updated).toLocaleDateString()}</i>
      </div>
    </React.Fragment>
  );
}
