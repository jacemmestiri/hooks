import './App.css';
import React from 'react';
import {v4 as uuidv4} from 'uuid'
import Movielist from './Components/Movielist.js'
import Search from './Components/Search'
import {useState} from 'react'

function App() {
  const[movies,setMovies] = useState([
    {
      id :uuidv4(),
      name:"The shawshank redemption",
      image:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/aa17005fd6e7eb3e15e32b9f9252e0aea07b50c7bd0bfe686ac45498fc6f809b._RI_V_TTW_.jpg",
      rating :5,
      year:"1994",
    },
    {
      id :uuidv4(),
      name:"the Matrix",
      image:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
      rating :4,
      year:"1999",
    },
    {
      id :uuidv4(),
      name:"The last castle",
      image:"https://m.media-amazon.com/images/I/91RQ3UOiIZL._SL1500_.jpg",
      rating :4,
      year:"2001",
    },
    {
      id :uuidv4(),
      name:"EQUILIBRIUM",
      image:"https://m.media-amazon.com/images/I/51K2WVH130L.jpg",
      rating :4,
      year:"2002",
    },
    {
      id :uuidv4(),
      name:"The usual suspects",
      image:"https://m.media-amazon.com/images/I/91uAlM3mOAL._SL1500_.jpg",
      rating :4,
      year:"1995",
    },
    {
      id :uuidv4(),
      name:"Fight Club",
      image:"https://m.media-amazon.com/images/I/51iOANjtCQL.jpg",
      rating :4,
      year:"1999",
    },
    ]);
    const [movie, setMovie] = useState({
      name: "",
      image: "",
      rating: "",
      year: "",
    });
  const[searchTerm,setsearchTerm]=useState('')
  const [rate, setRate] = useState(1)
  
  const handleChange = (e) =>{
    setMovie({...movie, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setMovies([...movies, {id:uuidv4(),...movie}])
    setMovie('')
      };
    
      const handlonchange = (e)=>{
        setsearchTerm(e.target.value);
      }
 
  return (
   
    <div className="App">
    <h1 className='head'> Movie app</h1>
    <Search setRate={setRate} />
    <input className='search' type='text' placeholder="search..." onChange={handlonchange}/> 
    
    <Movielist movies={movies.filter(el=>el.name.toLowerCase().includes(searchTerm.toLowerCase())&& el.rating >= rate)}/>
    <div className="addMovies">
    <input type="text" placeholder="name" name="name"  onChange={ handleChange}></input>
    <input type="text" placeholder="image" name="image" onChange={ handleChange} ></input>
    <input type="text" placeholder="rating" name="rating" onChange={ handleChange}></input>
    <input type="text" placeholder="year" name="year" onChange={ handleChange}></input>
    <button type="submit" onClick={handleSubmit}>Add</button>
   </div> 
   
    
  </div>
);
}
      
  
  
  

export default App;
