import React, {useState} from 'react';
import MovieCard from './MovieCard';

function MovieList (){

    const [movies,setMovies]=useState([
/*          {title:'Avatar',
            description: 'blue people being weird',
            posterURL:'https://m.media-amazon.com/images/I/61NGAgspSHL._AC_SX425_.jpg',
            rating:4},

            {title:'moch Avatar',
            description: 'blue people being weird',
            posterURL:'https://m.media-amazon.com/images/I/61NGAgspSHL._AC_SX425_.jpg',
            rating:4}
*/
            ])
   /* const [newMovie,setNewMovie]=useState({
            title:'',
            description:'',
            posterURL:'',
            rating:0
        })

*/
    

return (
    <div>
        <MovieCard onSubmit={
            (title,description,posterURL,rating)=> setMovies([
                {title,description,posterURL,rating},
                ...movies
        ])}
        />
        {
        movies.map(x=><li key={title}>{x}</li>)
        }
     </div>
)
}
export default MovieList;