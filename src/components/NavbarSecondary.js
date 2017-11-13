import React, { Component } from 'react';
import '../App_Hero.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {Redirect} from 'react-router-dom'
import $ from "jquery";
import Scrollchor from 'react-scrollchor';





export default class Navbar extends Component{
  constructor(){
    super()
    this.state = {
      title: "Explore, Travel, Connect",
    }

  }


  render(){

    return(
      <div id="navbarSecondary">
        <nav   className="ui inverted secondary pointing menu stackable">
             {/* <Scrollchor animate={{offset: 0, duration: 1000}} to="top" className="item"><img className="ui image tiny" src="https://daks2k3a4ib2z.cloudfront.net/5720705935a3eec8453146fd/5720705935a3eec84531474d_logo.png"></img></Scrollchor> */}
             <Link to="/" animate={{offset: 0, duration: 1000}}  className="item"><img className="ui image small" src="https://daks2k3a4ib2z.cloudfront.net/5720705935a3eec8453146fd/5720705935a3eec84531474d_logo.png"></img></Link>
           <Scrollchor animate={{offset: 0, duration: 1000}} to="/" className="item"><Link to ="/">Home</Link></Scrollchor>
         {/* <Scrollchor animate={{offset: 0, duration: 1000}} to="#section2" className="item">Perks</Scrollchor>
       <Scrollchor animate={{offset: 0, duration: 1000}} to="#sections3" className="item">Dev Community</Scrollchor>
     <Scrollchor animate={{offset: 0, duration: 1000}} to="#eligibility" className="item">Eligibility</Scrollchor>
   <Scrollchor animate={{offset: 0, duration: 1000}} to="#thanks" className="item">Apply</Scrollchor> */}
         </nav>
      </div>


    )
  }
}
