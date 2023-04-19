import React, { useState } from 'react'
import './productitem.css'


const ProductItem = (props) => {


  const [hovered,setHovered] = useState(false)

  let trimmedTitle;
if(props.props.id!==5){ 
  trimmedTitle = props.props.title.substring(0,20)
}

else{
  trimmedTitle = props.props.title.substring(0,19)
}
    
   
  return (
    <div className='main-card-container'>
      <div className='image-container'>
        <img src={props.props.image} alt="" style={{maxHeight:'150px',width:'150px',borderRadius:'10px'}} />
      </div>
      <div className='info-container'>
        <h1 style={{textAlign:'center'}}>{trimmedTitle}</h1>
        <h1 style={{textAlign:'center',fontSize:'32px',color:'#a7640d'} }  >${props.props.price}</h1>
       
      </div>
    </div>
  )
}

export default ProductItem
