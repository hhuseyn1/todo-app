import React from 'react'
import Navigation from './components/Navigation'
import Card from './components/Cards'
import { useState } from 'react'
import EditCard from './components/EditCard'
import DeleteCard from './components/DeleteCard'
import CreateCard from './components/CreateCard'  

function Mainpage({setAuthorized , mail}) {
  const [createOpened, openCreateView] = useState(false)
  const [editOpened, openEditView] = useState(false)
  const [deleteOpened, openDeleteView] = useState(false)
  return (
    <div className='h-screen'>
      <Navigation setAuthorized={setAuthorized} mail={mail}/>
      <button onClick={()=>{
        openCreateView(true)
      }} className='bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 ml-[68px] mt-[20px]'>Create card</button>
      <div className='flex flex-wrap px-[58px]'>
        <Card openEditView={openEditView} openDeleteView={openDeleteView}/>
        <Card openEditView={openEditView} openDeleteView={openDeleteView}/>
        <Card openEditView={openEditView} openDeleteView={openDeleteView}/>
        <Card openEditView={openEditView} openDeleteView={openDeleteView}/>
      </div>
       {createOpened && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <CreateCard openCreateView={openCreateView} />
        </div>
      )}
      {editOpened && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <EditCard openEditView={openEditView} />
        </div>
      )}
      {deleteOpened && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <DeleteCard openDeleteView={openDeleteView} />
        </div>
      )}
    </div>
  )
}

export default Mainpage