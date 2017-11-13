import React, { Component } from 'react';
import '../../App_paralax.css';




export default class LandingComponentThree extends Component{

  render(){

    return(
      <div  className="padding ui">
        <div id="eligibility" className="padding ui">

          <h1 id="pad_bottom"className="ui header">What We Look For In our Developers...</h1>
      </div>
      <div className="ui" id="idea_candidate">
          <article id="ideal_candidate_image">

            <div id="grid"  className="ui two column grid stackable ">

            <div id="skills1" className="ui column centered header">
              <div id="absolute">
                <i className="material-icons">&#xE90F;</i>
                <h2>You’re an Inspired Developer </h2>
                <p>Give you a set of specs and user stories and you will build an interface that not only meets the requirements, but anticipates user experience features that were missed. You have a deep appreciation for and understanding of the people and platforms you’re developing for.</p>
              </div>

            </div>

          <div id="skills2" className="ui column centered header">
            <div id="absolute">
              <i className="material-icons md-dark">favorite_border</i>

              <h2>You aspire to more than just "build" </h2>
              <p> You don’t just want to build product 9-5 for a paycheck. You want to continue to develop as a technologist. Learning new languages and adapting to different projects.</p>
            </div>

          </div>



            <div id="skills3" className="ui column centered header">
              <div id="absolute">

                <i className="material-icons">playlist_add_check</i>
                <h2>You value quality over quantity</h2>
                <p>You don’t spend four rounds on something that should only take two, and you have a proven record of avoiding late nights by being extremely efficient during the day.</p>

              </div>
            </div>


          <div id="skills4" className="ui column centered header">
            <div id="absolute">
              <i className="material-icons md-dark">important_devices</i>
              <h2>Technology Expert and Sponge</h2>
              <p>You have a core set of technology that you have mastered, but you are also get excited for the opportunity to work on, and learn, new technologies. In application please specify your skill sets and preferred technologies and stack.</p>
            </div>
          </div>


            <div id="skills5" className="ui column centered header">
              <div id="absolute">
                <i className="material-icons md-dark">autorenew</i>
                <h2>Process matter to you</h2>
                <p>Commented git commits, testing, and remote workflow are second nature to you.  We love being small and scrappy and making it up as we go. You do too.</p>
              </div>
            </div>


          <div id="skills6" className="ui column centered header">
            <div id="absolute">
              <i className="material-icons md-dark">grade</i>

              <h2>Bonus if</h2>
            <p>You love building software, but also are interested in startups and are entrepreneurial in nature. Our team/network off developers will have the opportunity to work on client projects and portfolio tups that are launched by our founders.</p>
            </div>

          </div>
          </div>


        </article>
      </div>

      </div>
    )
  }
}
