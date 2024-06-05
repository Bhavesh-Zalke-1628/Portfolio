import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import { Outlet } from 'react-router'
import Footer from './Component/Footer/Footer'

function App() {

  return (
    <div >
      <Header />
      <main  >
        < Outlet />
      </main >
      <Footer />
    </div >
  )
}

export default App
