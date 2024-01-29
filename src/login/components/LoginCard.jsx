import React, { useContext , useState} from 'react'
import MyContext from '../../ContextWrapper' 
import { useNavigate } from 'react-router-dom';

export default function LoginCard() {

  const navigate = useNavigate()
  const [isValid, setIsValid] = useState(true);
  const {setEmail,mail, setAuthorized} = useContext(MyContext)
  return (
    <>
        <div className='flex h-screen justify-center items-center'>
            <form className='flex flex-col items-center h-screen w-screen sm:w-[700px] sm:h-[310px] shadow-md justify-center sm:rounded-[13px] p-4 sm:p-0'>
                <h1 className='text-3xl font-bold mb-5'>LOGIN FORM</h1>
                <label>Input your email:</label>
                <input
                 onChange={(e)=>{
                  setEmail(e.target.value)
                  setIsValid(e.target.checkValidity())
                }}
                required="True" value={mail} 
                className='px-2 py-0.5 border border-zinc-300 rounded-[6px] my-2 w-full sm:w-[50%]' 
                type="email" placeholder='example@example.com'/>
                <button
                disabled={!isValid}
                onClick={()=>{
                  isValid ? setAuthorized(true) : null;
                  navigate("/mainpage")
                }}
                className={`${isValid ? "bg-yellow-500 hover:bg-amber-400" : "bg-slate-500" } sm:m-5 py-2 px-4 rounded-[10px] w-[] sm:w-[20%]`} 
                type='submit'>Submit</button>
            </form>
        </div> 
    </>
  )
}
