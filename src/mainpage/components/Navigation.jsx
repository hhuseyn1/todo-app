import { React , useContext} from 'react'
import MyContext from '../../ContextWrapper'

export default function Navigation() {
  const { mail,setAuthorized } = useContext(MyContext)
  return (
    <nav className='flex flex-col-reverse sm:flex-row bg-[#E7E7E7] h-[121px] items-center justify-between'>
        <p className='font-bold my-2 text-xl sm:ml-[68px]'>{mail}</p>
        <button 
        onClick={() =>{
          setAuthorized(false)
        }}
        className='bg-yellow-400 py-3 px-10 font-bold rounded-[8px] my-5 sm:mr-[68px] hover:bg-yellow-500'>Log out</button>
      </nav>
  )
}
