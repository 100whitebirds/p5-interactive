import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import Pulsar from './pages/Pulsar/Pulsar'
import Outline from './pages/Outline/Outline';
import './App.css'
import Sinewave from './pages/Sinewave/Sinewave';
import Landscape from './pages/Landscape/Landscape';
import Tree from './pages/Tree/Tree';
import Chess from './pages/Chess/Chess'
import Sunflower from './components/Sunflower/Sunflower'
import Home from './pages/HomePage/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="hello"/>} />
          <Route path="/hello" render={() => <Home/>} />
          {/* <Route path="/pulsar" render={() => <Pulsar />} /> */}
          {/* <Route path="/outline" render={() => <Outline />} /> */}
          <Route path="/sinewave" render={() => <Sinewave />} />
          <Route path="/landscape" render={() => <Landscape />} />
          {/* <Route path="/tree" render={() => <Tree />} /> */}
          {/* <Route path="/chess" render={() => <Chess />} /> */}
          <Route path="/sunflower" render={() => <Sunflower/>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
