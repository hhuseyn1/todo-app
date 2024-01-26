import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
<<<<<<< HEAD
import { ContextWrapper } from './ContextWrapper.jsx'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextWrapper>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ContextWrapper>
=======

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
>>>>>>> parent of 04ec180 (responsive design part 1)
  </React.StrictMode>,
)