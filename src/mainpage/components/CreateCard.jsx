import React, { useState } from 'react'

function CreateCard({dispatch,setCards, mail}) {
  const [formData, setFormData]=useState({})

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData((prevForm)=>({
      ...prevForm,
      [name]:value,
      author:mail,
    }));
  }

  // const fs = require('fs');
  // const path = require('C:\\Users\\husey\\Desktop\\todo-app\\src\\log');
  
  const createCard = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if(response.ok){
        const data = await response.json();
        dispatch({ type: '' });
      }
    } catch (error) {
      console.error('Error creating card:', error.message);
      // const log = `Error creating card: ${error.message}\nTime: ${new Date().toISOString()}\n\n`;
      // fs.appendFile(path.join(__dirname, 'error.log'), log, (err) => {
      //   if (err) console.log('Failed to write to log file', err);
      // });
    }
  };
  

  return (
<<<<<<< HEAD
    <form  className='flex flex-col items-center sm:w-[700px] w-screen sm:h-[350px] h-screen justify-center rounded-none sm:rounded-[13px] bg-white'>
        <div className='w-[100%]'>
            <button className='bg-red-600 rounded-full float-right my-0 mx-5 h-7 w-7 text-white' 
            onClick={()=>{
              dispatch({ type: '' });
              }}>X</button>
        </div>
          <h1 className='text-3xl font-bold mb-5'>CREATE CARD</h1>
          <div className='flex flex-col w-[80%]'>
            <label htmlFor="" className='text-zinc-600'>Title:</label>
            <input required="True" 
              name="title"
              onChange={(e)=>handleChange(e)} 
              className='border border-zinc-300 rounded-[6px] my-2 h-[40px] p-1'
            />
            <label htmlFor="" className='text-zinc-600'>Description:</label>
            <input 
              name="description"
              onChange={(e)=>handleChange(e)} 
              required="True" 
              className='border border-zinc-300 rounded-[6px] my-2 h-[40px] p-1'
            />
            <div className='flex justify-end h-[20%] items-center mt-[20px]'>
              <button className='border border-zinc-300 py-2 px-5 rounded-[5px] font-bold hover:bg-[#DFDFDF]'
              onClick={()=>{
                dispatch({ type: '' });
              }}
              >Close</button>
              <button
              onClick={(e)=>{
                createCard(e)
              }}
               className='bg-yellow-400 py-2 px-5 rounded-[5px] font-bold mx-2 hover:bg-[#F6AB1A]'>Create</button>
            </div>
          </div>
        </form>
=======
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
>>>>>>> parent of 04ec180 (responsive design part 1)
  )
}

export default CreateCard