

import React, { Component } from 'react';
import '../../App.css';
import '../../App_paralax.css';




export default class LandingComponentFour extends Component{

  render(){

    return(

      <div classNameName="padding ui">

      <div className="ui" id="network">

        <article id="sections3" class="ui">

          <div id="devCommunityContent">


          </div>
          <div id="devCommunity">
            <h1 id="pad_bottom"className="ui header">Midealab Developer Community</h1>


          </div>

          <div id="devCommunityContent">


          <h2>Midealab is seeking to extend our community of highly talented and motivated developers to join our ever-expanding team. Remote and dispersed teams are at the foundation of Midealab, with projects ranging from 3 month projects for US clients, to developing one of the startups launched by Midealab’s founders.</h2>
            {/* <p>
            With new client projects and dynamic internal opportunities popping up all the time, we are invested in finding current or future projects that fit with your skill sets and goals. We don’t keep you from working on other projects, but hope you won’t want to work on anything but Midealab projects :)
            </p> */}
          </div>
          <div className="ui two column grid stackable"  id="community_image">

            {/* <img className="ui medium left floated image" src="https://media.licdn.com/media/AAEAAQAAAAAAAAlTAAAAJDM4ZmQ0OWU5LWFiZTgtNDgxZi1iMDFhLWNjZWFhZTM4OGZhNQ.png"/> */}
            <div className="ui column">
              <img className="ui circular centered medium image" src="https://cdn.stocksnap.io/img-thumbs/280h/JA1HKXSB6M.jpg"/>

            </div>
        <div className="ui column">
          <li>Projects are sourced for you</li>
          <li>Free office space??</li>
          {/* <li>Only take projects when you want</li> */}
          <li>Work on client projects</li>
          <li>Work on Midealab startups</li>
          <li>Work on on your own projects</li>
        </div>

          </div>
      </article>
    </div>
      </div>
    )
  }
}
