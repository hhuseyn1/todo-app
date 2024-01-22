import React, { useContext } from 'react'
import Login from '../src/login/Login'
import Mainpage from './mainpage/Mainpage'
import MyContext from './ContextWrapper'

export default function App() {
  const {authorized} = useContext(MyContext)
  return authorized ? <Mainpage /> : <Login />
}
