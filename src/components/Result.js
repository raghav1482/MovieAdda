import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import Item from './item/Item';

function Result() {
    const location = useLocation();
    const [mdat , setDat] = useState(location.state.results);
    console.log("dat : ");
    console.log(mdat);
  return (<>      <h1 style={{width:"max-content" , textAlign:"center" ,margin:"20px auto",padding:"10px 20px", backgroundColor:"white" , color:"red" , borderRadius:"10px"}}>Results</h1>
    <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center"}}>
                  {mdat.map(dat=>{
                return <div style={{margin:"20px"}}><Item title={dat.show.name}page = {dat.show.url} imag={dat.show.image?dat.show.image.medium:"https://cdn2.vectorstock.com/i/1000x1000/54/01/video-camera-simple-icon-movie-film-reel-vector-31045401.jpg"} keys={dat.show.id} detail={dat.show.summary}/></div>
            })}
    </div></>

  )
}

export default Result
