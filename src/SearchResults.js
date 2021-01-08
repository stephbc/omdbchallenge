import React, { useState } from 'react';

export const SearchResults = props => {
  const [noms, setNoms] = useState([])

  const addNominees = movie => {
    if(noms.length < 5) {
      if(!noms.includes(movie)){
        setNoms([...noms, movie])
      } else {
        alert("Already added this title!")
      }
    } else {
      alert("Reached max 5 nominees!")
    }
  }

  const removeNoms = movie => {
    setNoms(noms.filter(nom => nom.imdbID !== movie.imdbID))
  }

  return (
    <div className="Movie-Lists">
      <div className="results">
        Search results:
        {props.movies.map(movie => (
          <div key={movie.imdbID}>
            <button onClick={()=> addNominees(movie)}>add</button>
            {movie.Title} ({movie.Year})
          </div>
        ))}
      </div>

      <div className="nominees">
        Your 5 Nominees:
        {noms.map(nom => (
          <div key={nom.imdbID}>
            {nom.Title} ({nom.Year})
            <button onClick={() => removeNoms(nom)}>remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}