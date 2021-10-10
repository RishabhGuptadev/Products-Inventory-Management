import { ADD_PRODUCT_TO_CART,ADD_NEW_PRODUCT, EDIT_PRODUCT,SEARCH_PRODUCT,FILTER_PRODUCT_BY_PRICE,
FILTER_PRODUCTS_BY_QUANTITY } from "../types/types";

export const addNewProduct = (addedProduct) => async(dispatch) =>{
    dispatch({type: ADD_NEW_PRODUCT,payload:addedProduct})
}

export const EditProduct = (editProduct,id)=>async(dispatch)=>{
    dispatch({type:EDIT_PRODUCT, payload:{editProduct,id}});
}

export const searchProduct = (username) => async(dispatch)=>{
    dispatch({type:SEARCH_PRODUCT, payload:username})
}

export const filterByPrice =(price)=>async(dispatch)=>{
    dispatch({type:FILTER_PRODUCT_BY_PRICE, payload:price});
}

export const filterByQty = (qty) =>async(dispatch)=>{
    dispatch({type:FILTER_PRODUCTS_BY_QUANTITY, payload: qty})
}
