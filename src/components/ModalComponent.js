import React,{useState} from 'react'
import {Button, Modal} from "react-bootstrap"
import { useDispatch,useSelector } from 'react-redux';
import {addNewProduct} from "../CartActions/CartActions"
import Products from '../Products';
export default function ModalComponent({isModalOpen,setModal}) {
     const [userName, setUserName] = useState("");
    const [name,setName] = useState("");
    const [description,setDesc] = useState("");
    const [price,setPrice] = useState(0);
    const [qty,setQty] = useState(0);
    const [image,setImage] = useState([]);
    const [rating,setRating] =useState(0);
    const dispatch = useDispatch();
    
    const closeModal =() =>{
        setModal(false);
    }
    const count = Products.length;
    const handleSubmit = (e) =>{
        e.preventDefault();
        closeModal();
        const addedProduct = {
            id:count+1,
            Username : userName,
            name:name,
            description:description,
            price:price,
            quantity:qty,
            rating:rating,
            image:image
        }
        console.log(addedProduct)
        dispatch(addNewProduct(addedProduct));

    }

    const handleImage =(e)=>{
        e.preventDefault();
        setImage(e.target.files[0]);
    }

    return (
        <div>
        <Modal show={isModalOpen} onHide={setModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <input type= "text" placeholder="UserName" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            <input type= "text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type= "text" placeholder="Description" value={description} onChange={(e)=>setDesc(e.target.value)}/>
            <input type= "number" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <input type= "number" placeholder="Quantity" value={qty} onChange={(e)=>setQty(e.target.value)}/>
            <input type="number" placeholder="Rating" value={rating} onChange={(e)=>setRating(e.target.value)}/>
            <input type="file" onChange={(e)=>handleImage(e)}/>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
