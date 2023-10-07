import logo from './components/logo.jpg';
import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import Item from './components/Item';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import data from "./components/data.json"
import Home from "./components/Home";


function App() {
  // const [progress, setProgress] = useState(0)
  return (
    <div> 
        <Router>
        <NavBar/> 
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/Enroll"><Item  key="Home" parsedData={data} country="US" category="Home"/></Route>
        </Switch>
        </Router>
      </div>
  );
}

export default App;
