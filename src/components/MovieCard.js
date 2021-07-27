import React,{useState} from 'react';

function MovieCard({onSubmit}) {

    
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [posterURL,setPosterURL]=useState("")
    const [rating, setRating]=useState(0)

    
    function handleTitle (e) {setTitle(e.target.value)}
    function handleDescription (e) {setDescription(e.target.value)}
    function handlePosterURL (e) {setPosterURL(e.target.value)}
    function handleRating (e) {setRating(e.target.value)}

    return (
        <form onSubmit={e=>{
            e.preventDefault();
            onSubmit(title,description,posterURL,rating);
           /* onSubmit(description);
            onSubmit(posterURL);
            onSubmit(rating)*/
        }}>

        <span>Title: </span>
        <input value={title} onChange={handleTitle}/>
        <span>Description: </span>
        <input value={description} onChange={handleDescription}/>
        <span>Poster URL: </span>
        <input value={posterURL} onChange={handlePosterURL}/>
        <span>Rating: </span>
        <input value={rating} onChange={handleRating}/>


        </form>
    )
}

export default MovieCard;