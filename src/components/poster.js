import React from "react";
import axios from 'axios';
import { useEffect,useState } from 'react';
import "./poster.css";
import { useNavigate } from "react-router-dom";
export default function Poster(){
    const [newdat , setDat] = useState({});
    const [tot , setTot] = useState([]);
    const [im , setIm] = useState("");
    useEffect(()=>{
        axios.get("https://api.tvmaze.com/shows")
        .then((res)=>{setDat(res.data[Math.floor(Math.random()*res.data.length)]);setTot(res.data);})
      },[]);
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