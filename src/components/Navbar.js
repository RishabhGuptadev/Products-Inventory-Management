import React from 'react'
import styled from 'styled-components'
export default function Navbar() {
    return (
        <Wrapper>
        <div className="nav-header">
        <h3>PRODUCTS INVENTORY MANAGEMENT</h3> 
        </div> 

        </Wrapper>
    )
}

const Wrapper = styled.div`
display:flex;
padding:30px;
font-family:"Montserrat semibold";
color:white;
background :  #5B8E53;
justify-content:space-between;
.nav-header{
    margin:10px 20px;
}
`