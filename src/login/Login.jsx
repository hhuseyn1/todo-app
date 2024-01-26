import React from 'react'
import LoginCard from './components/LoginCard'
import { useLocation } from 'react-router-dom'

<<<<<<< HEAD
function Login() {
  const location  = useLocation();
  return (
    <div className='flex justify-center items-center h-screen'>
        <LoginCard/>
=======
function Login({setAuthorized,mail,setMail}) {
  return (
    <div className='flex justify-center items-center h-screen'>
      <LoginCard setAuthorized = {setAuthorized} mail = {mail} setMail={setMail}/>
>>>>>>> parent of 04ec180 (responsive design part 1)
    </div>
        
  )
}

export default Login