import React,{useState,useEffect} from 'react'
import { doc, updateDoc ,deleteDoc} from "firebase/firestore"; 
import DeleteIcon from '@mui/icons-material/Delete';
import './singlecartproduct.css'
import { db } from '../firebase_config';

const SingleCartProduct = (props) => {
  const id = props.item.id

    const [quantity,setQuantity] = useState(props.item.quantity)
  

  

    const incrementHandler = ()=>{
        setQuantity((prevState)=>{ return (prevState+1)})
      }
      
      const decrementHandler = ()=>{

        if(quantity<=1){
            return;
        }
        setQuantity((prevState)=>{ return (prevState-1)})
      }

      const updateHandler = async()=>{
       
        const prodRef = doc(db,"cart",id)
        await updateDoc(prodRef,{
          "quantity":quantity
        })
        

      }


  const deleteHandler = async()=>{

    await deleteDoc(doc(db,"cart",id))
    
    

  }

  

      




  return (
    <div className='single-cart-item-container'>
      <div className='cart-img-container'>
        <img src= {props.item.image}
        style={{height:'150px',width:'200px',margin:'20px',borderRadius:'5px'}}
        alt="" />
      </div>

      <div className='single-cart-info-container'>
        <h1>PRICE: {props.item.price} $</h1>
        <h2>QUNATITY: {props.item.quantity}</h2>
      </div>


      <div className='cart-quantity-btns' style={{display:'flex',alignItems:'center'}}>
                    <button onClick={incrementHandler} style={{padding:'5px',backgroundColor:'transparent',borderRadius:'50%',border:'1px solid black',fontSize:'18px'}}>+</button>
                   <p style={{padding:'10px'}}>{quantity}</p>
                   <button onClick={decrementHandler}  style={{padding:'5px',backgroundColor:'transparent',borderRadius:'50%',border:'1px solid black',fontSize:'18px'}}>-</button>
                   <button id='cart-btn' style={{marginLeft:'10px',padding:'10px',fontWeight:'600',cursor:'pointer',letterSpacing:'2px'}} onClick={updateHandler}>UPDATE</button>
                   <button id='cart-btn' style={{marginLeft:'10px',padding:'5px',fontWeight:'600',cursor:'pointer'}} onClick={deleteHandler}><DeleteIcon/></button>

                    </div>

    </div>
  )
}

export default SingleCartProduct
