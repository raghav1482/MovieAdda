import './App.css';
import Navb from './components/Navbar';
import { useEffect, useState } from 'react';
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
import Result from './components/Result';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

function App() {

  const [mydat, setMyDat] = useState([])
  useEffect(() => {
    axios.get("https://api.tvmaze.com/shows")
      .then((res) => setMyDat(res.data));
  }, []);
  var i = 1;
  return (
    <div className="App">
      <Router>
      <Navb />
        <Routes>
          <Route exact path={`/`} element={<Home />}></Route>
          <Route path={`/Moviedesc`} element={<Moviedesc />}></Route>
          <Route path={`/about`} element={<About />}></Route>
          <Route path={`/contact`} element={<Contact />}></Route>
          <Route path={`/result`} element={<Result/>}></Route>
        </Routes>
      <Foot />
      </Router>
      {/* <div className='contain1'></div> */}
    </div>
  );
}

export default App;
