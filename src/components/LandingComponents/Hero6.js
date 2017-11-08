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

  // handleClick = (e) =>{
  //   let modal = "SOCIAL_SIGN_IN"
  //   console.log(modal);
  //   e.preventDefault();
  //   setModal(modal)
  // }


  render(){



    return(
      <div>

        <section id="thanks">
          <div>
            <h2 className="thanks">Thanks!</h2>
          <p> If You are Interested in Joining our Network of Developers, Please Email Us with a CV, Cover Letter and a link to your Github and Portfolio site.

          </p>
            <a className="button" href="mailto:jobs@midealab.com" to="_">Email Us</a>
          </div>
        </section>
      </div>


    )
  }
}
