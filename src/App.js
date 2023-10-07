import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import Item from './components/Item';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import data from "./components/data.json"


const App = ()=> {
  const pageSize = 5;
  const apiKey = 'ac7244c1b76d4e829b1ad2830451fb6c';
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
          <Route exact path="/"><Item setProgress={setProgress} apiKey={apiKey} key="Home" pageSize={pageSize} parsedData={data} country="US" category="Home"/></Route>
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;