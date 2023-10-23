import React from "react";
import "../App.css";

export default function Contact(){
    return(<>
    <div className="container1" style={{color:"white" , width:"60%" , margin:"auto"}}>
  <form action="mailto:recipient@example.com" method="post" enctype="text/plain">
    <div style={{display:"flex" , margin:"auto" , justifyContent:"space-between" , width:"100%"}}><label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" for="fname" placeholder="Your name.." style={{marginBottom:"20px"}}/></div>

    <div style={{display:"flex" , margin:"auto" , justifyContent:"space-between" , width:"100%"}}><label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" for="lname" placeholder="Your last name.." style={{marginBottom:"20px"}}/></div>

    <div style={{display:"flex" , margin:"auto" , justifyContent:"space-between" , width:"100%"}}><label for="message">Message</label><br/>
    <textarea id="message" name="message" for="message" placeholder="Write something.." style={{height:"100px" , width:"40%" , margin:"auto"}}></textarea><br/></div>

    <input type="submit" className="button-62" style={{width:"max-content" , marginTop:"30px"}} value="Submit"/>
  </form>
</div>
    </>);
}