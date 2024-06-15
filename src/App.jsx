import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero/Hero';
import Homesection3 from './components/Homesection3/Homesection3';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <Homesection3/>
    </>
  )
}

export default App
