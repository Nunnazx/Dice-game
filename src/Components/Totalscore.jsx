import React from 'react'
import styled from 'styled-components'
const Totalscore = ({score}) => {
  return (
    <Container>
        <h1>{score}</h1>
        <p>Total Score</p>


    </Container>
  );
}

export default Totalscore;
const Container=styled.div`
    max-width: 200px;
    text-align: center;
   
    h1{
        font-size: 100px;
        line-height: 25px;
    }
    p{
        font-size: 24px;
        font-weight: 500px;
    }

`