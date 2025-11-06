import React from 'react';
import { FcBullish } from "react-icons/fc";

const MovieCard = ({ id, title, img, popularity }) => {
  return (
    <div
      key={id}
      className="flex flex-col items-center justify-between bg-gray-800 text-white 
                 p-4 rounded-lg shadow-md transition-transform hover:scale-105 
                 w-64 h-[400px] mx-auto mt-4"
    >
      <h1 className="text-lg font-bold text-center mt-2 line-clamp-2">{title}</h1>
      
      <div className="w-full h-56 flex items-center justify-center">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className='flex justify-center gap-2'>
        <p className='text-orange-400 font-semibold text-md'> Popularidad: {(popularity/100).toFixed(2)}</p>
        <FcBullish />
      </div>
    </div>
  );
};

export default MovieCard;
