import Diceroll from "./Diceroll";
import Selectnumber from "./Selectnumber";
import Totalscore from "./Totalscore";
import styled from "styled-components";

import { useState } from "react";
import Rules from "./Rules";


 export default function Gameplay(){
    const [error,seterror]=useState("");
    const [score,setscore]=useState(0);
    const [selectednumber,setselectednumber]=useState();
    const[click,setclick]=useState(1);
    const [shorules,setshorules]=useState(false);

    const getRandomArbitrary = (min, max)=> {
        console.log(Math.floor(Math.random() * (max - min) + min))
            return Math.floor(Math.random() * (max - min) + min);
          }
          
    const rollnumbr=()=>{
        if(!selectednumber) {
            return;
                seterror("YOU HAVE NOT SELECTED ANY NUMBER")

        }
        seterror("")
        const randomnuber=getRandomArbitrary(1,6);
        setclick((prev)=>randomnuber);

        if(selectednumber===randomnuber){
            setscore((prev)=>prev+randomnuber);

        }
        else{

            setscore((prev)=>prev-2)
        }
        setselectednumber(undefined)
    }


    const reset=()=>{

        setscore(0);
    }
return(
<Container>
 <div className="cont1"> 
<Totalscore score={score} />
<Selectnumber
error={error}
selectednumber={selectednumber}
setselectednumber={setselectednumber}/>
</div>
<Diceroll click={click}
rollnumbr={rollnumbr}/>

<div className="btn">
    <Cutton onClick={reset}>reset</Cutton>
    <Button onClick={()=>setshorules((prev)=>!prev)}>{shorules?"Hide":"show"}Show Rules</Button>
</div>
  {shorules&&<Rules/>}
</Container>

    
);


};

const Container=styled.div`
padding-top: 1px;
.cont1{
    
display: flex;
justify-content:space-around;
align-items: center;
}
.btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
`;
const Button = styled.button`
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 10px 18px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.4s background ease-in;
    
    &:hover {
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;
const Cutton = styled.button`
    background-color: white;
    color: black;
    border-radius: 5px;
    padding: 10px 18px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid black;
    cursor: pointer;
    transition: 0.4s background ease-in;
    
    &:hover {
        background-color: black;
        border: 1px solid transparent;
        color: white;
        transition: 0.3s background ease-in;
    }
`;



