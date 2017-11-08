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
        <div id="top">
          <a  href="#section01"><span></span></a>
        </div>
        <section id="section01" class="demo">
          <h1>Join Midealab</h1>
          <h2>Midealab is looking to extend our network of Developers</h2>
          <a href="#section03"><span></span>Scroll</a>
        </section>
      
      </div>


    )
  }
}
