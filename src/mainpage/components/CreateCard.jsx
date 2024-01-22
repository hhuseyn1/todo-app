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
    <form className='bg-white flex flex-col items-center sm:w-[700px] h-screen w-screen sm:h-[350px]  sm:mx-7 justify-center sm:rounded-[13px]' onSubmit={(e)=>createCard(e)}>
    <div className='w-[100%]'>
      <div className="w-full">
        <button
        onClick={()=>{
          setOpenModal("")     
         }}
        className='bg-red-600 w-3 h-3 rounded-full float-right my-0 mt-5 me-5'></button>
      </div>
      <h1 className='font-bold flex justify-center uppercase mt-5 text-[30px]'>Create Card</h1>
      <div className="flex flex-col justify-center items-center text-[20px]"> 
        <div className="flex flex-col">
          <label className="text-[20px] mb-2">Title</label>
          <input type="text" name='title' placeholder='Input your title...' required="True" onChange={(e)=>handleChange(e)} className="w-screnn sm:w-[560px] h-[60px] rounded-[6px] pl-2"/>
        </div>
        <div className="flex flex-col">
          <label className="text-[20px] mb-2 mt-[15px]">Description</label>
          <input type="text" name='description' placeholder='Input your description...' required="True" onChange={(e)=>handleChange(e)} className="w-screnn sm:w-[560px] h-[60px] rounded-[6px] pl-2" />
        </div>
      </div>
      <div className='flex justify-center sm:justify-end text-[20px] font-bold'>
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
