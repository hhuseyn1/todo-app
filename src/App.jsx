import React from 'react'
import Login from '../src/login/Login'
import Mainpage from './mainpage/Mainpage'
import { useState } from 'react'

export default function App() {
  const [authorized,setAuthorized] = useState(false)
  const [mail,setMail] = useState('')
  return authorized ? <Mainpage setAuthorized={setAuthorized} mail = {mail}/> : <Login setAuthorized = {setAuthorized} mail = {mail} setMail={setMail}/>
}
