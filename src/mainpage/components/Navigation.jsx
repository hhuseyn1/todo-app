import { React , useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import MyContext from '../../ContextWrapper'

export default function Navigation() {
  const { mail,setAuthorized } = useContext(MyContext)
  const navigate  = useNavigate()

  return (
    <nav className='flex flex-col-reverse sm:flex-row bg-[#E7E7E7] h-[121px] items-center justify-between'>
        <p className='font-bold my-2 text-xl'>{mail}</p>
        <button 
        onClick={() =>{
          setAuthorized(false)
          navigate("/login")
        }}
        className='bg-yellow-400 py-3 px-10 font-bold rounded-[8px] my-5 hover:bg-yellow-500'>Log out</button>

      </nav>
  )
}
