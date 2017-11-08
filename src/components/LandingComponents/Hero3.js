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
        <div id="section03_content" class="ui">
          <div>
            <h1 id="black">Midealab Developer Network</h1>
            <p>Midealab is seeking to extend our community of highly talented and motivated developers to join our ever-expanding team. Remote and dispersed teams are at the foundation of Midealab, with projects ranging from 3 month projects for US clients, to developing one of the startups launched by Midealab’s founders.</p>
            <p>
            With new client projects and dynamic internal opportunities popping up all the time, we are invested in finding current or future projects that fit with your skill sets and goals. We don’t keep you from working on other projects, but hope you won’t want to work on anything but Midealab projects :)
            </p>
          </div>
          <div>
            <img className="ui medium left floated image" src="https://media.licdn.com/media/AAEAAQAAAAAAAAlTAAAAJDM4ZmQ0OWU5LWFiZTgtNDgxZi1iMDFhLWNjZWFhZTM4OGZhNQ.png"/>
          {/* <img className="ui small right floated image" src="https://images.pexels.com/photos/8264/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"/> */}
            <li>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</li>
          <li>Join our startups ecosystem and get all the benfits of Midealabs studio, </li>
          </div>
      </div>
      <section id="section03" class="demo">

          <a href="#section04"><span></span>Scroll</a>

        </section>
      </div>


    )
  }
}
