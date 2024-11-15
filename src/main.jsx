import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header/header.jsx'
import Footer from './Components/Footer/footer.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/home.jsx'
import About from './Components/About/about.jsx'
import Contact from './Components/Contact/contact.jsx'
import User from './Components/User/user.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/user/:userid' element={<User/>}/>


      </Route>
  )
)
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,

)