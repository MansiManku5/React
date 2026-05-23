import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Login from './Login.jsx'


 import{  BrowserRouter, Routes, Route,NavLink} from 'react-router-dom';
 
createRoot(document.getElementById('root')).render(
  <StrictMode>   
    
    <BrowserRouter>
<img src="images/background.png" />

      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/a'>About</NavLink></li>
          <li><NavLink to='/b'>Registration</NavLink></li>
          <li><NavLink to='/c'>Login</NavLink></li>
        </ul>
      </nav>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/a' element={<About/>}/>
      <Route path='/b' element={<Contact/>}/>
      <Route path='/c' element={<Login/>}/>

    </Routes>
    </BrowserRouter>

  </StrictMode>,
)
