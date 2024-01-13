import React from 'react'
import { useState } from 'react'

export default function LoginCard({setAuthorized ,mail, setMail}) {
  const [isValid,setIsValid] = useState(false)
  return (
    <>
        <div className='flex h-screen justify-center items-center'>
            <form className='flex flex-col items-center justify-center w-[700px] h-[310px] shadow shadow-zinc-395 rounded-[13px]'>
                <h1 className='text-3xl font-bold mb-5'>LOGIN FORM</h1>
                <label>Input your email:</label>
                <input onChange={(e)=>{
                  setMail(e.target.value)
                  setIsValid(e.target.checkValidity())
                }}
                required = "True" value={mail} 
                className='border border-zinc-300 rounded-[6px] w-[560px] h-[60px] my-3 pl-[18px]' 
                type="email" placeholder='example@example.com'/>
                <button
                disabled={!isValid}
                onClick={()=>{
                  setAuthorized(isValid)
                }}
                className={`${isValid ? "bg-yellow-500 hover: bg-amber-400" : "bg-slate-500" }  py-2 px-4 rounded-[10px] `} 
                type='submit'>Submit</button>
            </form>
        </div> 
    </>
  )
}
