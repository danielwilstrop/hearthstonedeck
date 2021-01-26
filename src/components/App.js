import './App.css';
import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { About } from '../pages/About'
import { Error } from '../pages/Error'
import { Home}  from '../pages/Home'
import { DeckBuilder } from '../pages/DeckBuilder'
import { Contact } from '../pages/Contact'

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path = '/'>
        <Home />
      </Route>
      <Route path = '/about'>
        <About />
      </Route>
      <Route path = '/contact'>
        <Contact />
      </Route>
      <Route path = '/deckbuilder'>
        <DeckBuilder />
      </Route>
      <Route path = "*">
        <Error />
      </Route>
    </Switch>
  </Router>
  )
}

export default App;
