import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'


import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'




import App from './App';
import Projects from './components/Projects'
import About from './components/About'
import Landing from './components/Landing'
import Timeline from './components/Timeline'
import Inverge from './components/Inverge'
import Hero from './components/LandingComponents/Hero'
import Home from './components/Home'
import Navbar from './components/Navbar'

const middleware = [thunk]
const render = () => {




ReactDOM.render(
  <Router>
    <div>
    <Route exact path='/' component={Home}/>
    <Route path='/inverge' component={Inverge}/>



    </div>
  </Router>,
  document.getElementById('root'));
}
render();
