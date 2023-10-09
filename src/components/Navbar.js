import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
export default function Navb(){
    return(
        <>
<Navbar collapseOnSelect expand="lg" style={{background: "rgb(222,0,0)",
background: "linear-gradient(90deg, rgba(222,0,0,0.3534663865546218) 10%, rgba(0,0,0,1) 100%)",position:"sticky",top:"0px",zIndex:"2"}} variant="dark">
      <Container>
        <Navbar.Brand href="/"><span style={{color:"white"}}><b>MovieADDA</b></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            {/* <Nav.Link href="/movies">Movies</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="/about">About US</Nav.Link>
            <Nav.Link eventKey={2} href="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
         </>
     );
}