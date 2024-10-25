import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Elements from './components/Elements'
import data from './data'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const elements = data.map((i)=>{
    return(
      <Elements key={i.id} i ={i}/>)
    })
  return (
    <>
      
        <Navbar text="my travel journal."></Navbar>
        <section>
          {elements}
        </section>
        
    </>
  )
  
}

export default App
