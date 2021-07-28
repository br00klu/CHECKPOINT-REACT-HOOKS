import React,{useState} from 'react';

function Filter({filterMovie}){
    
    const [textFilter,setTextFilter]=useState("")
    const [ratingFilter,setRatingFilter]=useState([])

    function handleTextFilter(e){
        setTextFilter(e.target.value)
    }

    function handleRatingFilter(e){
        setRatingFilter([...ratingFilter,e.target.value])

    }
    

return (
    <div style={{backgroundColor:'lightgrey',marginTop:'10px',marginBottom:'18px'}} onClick={
        filterMovie(textFilter)
    }>
        <span>Filter: </span>
        <input type='text'  value={textFilter} onChange={handleTextFilter}/>
        
        <label>
            <input type="checkbox" value={0} onClick={handleRatingFilter}/>0 ⭐
        </label>
        <label>
            <input type="checkbox" value={1} onClick={handleRatingFilter}/>1 ⭐
        </label>
        <label>
            <input type="checkbox" value={2} onClick={handleRatingFilter}/>2 ⭐
        </label>
        <label>
            <input type="checkbox" value={3} onClick={handleRatingFilter}/>3 ⭐
        </label>
        <label>
            <input type="checkbox" value={4} onClick={handleRatingFilter}/>4+ ⭐
        </label>
    </div>

)
}
export default Filter;