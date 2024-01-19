import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"

export default function CreateCard({mail,setCards,setOpenModal}) {
  const [formData,setFormData] = useState({})

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData((prevForm)=>({
      ...prevForm,
      [name]:value,
      author:mail,
      id: uuidv4(),
    }));
    
  };

  const createCard = (e) => {
    e.preventDefault();
    setCards((prevValue)=>[...prevValue,formData]);
    setOpenModal("")
  }
 
  return (
    <form className='flex flex-col justify-center items-center h-screen' onSubmit={(e)=>createCard(e)}>
    <div className='mx-auto bg-slate-100 w-[700px] h-[421] rounded-[13px]'>
      <div className="flex justify-end">
        <button
        onClick={()=>{
          setOpenModal("")     
         }}
        className='bg-red-700 text-slate-100 w-[20px] h-[20px] rounded-full mt-1 mr-2 text-[15px] flex justify-center items-center'>x</button>
      </div>
      <h1 className='font-bold flex justify-center uppercase text-[30px]'>Create Card</h1>
      <div className="flex flex-col justify-center items-center text-[20px]"> 
        <div className="flex flex-col">
          <label className="text-[20px] mb-2">Title</label>
          <input type="text" name='title' placeholder='Input your title...' required="True" onChange={(e)=>handleChange(e)} className="w-[560px] h-[60px] rounded-[6px] pl-2"/>
        </div>
        <div className="flex flex-col">
          <label className="text-[20px] mb-2 mt-[15px]">Description</label>
          <input type="text" name='description' placeholder='Input your description...' required="True" onChange={(e)=>handleChange(e)} className="w-[560px] h-[60px] rounded-[6px] pl-2" />
        </div>
      </div>
      <div className='flex justify-end text-[20px] font-bold'>
        <button 
        onClick={()=>{
          setOpenModal("")
        }}
         className='bg-slate-200 w-[124px] h-[61px] rounded-[15px] m-5'>Cancel</button>
        <button
          onClick={(e)=>{
            createCard(e)
          }}
         className='bg-yellow-400 w-[124px] h-[61px] rounded-[15px] m-5'>Create</button>
      </div>
    </div>
  </form>
  )
}
