import React from 'react'
import Header from './Component/Header/Header'
import Container from './Component/Container'
import { Route, Routes } from 'react-router'
import Footer from './Component/Footer/Footer'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default App
