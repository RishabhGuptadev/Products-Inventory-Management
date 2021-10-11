import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import styled from 'styled-components';
export default function Rating({rating}) {
    const tempStars = Array.from({length:5}, (_,index)=>{
        const number = index+0.5;
        console.log(number)
        return (
          <span key={index}>{rating>=index+1? (<BsStarFill/>) : rating>=number?(<BsStarHalf/>):(<BsStar/>)} </span>
        )
    
      }) 
    return (
        <Wrapper>
        <div>
        <h4>{tempStars}</h4> 
        </div> 
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
 @media screen and (max-width:900px){
   
   width:100%;
 }
`