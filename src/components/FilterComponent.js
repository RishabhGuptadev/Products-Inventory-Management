import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { filterByPrice,filterByQty } from '../CartActions/CartActions';
import styled from "styled-components";
export default function FilterComponent() {
    const {filteredProducts,Products} = useSelector((state)=>state.products);
    const filterArray = Products.map((product)=>product.price);
    const maxPrice = Math.max(...filterArray) +1;
    const filterQuantity = Products.map((product)=>product.quantity);
    const maxQty = Math.max(...filterQuantity) ;
    const [Qty, filterQty] = useState(maxQty);
    const [priceFilter,setPriceFilter] =useState(maxPrice); 
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(filterByPrice(priceFilter));
    },[priceFilter]);

    useEffect(()=>{
        dispatch(filterByQty(Qty));
    },[Qty])
    return (
        <Wrapper className="Filter">
           
                <form style={{display:"flex", justifyContent:"space-between",width:"30vw"}}>
                <h4>Price : </h4>
                    <input type="range" min="0" max={maxPrice} value={priceFilter} onChange={(e)=>setPriceFilter(e.target.value)}/>
                    <h4>Quantity: </h4>
                    <input type="range" min="0" max={maxQty} value={Qty} onChange={(e)=>filterQty(e.target.value)}/>
                </form>
            </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-around;
`
