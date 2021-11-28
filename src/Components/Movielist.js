import React from 'react'
import Card from 'react-bootstrap/Card';
import StarRatingComponent from "react-rating-stars-component"
const Movielist =(props) => {
    return(
    <div className="movielist"> 
    {props.movies.map((el) =>(
        <div className="movie">
    <Card style={{width:'18rm' , height:'50 px'}}>
        { <Card.Img variant="top"
        src={el.image}/> }
        <Card.Body>
          <Card.Title style={{color:'whitesmoke'}}>{el.Title}</Card.Title>
          <Card.Text style={{color:'whitesmoke'}} >{el.year}</Card.Text>
           <StarRatingComponent value={el.rating}/>
          </Card.Body>
          </Card>
          </div>
           
        ))}
        </div>
    
    );
};
export default Movielist;