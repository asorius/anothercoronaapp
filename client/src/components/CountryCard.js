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
  const Logo = styles.div`
text-align:center;
height:10rem;
width:10rem;
display:grid;
place-items:center;
background:url(${data.countryInfo ? data.countryInfo.flag : ''});
background-repeat: no-repeat;
background-position:center;
background-size:cover;
border-radius:50%;
`;
  return (
    <React.Fragment>
      <Container>
        <Logo>
          <h1>{data.country}</h1>
        </Logo>
        <DataDiv>
          <h3>Total cases: {data.cases}</h3>
          <h3>New cases today: {data.todayCases}</h3>
        </DataDiv>
        <DataDiv>
          <h3>Total recovered: {data.recovered}</h3>
          <p>
            Recover percentage:{' '}
            {((data.recovered * 100) / data.cases).toFixed(2)} %
          </p>
        </DataDiv>
        <DataDiv>
          <h3>Total deaths: {data.deaths}</h3>
          <h3>New deaths today: {data.todayDeaths}</h3>
          <p>
            Death percentage: {((data.deaths * 100) / data.cases).toFixed(2)} %
          </p>
        </DataDiv>
        <br></br>
      </Container>
      <div>
        <i>Updated at : {new Date(data.updated).toLocaleDateString()}</i>
      </div>
    </React.Fragment>
  );
}
