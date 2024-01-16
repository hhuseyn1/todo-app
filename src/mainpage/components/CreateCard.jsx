import React from 'react'

export default function CreateCard() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
    <div className='mx-auto bg-slate-100 w-[700px] h-[421] rounded-[13px]'>
      <div className="flex justify-end">
        <button className='bg-red-700 text-slate-100 w-[20px] h-[20px] rounded-full mt-1 mr-2 text-[15px] flex justify-center items-center'>x</button>
      </div>
      <h1 className='font-bold flex justify-center uppercase text-[30px]'>Create Card</h1>
      <div className="flex flex-col justify-center items-center text-[20px]"> 
        <div className="flex flex-col">
          <label className="text-[20px] mb-2">Title</label>
          <input type="text" placeholder='Input your title...'  className="w-[560px] h-[60px] rounded-[6px] pl-2"/>
        </div>
        <div className="flex flex-col">
          <label className="text-[20px] mb-2 mt-[15px]">Description</label>
          <input type="text" placeholder='Input your description...' className="w-[560px] h-[60px] rounded-[6px] pl-2" />
        </div>
      </div>
      <div className='flex justify-end text-[20px] font-bold'>
        <button className='bg-slate-200 w-[124px] h-[61px] rounded-[15px] m-5'>Cancel</button>
        <button className='bg-yellow-400 w-[124px] h-[61px] rounded-[15px] m-5'>Create</button>
      </div>
    </div>
  </div>
  )
}
