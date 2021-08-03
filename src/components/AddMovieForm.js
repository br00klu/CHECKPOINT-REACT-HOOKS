import React,{useState} from 'react';

function AddMovieForm ({addMovie}) {

    
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [posterURL,setPosterURL]=useState("")
    const [rating, setRating]=useState(0)

    
    function handleTitle (e) {setTitle(e.target.value)}
    function handleDescription (e) {setDescription(e.target.value)}
    function handlePosterURL (e) {setPosterURL(e.target.value)}
    function handleRating (e) {setRating(e.target.value)}

    const resetValues=()=> {setTitle(""); setDescription("");setPosterURL("");setRating(0)}

    return (
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Add a movie:</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <span>Title: </span>
                    <input value={title} onChange={handleTitle}/>
                    <span>Description: </span>
                    <input value={description} onChange={handleDescription}/>
                    <span>Poster URL: </span>
                    <input value={posterURL} onChange={handlePosterURL}/>
                    <span>Rating: </span>
                    <input value={rating} onChange={handleRating}/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>

       {/* <form 
        style={{display:'flex', flexDirection:'column',alignItems:'flex-start'}}
        onSubmit={e=>{
            e.preventDefault()
            addMovie(title,description,posterURL,rating)
            resetValues()
            }}>
           
            <span>Title: </span>
            <input value={title} onChange={handleTitle}/>
            <span>Description: </span>
            <input value={description} onChange={handleDescription}/>
            <span>Poster URL: </span>
            <input value={posterURL} onChange={handlePosterURL}/>
            <span>Rating: </span>
            <input value={rating} onChange={handleRating}/>

            <input type="submit" value="add movie"/>
    </form>
        */}
    )
}

export default AddMovieForm;