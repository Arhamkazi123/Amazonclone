import React from 'react'
import './header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Badge } from '@mui/material';
import CustomizedInputBase from '../components/CustomizedInputBase'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { userContext } from '../Contexts/UserContext'
import {signOut,onAuthStateChanged} from 'firebase/auth'
import { auth } from '../firebase_config'
import SearchBar from './SearchBar';







const Header = () => {

  const {user,setUser} = useContext(userContext)

  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
   })

const Signout = async()=>{
await signOut(auth)
window.location.replace('/')
}




  return (
    <div className='header'>
       <header className='navbar'>
        <div className='navbar__title navbar__item'>
      <Link to='/'>  <img id='logo' src="http://www.userlogos.org/files/logos/ArkAngel06/Amazon.png" style={{height:"10rem",marginTop:"10px"}} /></Link>
      
        </div>
      
        

     <SearchBar/>

     { user? <div className='navbar__item' id='right_elements' onClick={Signout}>SIGN OUT</div> :<Link to='/login' style={{textDecoration:'none',color:'inherit'}}> <div className='navbar__item'  id='right_elements'>LOGIN </div></Link>}
       {user && <div className='navbar__item'  id='right_elements'>ORDERS</div>}
        <div className='navbar__item'  id='right_elements'>PRIME</div>        
       {user && <Link to='/cart' style={{color:'white'}}> <div className='navbar__item'  id='right_elements'> <Badge badgeContent={0} color="primary"><ShoppingBasketIcon/></Badge>  </div> </Link> }
        
    </header>
    </div>
  )
}

export default Header
