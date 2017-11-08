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

    }

  }



  render(){



    return(
      <div>
        <section id="section04" class="demo">
          <h1>Scroll Down Button #4</h1>
          <a href="#section05"><span></span>Scroll</a>
        </section>
      </div>


    )
  }
}
