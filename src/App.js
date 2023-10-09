import './App.css';
import Navb from './components/Navbar';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Foot from './components/foot';
import About from './components/about';
import Contact from './components/contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Moviedesc from './components/Moviedesc';
import Home from './components/Home';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

function App() {

  const [mydat,setMyDat]=useState([])
  useEffect(()=>{
      axios.get("https://api.tvmaze.com/shows")
      .then((res)=>setMyDat(res.data));
    },[]);
    var i=1;
  return (
    <div className="App">
        <Navb/>
        <Router>
          <Routes>
            <Route exact path={`/`} element={<Home/>}></Route>
          </Routes>
        {mydat.map(dat=>{
                return <Routes><Route exact path={`/Moviedesc${dat.id}`} element={<Moviedesc title={dat.name} page={dat.url} keys={dat.id} imag={dat.image.original} detail={dat.summary} num={i-1}/>}></Route></Routes>
            })};
        <Routes><Route  path={`/about`} element={<About/>}></Route></Routes>
        <Routes><Route path={`/contact`} element={<Contact/>}></Route></Routes>
        </Router>
        <div className='contain1'></div>
        <Foot/>
    </div>
  );
}

export default App;
