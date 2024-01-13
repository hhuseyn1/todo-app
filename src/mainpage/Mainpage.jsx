import React from 'react'
import Navigation from './components/Navigation'
import Card from './components/Cards'

function Mainpage({setAuthorized , mail}) {
  return (
    <div className='h-screen'>
      <Navigation setAuthorized={setAuthorized} mail={mail}/>
      <button className='bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 ml-[68px] mt-[20px]'>Create card</button>
      <div className='flex flex-wrap px-[58px]'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Mainpage