import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Header from './Components/Header/header'
import Home from './Components/Home/home'
import Footer from './Components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)
return(
<>


  <Header/>
  <Outlet/>
  <Footer/>
  
  </>
)
}

export default App
