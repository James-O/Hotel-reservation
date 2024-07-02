import React, { useEffect, useState } from 'react'

// const url = "https://api.themoviedb.org/3/discover/movie"
// const API_KEY = process.env.API_KEY

export default function Movies() {
   const [movies,setMovie]=useState(null)
   
   let getMovie=()=>{
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=7772b80fed6bbdbc413f1213dabadc8b')
    .then(response => response.json())
    .then(response => 
        {
            console.log(response)
            setMovie(response.results);
        })
    .catch(err => console.error(err));
   }

    useEffect(()=>{
        getMovie()
    },[])

    let Result =({movies})=>{
        return (
            <div>
                {
                    movies.map((movie)=>(
                        <div key={movie.id}>
                            <h1>{movie.title}</h1>
                        </div>
                    ))
                }
            </div>
        )
    }
  return (
    <div>
        {movies && <Result movies={movies}/>}
    </div>
  )
}
