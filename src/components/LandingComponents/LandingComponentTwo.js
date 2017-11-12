import React, { Component } from 'react';
import '../../App.css';




export default class LandingComponentTwo extends Component{

  render(){

    return(
      <div >
          <h1 id="section2" className=" ui center aligned icon header">Why Join midealab?</h1>


        <div id="perks">
          <article className="landing2" id="section03">


          <div className="ui three column grid stackable">
              <div id="perk1" className="column">
                <div className="ui segment container" id="absolute_nopadding">
                  {/* <img className="ui medium centered image" src="../../../images/peopleMap.jpg"/> */}
                    <h2>Work From Anywhere or The Studio:</h2>
                  <h3>Our dispersed workforce model allows you to work from wherever you want, though you’re welcome to join us within our development studio in downtown Lviv, and work alongside our portfolio companies and other creatives.</h3>
                    {/* <h2>Startup + Development Studio</h2>
                  <h3>Work on a client products and startups launched by Midealab's experienced founders.</h3> */}


                 </div>
              </div>


              <div id="perk2" className="column">
                <div className="ui segment container" id="absolute_nopadding">

                  {/* <img className="ui medium centered image" src="../../../images/globalCitizen.jpg"/> */}
                {/* <h2>Flexibility & Community</h2>
              <h3>You will have the freedom to work from anywhere, but also have an office and startup culture to </h3> */}
                <h2>Competitive Compensation Startup Culture:</h2>
              <h3>Become part of startup studio community and become surrounded with world class developers, entrepreneurs and creatives. Consistent client work + opportunities to join internal startups that Midealab’s founders launch.</h3>
              </div>
            </div>

            </div>


            <div className="ui three column grid stackable" id="grid_bottom">


              <div id="perk3" className="column">
                <div className="ui segment container" id="absolute_nopadding">
                  {/* <img className="ui medium centered image" src="../../../images/connection.jpg"/> */}
                {/* <h2>Competative Compensation + Studio Culture</h2>
              <h3>Being a part of Midealab's Dev Network doesn't mean you can't work other jobs. It just gaurentees competative pay and consistent work opportunities</h3> */}
                <h2>Flexibility + Community and Support:</h2>
              <h3>Have the flexibility to accept client projects or decline projects, while continuing to be treated like part of the Midealab community. Everyone who joins Midealab becomes part of our startup studio family. This includes happy hours, company outings, and internal hackathons:</h3>
                 </div>
              </div>


              {/* <div className="column">

              </div> */}

              <div id="perk4" className="column">
                <div className="ui segment container" id="absolute_nopadding">
                  {/* <img className="ui medium centered image" src="../../../images/connection.jpg"/> */}
                {/* <h2>Competative Compensation + Freedom</h2>
              <h3>Being a part of Midealab's Dev Network doesn't mean you can't work other jobs. It just gaurentees competative pay and consistent work opportunities</h3> */}
                <h2>Value, Design, Development:</h2>
              <h3>The Midealab approach toward building products and starting companies is centered around human centered value creation. We are focused on creating meaning and value for individuals and the world at large. This starts with our employees and customers, where we are creating a culture around community, growth and development. </h3>
                 </div>
              </div>

            </div>

          </article>


        </div>

      </div>

    )
  }
}
