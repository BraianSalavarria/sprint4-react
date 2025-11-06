import { useEffect, useState } from "react"
import toast from "react-hot-toast"


const clave_api = import.meta.env.VITE_CLAVE_API;

const useFetchApiMovies = () => {
  const [peliculas, setPeliculas] = useState([])
  const [loading, setLoading] = useState()
  const [error, setError] = useState(null)
  const [page, setPage] =useState(1)

  useEffect(()=>{
    
    setLoading(true)

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${clave_api}&language=es-Ar&page=${page}`)
    
    .then(response => response.json())
    
    .then( (data) => ( setPeliculas( (prev) => ([...prev, ...data.results]) ) ) )
  
    
    .catch(error =>setError(error))

    .finally(()=>setLoading(false))
    
   

  },[page])
  
  function handlePage(){
    setPage( (prev)=>(prev+1) )
    toast('Peliculas cargadas correctamente ✅')
  }
  
  return{peliculas,loading,error,page,setPage, handlePage}
}

export default useFetchApiMovies
