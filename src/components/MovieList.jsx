import React from 'react'
import MovieCard from './MovieCard'
import useFetchApiMovies from '../hooks/useFetchApiMovies';
import toast, { Toaster } from 'react-hot-toast';


const MovieList = () => {
 const {peliculas, loading, error,handlePage} = useFetchApiMovies()


  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-black dark:text-white">
        Lista de Películas 🍿
      </h2>
      <div
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 xl:grid-cols-5 place-items-center">


      {loading && <p>Cargnado</p>}
      {error && <p>Problemas al cargar datos</p>}

        {
          peliculas.map((p,index) => (
            <MovieCard
              key={p.id+index}
              id={p.id}
              title={p.title}
              img={`https://image.tmdb.org/t/p/w500${p.poster_path}`}
              popularity={p.popularity}
            />
        ))}
      </div>
          <button
          onClick={handlePage}
          className="mt-3 w-full rounded-2xl bg-amber-400 py-2 text-sm font-semibold 
                     transition-transform hover:scale-101 sm:text-base text-black dark:text-white cursor-pointer "
          >Mostrar más</button>
          <Toaster />
    </div>
  );
};

export default MovieList;
