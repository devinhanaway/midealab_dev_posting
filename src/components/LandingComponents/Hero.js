import React, { Component } from 'react';
import '../../App_Hero.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {Redirect} from 'react-router-dom'
import $ from "jquery";
import Scrollchor from 'react-scrollchor';





export default class HeroImage extends Component{
  constructor(){
    super()
    this.state = {
    }

  }


  render(){


    return(
      <div>
        <div id="top">
          {/* <a  href="#section01"><img src="https://daks2k3a4ib2z.cloudfront.net/5720705935a3eec8453146fd/5720705935a3eec84531474d_logo.png"></img></a> */}
        </div>
        <section id="section01" class="demo">
          <h1>Join MideaLab</h1><h2>"my-idea-lab"</h2>
          {/* <h2>Midealab is looking to extend our network of Developers</h2> */}

            <Scrollchor id="scroll" animate={{offset: 0, duration: 1000}} to="#section2" className="item">
              <i className=" material-icons arrow ">arrow_drop_down_circle</i>

            </Scrollchor>

        </section>

      </div>


    )
  }
}
