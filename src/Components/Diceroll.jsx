import styled from "styled-components"

const Diceroll = ({click,rollnumbr}) => {
 
      
       
       
       
   
    return (
    <Container>
            <div className="rollbaby" 
            
            onClick={rollnumbr}
            >
        <img src={`/dice/dice_${click}.png`} alt="" />

        </div>
        <p>Click on dice to roll</p>
    </Container>
  )
}

export default Diceroll


const Container=styled.div`
margin-top:28px;
display: flex;
flex-direction: column;
align-items: center;
.rollbaby{
    cursor: pointer;
}

p{

    font-size: 24px;
}


`;
