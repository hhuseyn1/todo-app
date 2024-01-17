import React, { useEffect } from 'react'
import Navigation from './components/Navigation'
import Card from './components/Cards'
import { useState } from 'react'
import EditCard from './components/EditCard'
import DeleteCard from './components/DeleteCard'
import CreateCard from './components/CreateCard'  

function Mainpage({setAuthorized , mail}) {
  const [cards,setCards] = useState([])
  const [filteredCards,setFilteredCards] = useState([])
  const [activeCard,setActiveCard] = useState()
  const [openModal, setOpenModal] = useState("")

  useEffect(()=>{
    setFilteredCards(cards.filter((card) => card.author === mail))
    console.log(filteredCards.length)
  },[cards])

  return (
    <div className={`${openModal ? "overflow-hidden" : "" } h-screen`}>
      <Navigation setAuthorized={setAuthorized} mail={mail}/>
      <button onClick={()=>{
        setOpenModal("create")
      }} className='bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 ml-[68px] mt-[20px]'>Create card</button>
      <div className='w-full grid sm:grid-cols-2 lg:grid-cols-3 px-[58px]'>
        {filteredCards.length ? 
          (filteredCards.map((card)=>
            <Card   
            setActiveCard={setActiveCard}
            setOpenModal={setOpenModal}
            data={card}/>
            )):(<p className='text-center col-span-3 mt-10'>Cards not found!</p>)
        }
      </div>
       {openModal==="create" && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <CreateCard 
          mail={mail}
          setCards={setCards}
          setOpenModal={setOpenModal} />
        </div>
      )}
      {openModal==="edit" && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <EditCard setOpenModal={setOpenModal} />
        </div>
      )}
      {openModal==="delete" && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <DeleteCard setOpenModal={setOpenModal} />
        </div>
      )}
    </div>
  )
}

export default Mainpage