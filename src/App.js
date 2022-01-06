import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import './App.css'
import Sinewave from './pages/Sinewave/Sinewave'
import Landscape from './pages/Landscape/Landscape'
import Sunflower from './pages/Sunflower/Sunflower'
import Home from './pages/HomePage/Home'
import Info from './pages/InfoPage/Info'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="hello"/>} />
          <Route path="/hello" render={() => <Home/>} />
          <Route path="/info" render={() => <Info/>} />
          <Route path="/sinewave" render={() => <Sinewave />} />
          <Route path="/landscape" render={() => <Landscape />} />
          <Route path="/sunflower" render={() => <Sunflower />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
