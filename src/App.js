import React, { Component } from 'react';
import './App.css';
import './App_Hero.css';
// import Header from './components/Header'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"




class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
      <div>


        {/* <About />
        <Timeline />
        <Projects /> */}
      {/* <div className="nav-bar"></div>
        <div class="navbar-header">
          <span>Devin Hanaway   | All License Reserved</span>
        </div> */}
      </div>
    </MuiThemeProvider>

    );
  }
}

export default App;
