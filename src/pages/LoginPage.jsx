import React,{useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import './loginpage.css'
import { auth } from '../firebase_config'
import {signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import { userContext } from '../Contexts/UserContext'

const LoginPage = () => {

  const {setUser} = useContext(userContext)



 onAuthStateChanged(auth,(currentUser)=>{
  setUser(currentUser)
 })

 const [loginEmail,setLoginEmail] = useState('')
 const [loginPassword,setLoginPassword] = useState('')
 const [error,setError] = useState('')
 
 
 
 const login = async ()=>{
 
     
 
     try{ 
     const User = await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
     setLoginEmail('')
     setLoginPassword('')
     window.location.replace('/')
     
     }
     catch(err){
      setError(err.message)
     }
 
     
 }


 





  return (
    <div className='main-login-container'>
      <div className='login-card'>
        
            <label> Email</label>
            <input type="text" onChange={(e)=>{setLoginEmail(e.target.value)}} />
            

            <label> Password</label>
            <input type="password" onChange={(e)=>{setLoginPassword(e.target.value)}} />
            

          
           

            <button onClick={login}>Login</button>

            <p>don't have an account? <Link to='/register'>register</Link></p>
            { error && <p style={{color:'red'}}>{error}</p>}
            
     

      </div>
    </div>
  )
}

export default LoginPage
