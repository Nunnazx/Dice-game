import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
const Selectnumber = ({error,selectednumber,setselectednumber}) => {
        const arrynumber=[1,2,3,4,5,6];

        
    return (
        <Numberselected>
            <p className='eroor'>{error}</p>
            <div className='flexer'>
    {arrynumber.map((value,i)=>(
        <Box key={i} 
         isselected={value===selectednumber}
        onClick={()=>setselectednumber(value)}>{value}</Box>
    ))  }
         </div>
        <p>Total selected.</p>
    </Numberselected>

  )
}

export default Selectnumber
const Numberselected=styled.div`
display: flex;
flex-direction: column;
align-items: end;
.eroor{
    color: red;
}
.flexer{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 500px;

}

`;

const Box=styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
   display: grid;
    place-items: center;
    font-weight: 700;
    background-color: ${(props)=>(props.isselected?"black":"white")};
    color: ${(props)=>(props.isselected?"white":"black")};



`;