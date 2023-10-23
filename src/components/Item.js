import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "./item.css";
export default function Item(props){
  var det = props.detail+'';
  const navigate =useNavigate();
  const handleClick = ()=>{
    navigate("/Moviedesc" , {state:{image:props.imag , title : props.title , detail : props.detail , page:props.page}});
  }
return(<>
{/* <div className="contain" style={{backgroundImage:`url(${props.imag})`}}>
  <div className="contain2">
    <h2><div style={{backgroundColor:"white",color:"red",padding:"4px 30px"}}><span >{props.title}</span></div><hr/></h2>
    <p className="desc"><span dangerouslySetInnerHTML={{ __html: props.detail.slice(0,130)+" ..." }} ></span></p>
    <p><Link to={`/Moviedesc${props.keys}`} className="button">Read More</Link></p>
	</div>
</div> */}

        <div className="card">
          <img src={props.imag}/>
          <h1 className="titleoverlay">{props.title}</h1>
            <div className="descriptions">
                <p dangerouslySetInnerHTML={{ __html: det.slice(0,230)+" ..." }} ></p>
                <button  className="button-62" onClick={handleClick}>Read More</button>
            </div>
        </div>
</>);
};
