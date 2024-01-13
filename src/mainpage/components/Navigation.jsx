import React from 'react'

export default function Navigation({setAuthorized , mail}) {
  return (
    <nav className='flex bg-[#E7E7E7] h-[121px] items-center justify-between'>
        <p className='font-bold text-xl ml-[68px]'>{mail}</p>
        <button 
        onClick={() =>{
          setAuthorized(false)
        }}
        className='bg-yellow-400 py-3 px-10 font-bold rounded-[8px] mr-[68px] hover:bg-yellow-500'>Log out</button>
      </nav>
  )
}
