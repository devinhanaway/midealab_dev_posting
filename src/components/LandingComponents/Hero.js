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
          <div>
              <h1>Join Our International Digital Product Studio</h1>
            <h3>Midealab is looking to extend our developer community</h3>
            {/* <p>"my-idea-lab"</p> */}
            {/* <h2>Midealab is looking to extend our network of Developers</h2> */}

          </div>


            <Scrollchor id="scroll" animate={{offset: 0, duration: 1000}} to="#digProduct" className="item">
              <i className=" material-icons arrow ">keyboard_arrow_down</i>
              {/* <i className=" material-icons arrow ">arrow_drop_down_circle</i> */}

            </Scrollchor>

        </section>

      </div>


    )
  }
}
