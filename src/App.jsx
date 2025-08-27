import { useState } from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {

  return (
    <>
    <div className="animated-gradient min-h-screen text-white">
      <Navbar />
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] px-4">
        <Home />
      </div>
    </div>
    </>
  )
}

export default App
