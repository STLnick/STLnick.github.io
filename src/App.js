import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { TopNav } from './components'

import './App.css';

function App() {
  return (
    <Router>
      <TopNav />
    </Router>
  )
}

export default App;
