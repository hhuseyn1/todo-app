import React, { useEffect } from 'react'
import Navigation from './components/Navigation'
import Card from './components/Cards'
import MyContext from '../ContextWrapper'
import { useState , useContext , useReducer } from 'react'
import EditCard from './components/EditCard'
import DeleteCard from './components/DeleteCard'
import CreateCard from './components/CreateCard'  

const reducer = (state, action) => {
  switch (action.type) {
    case "create":
      return {type:(state.type="create")}
    case "edit":
      return {type:(state.type="edit")}
    case "delete":
      return {type:(state.type="delete")}
    case '':
      return {type:(state.type="")}
  }
}

export default function Mainpage() {
  const {mail} = useContext(MyContext)
  const [activeCard, setActiveCard]=useState()
  const [cards, setCards]=useState([])
  const [filteredCards, setFilteredCards]=useState([])
  const [state, dispatch] = useReducer(reducer, {type:""})
  
  useEffect(()=>{
    setFilteredCards(cards.filter((card)=>card.author === mail))
  }, [cards])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/cards/${mail}`
        );
        const results = await response.json();
        setCards(results);
      } catch (error) {
        console.error(error);
      }
    };
    getData()
  }, [cards])

  return (
    <div className={`${state.type?"overflow-hidden":null} h-screen `}>
      <Navigation/>
      <div className="flex justify-center items-center sm:justify-start sm:items-start">
        <button className='bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 sm:ml-1 mt-[20px]'
        onClick={(e)=>{
          dispatch({ type: 'create' });
        }}
        >Create card</button>
      </div>
       
      <div className='w-full grid sm:grid-cols-2 lg:grid-cols-3 px-5 lg:px-[58px]'>
        {
          filteredCards.length?(
            filteredCards.map((card)=>
              <Card 
              key={card.id}
              data={card}
              setActiveCard={setActiveCard} 
              dispatch={dispatch}/>

            )
          ):(
            <p className='text-center col-span-3 mt-10'>No cards found</p>
          )
        }
        
      </div>
      
      {state.type ==="create" && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <CreateCard dispatch={dispatch} mail={mail} setCards={setCards} />
        </div>
      )}
      {state.type ==="edit" && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <EditCard
           dispatch={dispatch}
           setCards={setCards}
           cards ={cards}
           activeCard={activeCard}/>
        </div>
      )}
      {state.type ==="delete" && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <DeleteCard 
            dispatch={dispatch} 
            cards={cards} 
            id={activeCard._id} 
            setCards={setCards}/>
        </div>
      )}
      
    </div>
  )
}