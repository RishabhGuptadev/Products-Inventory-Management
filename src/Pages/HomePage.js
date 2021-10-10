import React,{useState} from 'react'
import { useSelector, useDispatch, Provider } from 'react-redux'
import styled from 'styled-components'
import SingleProduct from '../components/SingleProduct';
import FilterComponent from '../components/FilterComponent';
// import Modal from "react-bootstrap/Modal";
import {Button, Modal} from "react-bootstrap"
import ModalComponent from '../components/ModalComponent';
import Searchbar from '../components/Searchbar';
import Navbar from '../components/Navbar';
export default function HomePage() {
    const {Products,filteredProducts} = useSelector((state)=>state.products);
    const [isModalOpen, setModal] = useState(false);
    return (
        <Wrapper>
        <Navbar/>
        <Searchbar/>
        <div className ="navbar">
        <div className="style-addproduct-button">
        <button className="style-btn" onClick={()=>setModal(true)}>Add Product</button> 
        </div>
        </div>
        <div className="first-box"> 
            <FilterComponent />
        </div> 
            <div className ="second-box"> 
            <ModalComponent isModalOpen = {isModalOpen} setModal={setModal}/>

           {Products.length!==0? filteredProducts.map((product)=>{
            return (
                <SingleProduct {...product}/>
            )
        }) : <div className="style-header" style={{display:"flex", alignItems:"center", justifyContent:"center"}}><h1>No User Found!! Add New Product</h1> </div> } 

            </div> 
                    </Wrapper>
    )
}

const Wrapper = styled.div ` 
margin:0px;
background:#f8f8ff;
.navbar{
    margin:10px 20px;
    display:flex;
    justify-content:space-between;
}
.style-header h1{
    font-family:"Montserrat semibold";
    color: #5B8E23;
    font-size:35px;
}

.style-btn{
    background:transparent;
    color: #5B8E23;
    padding:20px 40px;
    border:1px solid grey;
    border-radius:12px;
    margin:15px 0px;
    font-family:"Montserrat";
    font-size:20px;
    font-weight:400;
    letter-spacing:2px;
}

.style-btn:hover{
    background: #5B8E23;
    color:white;
}

.style-addproduct-button{
    position:absolute; 
    right:10px;
    bottom:25px;
}

@media screen and (max-width:800px){
    .navbar{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
}
`
