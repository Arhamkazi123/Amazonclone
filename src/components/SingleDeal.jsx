import React from 'react'
import './singledeal.css'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { SingleProductContext } from '../Contexts/SingleProductContext';


const SingleDeal = (props) => {

  const {setProduct} = useContext(SingleProductContext);

  const onCheckSingleProductHandler = ()=>{
      setProduct(props.item)
  }


  return (
    <div className='main-single-deal-container'>
      <div className='img-container'>
        <img src={props.item.image} alt="" style={{height:'28vh',padding:'10px',width:'15vw',borderRadius:'10px',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} />
      </div>
      <div className='details-container'>
         <h1 id='title'>{props.item.title}</h1>
         <h1 id='price'>{props.item.price} $</h1>

         <h1 id='category'>category: {props.item.category}</h1>
      </div>
<div className='button-container'>
<Link to={`./${props.item.id}`}><Button variant="contained" style={{height:'6vh',width:'10vw',backgroundColor:'#37475A',color:'#FED815',fontFamily:'arial'}} onClick={onCheckSingleProductHandler} >CHECK ITEM</Button></Link>

{/* <button style={{height:'5vh',width:'12vw',verticalAlign:"center"}}>CHECK ITEM</button> */}
</div>
    </div>
  )
}

export default SingleDeal
