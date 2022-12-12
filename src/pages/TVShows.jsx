import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';

export default function TVShows() {
    // const navigate = useNavigate()

    // const genresLoaded = useSelector((state)=>state.netflix.genresLoaded); 
    // const movies = useSelector((state)=>state.netflix.movies); 
    // const genres = useSelector((state)=>state.netflix.genres); 
     const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
    const dispatch = useDispatch();

    useEffect(() => {
     dispatch(getGenres())
    },)

    useEffect(()=>{
        if(genresLoaded) dispatch(fetchMovies({type:"tv"}));
    },[genresLoaded])
    

    const[isScrolled,setisScrolled]=useState(false)
    window.onscroll=()=>{
        setisScrolled(window.pageYOffset===0 ? false : true);
        return ()=> (window.onscroll=null);
    }
  return (
    <Container>
        <div className='navbar'>
            <Navbar isScrolled={isScrolled}/>
        </div>
        <div className="data">
        <SelectGenre genres={genres} type="tv"/>
            {
                movies.length ? <Slider movies={movies}/>
                : <NotAvailable/>
            }
        </div>
    </Container>
  )
}

const Container = styled.div`
    .data{
        margin-top: 8rem;
        .not-available{

        }
    }
`;