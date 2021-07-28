import React, {useState} from 'react';
import AddMovieForm from './AddMovieForm';
import Filter from './Filter';
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
   // const [filMovies,setFilMovies]=useState(movies)   
   /* const [newMovie,setNewMovie]=useState({
            title:'',
            description:'',
            posterURL:'',
            rating:0
        })

*/
    


return (
    <div>
        <AddMovieForm addMovie={
            (title,description,posterURL,rating)=> setMovies([
                {title,description,posterURL,rating},
                ...movies
        ])}
        />

       <Filter filterMovie={
            
            (textFilter)=>{
             movies.filter(x=>x.title.includes(textFilter))
            }// true
            } />
            {
                movies.map((x,i)=><div key={i}> <MovieCard Movie={x} /> </div>)
            }
       
     </div>
)
}
export default MovieList;