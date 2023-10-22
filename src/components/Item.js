import React from "react";
import {Link} from "react-router-dom";
import "./item.css";
export default function Item(props){
return(<>
{/* <div class="contain" style={{backgroundImage:`url(${props.imag})`}}>
  <div className="contain2">
    <h2><div style={{backgroundColor:"white",color:"red",padding:"4px 30px"}}><span >{props.title}</span></div><hr/></h2>
    <p class="desc"><span dangerouslySetInnerHTML={{ __html: props.detail.slice(0,130)+" ..." }} ></span></p>
    <p><Link to={`/Moviedesc${props.keys}`} className="button">Read More</Link></p>
	</div>
</div> */}

        <div class="card">
          <img src={props.imag}/>
          <h1 className="titleoverlay">{props.title}</h1>
            <div class="descriptions">
                <p dangerouslySetInnerHTML={{ __html: props.detail.slice(0,230)+" ..." }} ></p>
                <p><Link to={`/Moviedesc${props.keys}`} className="button-62">Read More</Link></p>
            </div>
        </div>
</>);
};
