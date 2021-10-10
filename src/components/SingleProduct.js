import React,{useState} from 'react'
import styled from 'styled-components'
import Rating from './Rating'
import {FaArrowAltCircleUp,FaArrowAltCircleDown} from 'react-icons/fa'
import EditModal from './EditModalComponent';
import EditModalComponent from './EditModalComponent';
export default function SingleProduct({id,name,image,Username,price,quantity,rating}) {
    const [qty, setQty] = useState(0);
    const [isModalOpen,setModal] = useState(false);
    const handleEdit =()=>{
      setModal(true);
    }
    const increase =()=>{
        if(qty<quantity) {
            setQty(qty+1);
        }
    }

    const decrease =()=>{
        if(qty>0){
            setQty(qty-1);
        }
    }
    
    return (
        <Wrapper>
        <div className="inner-box">
        <div className="style-image">
        <img src={image} alt="productImage"/>
    </div>
    <div className="style-name"> 
    <h4>{Username}</h4>
    <h4>{name}</h4> 
    <Rating rating={rating}/>
    </div>
     <div style={{flex:"0.5"}}>
     <h4>${price}</h4></div>
     <div>
     <button className="qty-btn style-btn" onClick={()=>handleEdit()}>Edit</button>
     </div>
     <div> 
     <EditModalComponent id={id} isModalOpen={isModalOpen} setModal={setModal} />
     </div>
    <div className="qty-btn"> 
     <button onClick={increase}><FaArrowAltCircleUp/></button>
     <h4 style={{margin:"8px 0px"}}>{qty}</h4>
     <button onClick={decrease}><FaArrowAltCircleDown/></button>
    </div>
        </div>
             </Wrapper>
    )
}

const Wrapper = styled.div`
margin : 40px 20px;
display:flex;
align-items:center;
justify-content: center;
height:150px;
font-family:"Montserrat semibold";
color: #5B8E23;
padding:0px 20px;

.inner-box{
    width:60%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.style-image{
    height:100px;
}
.style-name{
    width:200px;

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
}
.style-name h4{
    margin:0px 0px;
    
}
.style-image img{
    height:125px;
    width:125px;
}
.qty-btn{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border: 1px solid grey;
    padding:10px;
    border-radius:12px;
}
.qty-btn button{
    background:transparent;
    border:none;
    font-size:15px;
}
.style-btn{
    font-family:"Montserrat semibold";
    color: #5B8E23;
    padding:0px 20px;
}
.
`
