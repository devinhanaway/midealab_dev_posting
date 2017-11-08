import React, { Component } from 'react';
import '../../App_Hero.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {Redirect} from 'react-router-dom'




const myTitle =['Stay in touch with the people you actually care about','Explore, Travel, Connect','Share and expand your network with your closest friends', 'Become a Nomad']



export default class HeroImage extends Component{
  constructor(){
    super()
    this.state = {
      title: "Explore, Travel, Connect",
    }

  }



  render(){
    return(
      <div>

        <section id="section02" class="demo">
          <h1>Midealab Developer Network</h1>
        <a href="#section03"><span></span>Scroll</a>
        <h2>Midealab is looking to extend our network of Developers</h2>

        </section>
      </div>


    )
  }
}
