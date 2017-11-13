import React, { Component } from 'react';
import '../../App_Hero.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {Redirect} from 'react-router-dom'
import Login from '../Login'




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
            {/* <h2 className="thanks">Thanks!</h2> */}
          <h1>Apply to Join!</h1>
        <p> If You are Interested in joining the Midealab digital product studio as apart of our Developer Community, we would love to meet you and see if it is a good fit for both of us.

          </p>
            {/* <a className="button" href="mailto:jobs@midealab.com" to="_">Email Us</a> */}
            <button className="ui button">
                    <Link to="/apply">Apply</Link>
            </button>

          </div>
        </section>
      </div>


    )
  }
}
