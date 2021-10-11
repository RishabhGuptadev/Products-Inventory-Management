import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import styled from "styled-components"
import { searchProduct } from '../CartActions/CartActions';
export default function Searchbar() {
    const [text,setText] = useState("");
    const dispatch =  useDispatch();
    const handleSearch = (e) =>{
        e.preventDefault();
       console.log(text);
       dispatch(searchProduct(text));
    }
    return (
        <Wrapper>
        <form onSubmit={handleSearch} className="input-style">
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={(e)=>handleSearch(e)}>Search</button> 
        </form>
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin:40px 0px;

.input-style input{
    padding:5px 60px;
    border-radius:12px;
}

.input-style button { 
    padding:4px 40px;
    border-radius:12px;
    margin:0px 10px;
    background:transparent;
    color: #5B8E23;
    border:1px solid grey;
    font-family:"Montserrat";
    font-size:20px;
    letter-spacing:2px;
}

.input-style button:hover{
    background: #5B8E23;
    color:white;
}

@media screen and (max-width:900px){
    .input-style{
        display:flex;
        justify-content:center;
        flex-direction:column;
    }
    .input-style button {
        margin-top:10px;
    }
}
`