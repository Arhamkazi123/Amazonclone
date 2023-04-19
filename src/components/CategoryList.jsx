import React, { useEffect,useState } from 'react'
import CategoryItem from './CategoryItem'
import './categorylist.css'

const CategoryList = () => {

  const [ categories,setCategories] = useState([])
 


    async function fetchCategories(){
      const response =  await fetch(`https://fakestoreapi.com/products/categories`)
      const data = await response.json()
      setCategories(data)

       
    }

    useEffect(()=>{
        fetchCategories()
    },[])

   

    

  return (
    <div className='main-category-container'>
      {
          categories.map((item)=><CategoryItem props={item}/>)
      }
    </div>
  )
}

export default CategoryList
