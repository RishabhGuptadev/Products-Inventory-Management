import products from "../Products";
import { ADD_NEW_PRODUCT, ADD_PRODUCT_TO_CART, EDIT_PRODUCT, FILTER_PRODUCTS_BY_QUANTITY, FILTER_PRODUCT_BY_PRICE, SEARCH_PRODUCT } from "../types/types";
export const CartReducer = (state={Products:products, filteredProducts: []}, action) =>{
        const  {Products} = state;
    if(action.type === ADD_NEW_PRODUCT){
       Products.splice(Products.length,0,action.payload);

        return {...state, filteredProducts:Products}
    }

    if(action.type === EDIT_PRODUCT){
        Products.splice(action.payload.id-1,1,action.payload.editProduct);
        console.log(action.payload.id)
        return {...state, filteredProducts:Products}
    }
    if(action.type === SEARCH_PRODUCT){
        const searchedProducts = Products.find((product)=>product.Username.toLowerCase() === action.payload.toLowerCase())
        if(searchedProducts){
            return {...state,filteredProducts:[searchedProducts]}
        }
        else { 
            Products.splice(0,Products.length);
            return {...state, filteredProducts:Products}
        }
        
    }
    if(action.type === FILTER_PRODUCT_BY_PRICE){
        const filterProducts = Products.filter((product)=> product.price<=action.payload);
        console.log(filterProducts);
        return {...state, filteredProducts:filterProducts}
    }
    if(action.type === FILTER_PRODUCTS_BY_QUANTITY){
        const filterProductsByQty = Products.filter((product)=>product.quantity <=action.payload);
     
        return {...state, filteredProducts : filterProductsByQty}
    }
    return {...state}
}

