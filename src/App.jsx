import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Food from './components/Food'
import Beers from './components/Beers'
import Nav from './components/Nav'

function App() {
  const [ showBeers, setShowBeers ] = useState(true);

  const handleBeersClick = (event) => {
    event.preventDefault();
    setShowBeers(true);
  }

  const handleFoodClick = (event) => {
    event.preventDefault();
    setShowBeers(false);
  }

  return (
    <>
      <Header />
      <Nav handleBeersClick={handleBeersClick} handleFoodClick={handleFoodClick}/>
      {showBeers ? <Beers /> : <Food />}
    </>
  )
}

export default App
