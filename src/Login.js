import React, { useState } from 'react';
import { auth } from './firebase';
import './Login.css';
import {useDispatch} from 'react-redux';
import { login } from './features/userSlice';


function Login() {
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //hooks
  const dispatch = useDispatch()

  const loginToApp = (e) => {
     //logic to login the user
     e.preventDefault()
     auth.signInWithEmailAndPassword(email,password).then((userAuth) =>{
       //redux
       dispatch(login({
         email: userAuth.email,
         uid: userAuth.uid,
         displayName: userAuth.displayName
       }))

     })
  }
  const register = () => {
   //logic to register the user
   if(!name){
     return alert('Please provide full name')
   }
   auth.createUserWithEmailAndPassword(email, password).then((userAuth)=>{
     //redux
     dispatch(login({
       email: userAuth.user.email,
       uid: userAuth.user.uid,
       displayName: userAuth.user.displayName
     }))
   })
 }



  return (
    <div className='login_container'>
        <img src='https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png' alt='' />
    <form>
      <input vaule={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Full Name Required if registering'/>
      <input vaule={profilePic} onChange={(e) => setProfilePic(e.target.value)} type='text' placeholder='Profile Pic (Optional)'/>
      <input vaule={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email'/>
      <input vaule={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password'/>
      <button type='submit' >Sign In</button>
    </form>
    <p>Not a member? <span onClick={register} className='register_option'>Register Now.</span></p>
    </div>

  )
}

export default Login;
