import React from "react";
import axios from 'axios';
import { useEffect,useState } from 'react';
import "./poster.css";
export default function Poster(){
    const [newdat , setDat] = useState({});
    const [im , setIm] = useState("");
    useEffect(()=>{
        axios.get("https://api.tvmaze.com/shows")
        .then((res)=>{setDat(res.data[Math.floor(Math.random()*res.data.length)])});
      },{});

      async function dt(){
      var dat = await newdat.image.original;
      setIm(dat);
      }
      dt();

    return(<>
	<div className="post">
        <div className="post1">
		<h1>{newdat.name}</h1>
        <a href={newdat.url}><button className="button-62">DETAILS</button></a>
        </div>
        <img src={im}></img>
	</div>
    </>);
}