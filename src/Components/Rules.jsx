import styled from "styled-components"

const Rules = () => {
  return (
    <Rulecont>
            <h2>How to play Dice game?</h2>
        <div className="text">
            
            <p>Select Number that are on right Side of screen</p>
            <p>Click on the Dice image</p>
            <p>if the selected number and dice number matches scroes increases</p>
            <p>if the the number not matches then score decreases by 2</p>
        </div>
    </Rulecont>


  )
}

export default Rules

const Rulecont=styled.div`
max-width: 800px;
margin: 0 auto;
padding: 20px;
margin-top: 40px;
border-radius: 10px;
background-color: #fbf1f1;
h2{
font-size: 24px;
}
.text{
    margin-top: 24px;
}

`;