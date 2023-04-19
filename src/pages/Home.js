import React from 'react'
import CategoryList from '../components/CategoryList'
import CoverImage from '../components/CoverImage'
import Header from '../components/Header'
import NavBottom from '../components/NavBottom'
import Products from './Products'
import { categoryContext } from '../Contexts/CategoryContext'
import { useState } from 'react'


const Home = () => {

  const [selectedCategory,setSelectedCategory] = useState('')
  

  return (
    
    <div className='home'>
      <Header/>
    <NavBottom/>
    <CoverImage/>

<categoryContext.Provider value={{selectedCategory,setSelectedCategory}}>
<CategoryList/>
    <Products/>
</categoryContext.Provider>
   
    </div>
    

    
    
  )
}

export default Home
