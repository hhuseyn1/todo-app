import React, { useContext, useRef , useState} from 'react'
import MyContext from '../../ContextWrapper' 

export default function LoginCard() {
  const {setAuthorized,setEmail,mail} = useContext(MyContext)
  const [isValid,setIsValid] = useState(false)
  const inputRef = useRef(null);
  return (
    <>
        <div className='flex h-screen justify-center items-center'>
            <form className='flex flex-col items-center h-screen w-screen sm:w-[700px] sm:h-[310px] shadow-md justify-center sm:rounded-[13px]'>
                <h1 className='text-3xl font-bold mb-5'>LOGIN FORM</h1>
                <label>Input your email:</label>
                <input
                  ref={inputRef}
                 onChange={(e)=>{
                  setEmail(e.target.value)
                  setIsValid(e.target.checkValidity())
                }}
                required = "True" value={mail} 
                className='px-2 py-0.5 border border-zinc-300 rounded-[6px] my-2' 
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
