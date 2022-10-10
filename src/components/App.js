import React, { useState ,useEffect } from "react";
import '../App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Phones from "./Phones";
import Cart from "./Cart";

function App() {
  const [ data, setData ] = useState([])
  const [ cart, setCart ] = useState([])
  const url = "https://meadow-marsh-forsythia.glitch.me/data"
  const imgPlaceholder = require("./assets/images/splash.png");

  useEffect(() => {
    fetch(url)
    .then(res => res.json()) 
    .then(newData => setData(newData))
  }, []);

  // console.log(data)

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart data={data} cart={cart}/>} />
        <Route path='/phones' element={<Phones 
                                          data={data} 
                                          setData={setData} 
                                          url={url} 
                                          cart={cart} 
                                          setCart={setCart}
                                          imgPlaceholder={imgPlaceholder}
                                          /> } />
      </Routes>
    </div>
  );
}

export default App;