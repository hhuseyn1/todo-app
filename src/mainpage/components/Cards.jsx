import React from 'react'


export default function Cards() {
  return (
    <>
        <div className='flex h-screen justify-center items-center'>
            <div className='w-[560px] h-[330px]'>
            <div className='bg-slate-200 h-3/4 rounded-t-[5px]'>
                <h1 className='font-bold text-[36px] ml-[15px]'>Card Title</h1>
                <p className='text-[16px] mx-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
                <div className='bg-gray-400 h-1/4 flex justify-end items-center rounded-b-[5px]'>
                    <button className='bg-yellow-500 text-[20px] rounded-[5px] w-[99px] h-[61px] hover: bg-amber-300'>Edit</button>
                    <button className='bg-yellow-500 text-[20px] rounded-[5px] w-[99px] h-[61px] mx-[15px]'>Delete</button>
                </div>
            </div>
        </div>
    </>    
    )
}
