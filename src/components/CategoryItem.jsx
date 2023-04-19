import React, { useContext } from 'react'
import './categoryitem.css'
import { categoryContext } from '../Contexts/CategoryContext'

const CategoryItem = (props) => {

 const {setSelectedCategory} = useContext(categoryContext)

  const setCategoryItem = ()=>{
    setSelectedCategory(props.props)
  }

  

  return (
    <div className='category-container' onClick={setCategoryItem}>
      <h1>{props.props}</h1>
    </div>
  )
}

export default CategoryItem
