import React,{useState,useRef,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './registerpage.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase_config';


const RegisterPage = () => {

const [registeredEmail,setRegisteredEmail] = useState('')
const [registeredPassword,setRegisteredPassword] = useState('')
const [registerConfirmPassword,setRegisterConfirmPassword] = useState('')
const [passwordError,setPasswordError] = useState(false)



const register = async ()=>{

    if(registeredPassword!==registerConfirmPassword){
        setPasswordError(true)
        return
    }

    try{ 
    const user = await createUserWithEmailAndPassword(auth,registeredEmail,registeredPassword)
    setRegisteredEmail('')
    setRegisteredPassword('')
    setRegisterConfirmPassword('')
    window.location.replace('/login')
    }
    catch(err){
        console.log(err.message)
    }

    setPasswordError(false)
}


  return (
      <div className='main-register-container'>
    <div className='register-card'>

   
      
          <label> Email</label>
          <input type="email" onChange={(e)=>{setRegisteredEmail(e.target.value)}} value={registeredEmail} />
          

          <label> Password</label>
          <input type="password" onChange={(e)=>{setRegisteredPassword(e.target.value)}} value={registeredPassword}/>
          

          <label> Confirm Password </label>
          <input type="password" onChange={(e)=>{setRegisterConfirmPassword(e.target.value)}} value={registerConfirmPassword}/>
         

          <button onClick={register}>Register</button>

          <p>already registered? <Link to='/login'>login</Link></p>
        { passwordError && <p style={{color:'red'}}>passwords dont match</p>}
       
        
   

    </div>
  </div>
  )
}

export default RegisterPage
