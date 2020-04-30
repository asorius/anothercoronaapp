import React from 'react';
import styles, { keyframes } from 'styled-components';
const LoaderDiv = styles.div`
margin:0 auto;
width:5rem;
display:flex;
justify-items:flex-end;
text-transform:capitalize;
`;
const BounceAnimation = keyframes`
  0% { transform:translateY(0) ; }
  50% { transform:translateY(-.5rem) }
  100% { transform:translateY(0)  }
`;
const DotWrapper = styles.div`
  display: flex;
  align-items: flex-end;
`;
const Dot = styles.div`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} .5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;
function LoadingDots() {
  return (
    <React.Fragment>
      <h1 style={{ margin: 0, padding: 0, marginTop: '2rem' }}>loading</h1>
      <DotWrapper>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
    </React.Fragment>
  );
}
export default function OverallStats({ data }) {
  return (
    <LoaderDiv>
      <LoadingDots></LoadingDots>
    </LoaderDiv>
  );
}
