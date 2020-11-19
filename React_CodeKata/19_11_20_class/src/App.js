import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/"> <Home /> </Route>
        </Switch>
      </div>
    )
  }
}

export default App;

