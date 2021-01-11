import React, { useState } from 'react';

export const SearchResults = props => {
  const [noms, setNoms] = useState([])

  const addNominees = movie => {
    if(noms.length < 5) {
      setNoms([...noms, movie])
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
        <h4>SEARCH RESULTS</h4>
        {props.movies.map(movie => (
          <div key={movie.imdbID}>
            <button
              onClick={()=> addNominees(movie)}
              disabled={noms.includes(movie)}
            >+</button>
            {movie.Title} ({movie.Year})
          </div>
        ))}
      </div>

      <div className="nominees">
        <h4>YOUR NOMINEES</h4>
        {noms.map(nom => (
          <div key={nom.imdbID}>
            {nom.Title} ({nom.Year})
            <button onClick={() => removeNoms(nom)}>-</button>
          </div>
        ))}
      </div>
    </div>
  )
}
