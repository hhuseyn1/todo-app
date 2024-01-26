<<<<<<< HEAD
import { React , useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import MyContext from '../../ContextWrapper'

export default function Navigation() {
  const { mail,setAuthorized } = useContext(MyContext)
  const navigate  = useNavigate()

  return (
    <nav className='flex flex-col-reverse sm:flex-row bg-[#E7E7E7] h-[121px] items-center justify-between'>
        <p className='font-bold my-2 text-xl'>{mail}</p>
=======
import React from 'react'

export default function Navigation({setAuthorized , mail}) {
  return (
    <nav className='flex bg-[#E7E7E7] h-[121px] items-center justify-between'>
        <p className='font-bold text-xl ml-[68px]'>{mail}</p>
>>>>>>> parent of 04ec180 (responsive design part 1)
        <button 
        onClick={() =>{
          setAuthorized(false)
          navigate("/login")
        }}
<<<<<<< HEAD
        className='bg-yellow-400 py-3 px-10 font-bold rounded-[8px] my-5 hover:bg-yellow-500'>Log out</button>
=======
        className='bg-yellow-400 py-3 px-10 font-bold rounded-[8px] mr-[68px] hover:bg-yellow-500'>Log out</button>
>>>>>>> parent of 04ec180 (responsive design part 1)
      </nav>
  )
}
