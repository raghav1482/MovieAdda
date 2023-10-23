import React, { useEffect, useState } from 'react';
import Slider from './slider/Slider';
import Poster from './poster/poster';
import { useNavigate } from 'react-router-dom';
export default function Home(){
    var srch = '';
    const navigate = useNavigate();
    async function getdat(url){
        const response = await fetch(url);
        const data = await response.json(); 
        navigate('/result' , {state : {results : data }});
        console.log(data);
    }
    function handleSubmit(e){
        e.preventDefault();
        const url= `https://api.tvmaze.com/search/shows?q=${srch}`;
        getdat(url);
        console.log(srch);
    }
    return(<>
        <Poster/>
        <form onSubmit={handleSubmit} className='search'>
            <input type='text' onChange={(e)=>{srch = e.target.value}} placeholder='Search..'/>
            <button type='submit' className='srch'><i class="fa fa-search"></i></button>
        </form>
        <Slider type="Science-Fiction"/>
        <Slider type="Drama"/>
        <Slider type="Thriller"/>
        <Slider type="Horror"/>
    </>);
}