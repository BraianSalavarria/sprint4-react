import React from 'react'
import logo from '../assets/logo.png'
import { CiSun } from "react-icons/ci"
import { BsMoonStars } from "react-icons/bs"

function Header({ setDarkMode }) {
  
  
  return (
    <nav className="flex flex-row justify-between items-center bg-gray-900 text-white font-bold py-4 px-4">
      
      <div className="flex flex-row items-center gap-3">
        <img src={logo} alt="logo de la página" className="w-10 h-10 object-contain" />
        <span className="text-xl">Las Peliculas más populares</span>
      </div>

  
      <div className="flex flex-row items-center gap-3">
      
        <button
          className="bg-transparent p-3 hover:bg-zinc-200 rounded-lg dark:hover:bg-zinc-500"
          onClick={() => setDarkMode('')}
        >
          <CiSun size={22} />
        </button>

        <button
          className="bg-transparent p-3 hover:bg-zinc-200 rounded-lg dark:hover:bg-zinc-500"
          onClick={() => setDarkMode('dark')}
        >
          <BsMoonStars size={20} />
        </button>

    
      </div>
    </nav>
  )
}

export default Header
