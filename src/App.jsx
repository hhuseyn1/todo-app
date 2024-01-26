<<<<<<< HEAD
import {useContext} from 'react'
import Mainpage from './mainpage/Mainpage'
import Login from './login/Login'
import Context from './ContextWrapper'
import { Navigate, Route, Routes } from 'react-router-dom'
import Details from './Details'
import NotFound from './NotFound'

export default function App() {

    const {authorized} = useContext(Context);

    return (
        <Routes>
           <Route path='/' element={<Navigate to="/login" replace/>}/>
           {authorized?(
                <Route path = "/mainpage" element={<Mainpage/>}/> 
           ):(
                <Route path = "/login" element={<Login/>}/>
           )}

           <Route path = "/details">
                <Route path=":message" element = {<Details/>}/>
           </Route>
           <Route path='*' element={<NotFound />}/>
        </Routes>
        
    )
=======
import React from 'react'
import Login from '../src/login/Login'
import Mainpage from './mainpage/Mainpage'
import { useState } from 'react'

export default function App() {
  const [authorized,setAuthorized] = useState(false)
  const [mail,setMail] = useState('')
  return authorized ? <Mainpage setAuthorized={setAuthorized} mail = {mail}/> : <Login setAuthorized = {setAuthorized} mail = {mail} setMail={setMail}/>
>>>>>>> parent of 04ec180 (responsive design part 1)
}
