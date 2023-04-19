import React from 'react'
import Header from '../components/Header'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import './singleproductpage.css'
import {Link} from 'react-router-dom'
import { useContext,useState } from 'react';
import { SingleProductContext } from '../Contexts/SingleProductContext';
import { userContext } from '../Contexts/UserContext';
import {db} from '../firebase_config'
import { collection, addDoc,setDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';






const SingleProductPage = () => {

  const [product,setProduct] = useState([])

  const {id} = useParams();
  

  useEffect(()=>{
      async function fetchIdWiseProducts(){
      
      

        const response  = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    console.log(data)
    setProduct(data)
   
      }

      fetchIdWiseProducts()
  },[])

  const addItemsToCartHandler = async ()=>{
    const cartCollectionRef = collection(db,'cart')

    const newDoc = await addDoc(cartCollectionRef,{
      pid:product.id,
      price:product.price,
      quantity:quantity,
      uuid:user.uid,
      image:product.image
    })

   
    
    
  }


  
  

const {user} = useContext(userContext)
const [quantity,setQuantity] = useState(1)



const incrementHandler = ()=>{
  setQuantity((prevState)=>{ return (prevState+1)})
}

const decrementHandler = ()=>{
  setQuantity((prevState)=>{ return (prevState-1)})

}






  return (
    <div className='main-single-container'>
        <Header/>

        <div className='backtrack-container'>
           <Link to='/deals'><ArrowBackIcon style={{fontSize:'44px',color:'black'}} id='backtrack-element'/></Link> 
            <Link to='/'><HomeIcon style={{fontSize:'44px',color:'black'}} id='backtrack-element'/></Link>
        </div>

        <div className='single-product-container'>

            <div className='image-container'>
                <img src={product.image} alt="" />
            </div>

            <div className='info-container' style={{width:'90%'}} >
                    <h1 style={{fontSize:'32px'}}>{product.title}</h1>
                    <h1 style={{fontSize:'18px'}}>{product.category}</h1>

                    
                <h1 style={{fontSize:'32px',marginTop:'15px',marginBottom:'20px'}}>PRICE: {product.price} $</h1>

                   <div className='quantity-btns' style={{display:'flex',alignItems:'center'}}>
                    <button onClick={incrementHandler}>+</button>
                   <p style={{padding:'10px'}}>{quantity}</p>
                   <button onClick={decrementHandler}>-</button>
                    </div>
                
                   
                   <button disabled={user? false:true} style={{height:'50px',width:'120px',marginTop:'10px',backgroundColor:'white',padding:'5px',cursor:'pointer'}} onClick={addItemsToCartHandler} >ADD TO CART</button>
                   <h1 style={{marginTop:'30px'}}>Description</h1>
                   <p style={{marginTop:'10px'}}>{product.description}</p>

                   {!user && <p style={{color:'red',fontSize:'24px',marginTop:'10px'}}>please login to add items to cart</p> }

            </div>

        </div>
      
    </div>
  )
}

export default SingleProductPage
