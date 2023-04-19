import React,{useEffect,useState,useContext  } from 'react'
import SingleCartProduct from '../components/SingleCartProduct';
import './cart.css'
import {db} from '../firebase_config'
import {collection,doc,getDocs} from 'firebase/firestore'
import { userContext } from '../Contexts/UserContext';

const Cart = () => {

const {user} = useContext(userContext)
const cartCollectionRef = collection(db,"cart")
const [cartItems,setCartItems] = useState([])
let totalPrice = 0;


useEffect(()=>{

const getCartItems = async ()=>{
const data  = await getDocs(cartCollectionRef)


const refinedCart = data.docs.map((doc)=>({...doc.data(),id:doc.id}))
// const userCart = refinedCart
const result = refinedCart.filter((item)=>item.uuid === user.uid)
setCartItems(result)
// setCartItems(data.docs.map((doc)=>({...doc.data(),id:doc.id})))

}

getCartItems()

},[cartItems])

for(let i=0;i<cartItems?.length;i++){
totalPrice+=(cartItems[i].price*cartItems[i].quantity);
}

totalPrice = totalPrice.toFixed(2)






  return (
    <div className='main-cart-container'>
        
        <div className='product-cart-container'>
    <h1 style={{marginLeft:'50px',marginTop:'25px'}} id='topText'>My Cart</h1>

    {
        cartItems?.map((item)=><SingleCartProduct item={item} />)
       


    }
    
    {/* <SingleCartProduct/>
    <SingleCartProduct/>
    <SingleCartProduct/>
    <SingleCartProduct/> */}


    <h1>Total:{totalPrice}$</h1>
    <button id='checkout-btn'>CHECKOUT</button>
        </div>


    </div>
  )
}

export default Cart;