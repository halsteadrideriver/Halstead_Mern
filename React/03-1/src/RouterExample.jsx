import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import About from './About';
import NavBar from './NavBar';
import ErrorRouter from './ErrorRouter';

const RouterExample = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        {/* Simple example:
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/contact" element={<div>Contact</div>}></Route>
        <Route path="/about" element={<div>About</div>}></Route> */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path="*" element={<ErrorRouter/>}></Route> 
        {/* "*" above is refering to the universal or rest of the paths or not found paths. */}
    </Routes>
    </BrowserRouter>
  )
}

export default RouterExample