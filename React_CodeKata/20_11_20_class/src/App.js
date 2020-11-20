import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Header from './pages/home components/Header';

import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" > <Home/> </Route>
          <Route exact path="/" >  </Route>
          <Route exact path="/" >  </Route>
          <Route exact path="/" >  </Route>
        </Switch>
      </div>
    )
  }
}

export default App
