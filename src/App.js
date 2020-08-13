import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import routes from './routes'
import { TopNav } from './components'

import './App.css';

function App() {
  return (
    <Router>
      <TopNav />
      {routes.map(({ Component, path }, i) => {
        return (
          <Route
            component={Component}
            exact
            key={i}
            path={path}
          />
        )
      })}
    </Router>
  )
}

export default App;
