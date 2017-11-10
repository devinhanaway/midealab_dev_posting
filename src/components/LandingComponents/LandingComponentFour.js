import React, { Component } from 'react';
import '../../App.css';
import '../../App_paralax.css';




export default class LandingComponentFour extends Component{

  render(){

    return(

      <div classNameName="padding ui">

      <div className="ui" id="network">

        <article id="section03_content" class="ui">
          <h1 id="pad_bottom"className="ui centered header">Midealab Developer Network</h1>

          <div id="black">


          <h2>Midealab is seeking to extend our community of highly talented and motivated developers to join our ever-expanding team. Remote and dispersed teams are at the foundation of Midealab, with projects ranging from 3 month projects for US clients, to developing one of the startups launched by Midealab’s founders.</h2>
            {/* <p>
            With new client projects and dynamic internal opportunities popping up all the time, we are invested in finding current or future projects that fit with your skill sets and goals. We don’t keep you from working on other projects, but hope you won’t want to work on anything but Midealab projects :)
            </p> */}
          </div>
          <div className="ui two column grid stackable"  id="bullets">

            {/* <img className="ui medium left floated image" src="https://media.licdn.com/media/AAEAAQAAAAAAAAlTAAAAJDM4ZmQ0OWU5LWFiZTgtNDgxZi1iMDFhLWNjZWFhZTM4OGZhNQ.png"/> */}
            <div className="ui column">
              <img className="ui centered large image" src="https://images.pexels.com/photos/8264/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"/>

            </div>
        <div className="ui column">
            <li>Work on Midealab Projects</li>
            <li>Work on on your own projects</li>
            <li>Projects are sourced for you</li>
            <li>Only take projects when you want</li>
            <li>Access to office space</li>
        </div>

          </div>
      </article>
    </div>
      </div>
    )
  }
}
