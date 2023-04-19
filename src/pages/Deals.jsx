import React from 'react'
import Header from '../components/Header'
import NavBottom from '../components/NavBottom'
import SingleDeal from '../components/SingleDeal'
import './deals.css'
import {useState,useEffect} from 'react'

const Deals = () => {

  const [products,setProducts] = useState([])
  const [arraySize,setArraySize] = useState(0)
  
  async function fetchProducts(){
    const response  = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProducts(data)
    setArraySize(data.length)

    
   }

   useEffect(()=>{
    fetchProducts()
     },[])

    

  return (
    <div className='main-deals-container'>
      <Header/>
      <NavBottom/>

<h1>PRODUCTS</h1>
<h2> {arraySize} results fetched</h2>

<div className='deals'>
{
  products.map((item)=><SingleDeal item={item}/>)
}
</div>
    

    </div>
  )
}

export default Deals
