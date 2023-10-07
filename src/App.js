import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import Item from './components/Item';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import data from "./components/data.json"
import Home from "./components/Home";

const App = ()=> {
  const [progress, setProgress] = useState(0)
 
    return ( 
      <div> 
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} />
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/Enroll"><Item setProgress={setProgress}  key="Home" parsedData={data} country="US" category="Home"/></Route>
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;