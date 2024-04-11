import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Component from "./components/Component";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MapComponent from "./components/MapComponent";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/component"} element={<Component
            />}/>
            <Route path={"/map"} element={<MapComponent
            />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
