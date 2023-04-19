import React, { useState } from 'react'
import './coverimage.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { userContext } from '../Contexts/UserContext'

const CoverImage = () => {

  

const {user} = useContext(userContext)

  return (
     <div className='main-cover-container'> 
    <div className='coverimage'>
      <img src="https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg"  alt="" />

      <div className='buttons'>

       
     {!user && <button><Link to='/register'style={{color:'inherit',textDecoration:'none'}} >Register</Link></button>}
      {!user && <button><Link to='/login'style={{color:'inherit',textDecoration:'none'}} >Login</Link></button>}

    

        
      </div>
      </div>
      </div>
      
    
  )
}

export default CoverImage
