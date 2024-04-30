import React from 'react';
import './App.css';
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MapComponent from "./components/MapComponent";

import AccidentListComponent from "./components/Accident/AccidentListComponent";
import AccidentComponent from "./components/Accident/AccidentComponent";

import LoginComponent from "./components/Login/LoginComponent";

import ReportListComponent from "./components/Report/ReportListComponent";
import ReportComponent from "./components/Report/ReportComponent";

import RouteListComponent from "./components/Route/RouteListComponent";
import RouteComponent from "./components/Route/RouteComponent";

import SingUpComponent from "./components/SingUp/SingUpComponent";

import StopListComponent from "./components/Stop/StopListComponent";
import StopComponent from "./components/Stop/StopComponent";

import StopTimeListComponent from "./components/StopTime/StopTimeListComponent";
import StopTimeComponent from "./components/StopTime/StopTimeComponent";

import TripListComponent from "./components/Trip/TripListComponent";
import TripComponent from "./components/Trip/TripComponent";

import UserListComponent from "./components/User/UserListComponent";
import UserComponent from "./components/User/UserComponent";

import VehicleListComponent from "./components/Vehicle/VehicleListComponent";
import VehicleComponent from "./components/Vehicle/VehicleComponent";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/map"} element={<MapComponent/>}/>

            <Route path={"/accidents"} element={<AccidentListComponent/>}/>
            <Route path={"/accident/:id"} element={<AccidentComponent/>}/>

            <Route path={"/login/:id"} element={<LoginComponent/>}/>

            <Route path={"/reports"} element={<ReportListComponent/>}/>
            <Route path={"/report/:id"} element={<ReportComponent/>}/>

            <Route path={"/routes"} element={<RouteListComponent/>}/>
            <Route path={"/route/:id"} element={<RouteComponent/>}/>

            <Route path={"/sing-up/:id"} element={<SingUpComponent/>}/>

            <Route path={"/stops"} element={<StopListComponent/>}/>
            <Route path={"/stop/:id"} element={<StopComponent/>}/>

            <Route path={"/stop-times"} element={<StopTimeListComponent/>}/>
            <Route path={"/stop-time/:id"} element={<StopTimeComponent/>}/>

            <Route path={"/trips"} element={<TripListComponent/>}/>
            <Route path={"/trip/:id"} element={<TripComponent/>}/>

            <Route path={"/users"} element={<UserListComponent/>}/>
            <Route path={"/user/:id"} element={<UserComponent/>}/>

            <Route path={"/vehicles"} element={<VehicleListComponent/>}/>
            <Route path={"/vehicle/:id"} element={<VehicleComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
