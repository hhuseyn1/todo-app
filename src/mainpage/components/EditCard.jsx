import React, { useState } from 'react'

export default function EditCard({setOpenModal,cards,setCards,activeCard}) {

  const [formData, setFormData] = useState({
    title: activeCard.title,
    description : activeCard.description
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const editCard = (e)=>{
    e.preventDefault()
    const editedCards = cards.map((card) =>
      card === activeCard ? { ...card, ...formData } : card
    )
    setCards(editedCards)
    setOpenModal("")
  }
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
    <div className='mx-auto bg-slate-100 w-[700px] h-[421] rounded-[13px]'>
      <div className="flex justify-end">
        <button onClick={()=>{
          setOpenModal("")
        }}
         className='bg-red-700 text-slate-100 w-[20px] h-[20px] rounded-full mt-1 mr-2 text-[15px] flex justify-center items-center'>x</button>
      </div>
      <h1 className='font-bold flex justify-center uppercase text-[30px]'>Edit Card</h1>
      <div className="flex flex-col justify-center items-center text-[20px]"> 
        <div className="flex flex-col">
          <label className="text-[20px] mb-2">Title</label>
          <input 
          name="title"
          value={formData.title}
          onChange={(e) => handleChange(e)}
          type="text" required="True" placeholder='Input your title...'  className="w-[560px] h-[60px] rounded-[6px] pl-2"/>
        </div>
        <div className="flex flex-col">
          <label className="text-[20px] mb-2 mt-[15px]">Description</label>
          <input
          name="description"
          value={formData.description}
           onChange={(e) => handleChange(e)}
           type="text" required="True" placeholder='Input your description...' className="w-[560px] h-[60px] rounded-[6px] pl-2"/>
        </div>
      </div>
      <div className='flex justify-end text-[20px] font-bold'>
        <button className='bg-slate-200 w-[124px] h-[61px] rounded-[15px] m-5'
         onClick={()=>{
            setOpenModal("")        
          }}>Cancel</button>
        <button 
        onClick={(e) => editCard(e)}
        type="submit" className='bg-yellow-400 w-[124px] h-[61px] rounded-[15px] m-5'>Submit</button>
      </div>
    </div>
  </div>
  );
}
