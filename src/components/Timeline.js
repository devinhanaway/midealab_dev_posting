import React, { Component } from 'react';
import '../App_paralax.css';



export default class Timeline extends Component{

  render(){
    return(
      <div className="Timeline">
        <div className="container ">
          <h1 className="ui centered header">What We Look For In our Developers...</h1>
        </div>
          <div id="cd-timeline" className="cd-container">
            <div className="cd-timeline-block">
              <div className="cd-timeline-content">
                <h2>You’re an Inspired Developer </h2>
              <div className="timeline-content-info">

                </div>
                <p>Give you a set of specs and user stories and you will build an interface that not only meets the requirements, but anticipates user experience features that were missed. You have a deep appreciation for and understanding of the people and platforms you’re developing for.</p>

              </div>
            </div>

            <div className="cd-timeline-block">


              <div className="cd-timeline-content">
                <h2>You aspire to more than just "build" </h2>
                <p> You don’t just want to build product 9-5 for a paycheck. You want to continue to develop as a technologist. Learning new languages and adapting to different projects.</p>
              </div>
            </div>

            <div className="cd-timeline-block">


              <div className="cd-timeline-content">
                <h2>You value quality over quantity</h2>
                <p>You don’t spend four rounds on something that should only take two, and you have a proven record of avoiding late nights by being extremely efficient during the day.</p>
              </div>
            </div>

            <div className="cd-timeline-block">


              <div className="cd-timeline-content">
                <h2>Process matter to you</h2>
              <p>Commented git commits, testing, and remote workflow are second nature to you.  We love being small and scrappy and making it up as we go. You do too.</p>
              </div>
            </div>

            <div className="cd-timeline-block">


              <div className="cd-timeline-content">
                <h2>Technology Expert and Sponge</h2>
                <p>You have a core set of technology that you have mastered, but you are also get excited for the opportunity to work on, and learn, new technologies. In application please specify your skill sets and preferred technologies and stack.</p>
              </div>
            </div>

            <div className="cd-timeline-block">


              {/* <div className="cd-timeline-content">
                <h2>Final Section</h2>
                <p>This is the content of the last div</p>
              <span className="cd-date">Feb 26</span>
              </div> */}
            </div>
          </div>

      </div>
    )
  }
}
