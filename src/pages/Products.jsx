import React, { useEffect, useState,useContext } from 'react'
import ProductItem from '../components/ProductItem'
import './product.css'
import { categoryContext } from '../Contexts/CategoryContext'
import {Link} from 'react-router-dom'

const Products = () => {


  const {selectedCategory} = useContext(categoryContext)

  const [products,setProducts] = useState([])

  let productUrl = selectedCategory? `https://fakestoreapi.com/products/category/${selectedCategory}`:`https://fakestoreapi.com/products?limit=5`;
  


 

 useEffect(()=>{
  async function fetchProducts(){
    const response  = await fetch(productUrl)
    const data = await response.json()
    setProducts(data)
    
   }
fetchProducts()
 },[selectedCategory])

  return (
    <div className='main-product-container'>
       <h1 style={{textAlign:'center',paddingTop:'10px'}}>PRODUCTS</h1>

       <div className='product-container'>
        {
          products.map((item,id)=><ProductItem props = {item} key = {id}/>)
        }
       </div>

      <Link to='/deals'> <h2 style={{textAlign:'end',marginRight:'5rem',textDecoration:'underline',cursor:'pointer',fontSize:'18px',padding:'10px',color:'gray'}}>MORE PRODUCTS</h2></Link>
    </div>
  )
}

export default Products
