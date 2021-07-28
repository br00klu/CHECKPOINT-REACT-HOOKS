import React from 'react';

function MovieCard ({Movie}){
    
    return (
        <ul style={{border:'solid black 4px'}}>
            <li>
                <span>title: </span>
                {Movie.title}
            </li> 
            <li>
                <span>description: </span>
                 {Movie.description}
            </li>
            <li style={{listStyle:'none'}}>
                <img src={Movie.posterURL} alt='movie poster'/>
            </li>
            <li>
                <span>rating: </span>
                {Movie.rating} ⭐
            </li>
        
        </ul>
    )
}
export default MovieCard;