import React from 'react'
import CardSlider from './CardSlider'

export default function Slider({movies}) {
    const getMoviesFomRange=(from,to)=>{
        return movies.slice(from,to)
    }
  return (
    <div>
        <CardSlider title="Trending Now" data={getMoviesFomRange(1,10)}/>
        <CardSlider title="Popular on Netflix" data={getMoviesFomRange(10,20)}/>
        <CardSlider title="BlockBusters" data={getMoviesFomRange(20,30)}/>
        <CardSlider title="New Releases" data={getMoviesFomRange(30,40)}/>
        <CardSlider title="Action" data={getMoviesFomRange(40,50)}/>
        <CardSlider title="Recommended" data={getMoviesFomRange(50,60)}/>
    </div>
  )
}
