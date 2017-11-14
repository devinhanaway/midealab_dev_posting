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
      <div >

         <div id="mobileNav" className="ui left simple dropdown absolute">
           {/* <div className="absolute">
           <Link to="/" animate={{offset: 0, duration: 1000}}  className="item"><img className="ui image small" src="https://daks2k3a4ib2z.cloudfront.net/5720705935a3eec8453146fd/5720705935a3eec84531474d_logo.png"></img></Link>
       </div> */}

           <div className="absolute"><img className="ui image small centered header" src="https://daks2k3a4ib2z.cloudfront.net/5720705935a3eec8453146fd/5720705935a3eec84531474d_logo.png"></img><span></span>

             {/* <i className="dropdown icon"></i> */}

           </div>
            <div id="innerMenu" className="menu absolute">
              <Scrollchor id="scrollchor" animate={{offset: 0, duration: 1000}} to="top" className="item">Top</Scrollchor>
            <Scrollchor id="scrollchor" animate={{offset: 0, duration: 1000}} to="digProduct" className="item">Digital Product </Scrollchor>
          <Scrollchor id="scrollchor" animate={{offset: 0, duration: 1000}} to="#section2" className="item">Perks</Scrollchor>
        <Scrollchor id="scrollchor" animate={{offset: 0, duration: 1000}} to="#sections3" className="item">Dev Community</Scrollchor>
      <Scrollchor id="scrollchor" animate={{offset: 0, duration: 1000}} to="#eligibility" className="item">Eligibility</Scrollchor>
    <Scrollchor id="scrollchor" animate={{offset: 0, duration: 1000}} to="" className="item"><Link id="scrollchor" to="/apply">Apply</Link></Scrollchor>
          </div>
        </div>
      </div>


    )
  }
}
