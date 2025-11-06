import React, { use, useState} from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  

  const [darkMode, setDarkMode] = useState('')
   
  return (
      <div className={ ` ${darkMode ? 'dark': ''} overflow-hidden min-h-screen bg-white dark:bg-zinc-700 `}>
        
        <Header setDarkMode={setDarkMode} />
        <MovieList />
        
        
      </div>
    )
}

export default App
