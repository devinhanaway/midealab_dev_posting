import React, { Component } from 'react';
import '../../App.css';




export default class LandingComponentTwo extends Component{

  render(){

    return(
      <div >
          <h1 id="section2" className=" ui header">Why Join midealab?</h1>


        <div id="perks">
          <article className="landing2" id="section03">


            <div className="ui three column grid stackable">
              <div id="perk1" className="column">
                <div className="ui segment container" id="absolute_nopadding">
                  {/* <img className="ui medium centered image" src="../../../images/peopleMap.jpg"/> */}
                    <h2>Work From Anywhere    or from The Studio:</h2>
                  <p>Our dispersed workforce model allows you to work from wherever you want, though you’re welcome to join us within our development studio in downtown Lviv, and work alongside our portfolio companies and other creatives.</p>
                {/* <h2>Startup + Development Studio</h2>
                  <p>Work on a client products and startups launched by Midealab's experienced founders.</p> */}


                 </div>
              </div>


              <div id="perk2" className="column">
                <div className="ui segment container" id="absolute_nopadding">

                  {/* <img className="ui medium centered image" src="../../../images/globalCitizen.jpg"/> */}
                {/* <h2>Flexibility & Community</h2>
              <p>You will have the freedom to work from anywhere, but also have an office and startup culture to </p> */}
                <h2>Competitive Compensation W/ Startup Culture:</h2>
              <p>Become part of startup studio community and become surrounded with world class developers, entrepreneurs and creatives. Consistent client work + opportunities to join internal startups that Midealab’s founders launch.</p>
              </div>
            </div>

            </div>


            <div className="ui three column grid stackable" id="grid_bottom">


              <div id="perk3" className="column">
                <div className="ui segment container" id="absolute_nopadding">
                  {/* <img className="ui medium centered image" src="../../../images/connection.jpg"/> */}
                {/* <h2>Competative Compensation + Studio Culture</h2>
              <p>Being a part of Midealab's Dev Network doesn't mean you can't work other jobs. It just gaurentees competative pay and consistent work opportunities</p> */}
                <h2>Flexibility + Community and Support:</h2>
              <p>Have the flexibility to accept client projects or decline projects, while continuing to be treated like part of the Midealab community. Everyone who joins Midealab becomes part of our startup studio family. This includes happy hours, company outings, and internal hackathons:</p>
                 </div>
              </div>


              {/* <div className="column">

              </div> */}

              <div id="perk4" className="column">
                <div className="ui segment container" id="absolute_nopadding">
                  {/* <img className="ui medium centered image" src="../../../images/connection.jpg"/> */}
                {/* <h2>Competative Compensation + Freedom</h2>
              <p>Being a part of Midealab's Dev Network doesn't mean you can't work other jobs. It just gaurentees competative pay and consistent work opportunities</p> */}
                <h2>Value, Design, Development:</h2>
              <p>The Midealab approach toward building products and starting companies is centered around human centered value creation. We are focused on creating meaning and value for individuals and the world at large. This starts with our employees and customers, where we are creating a culture around community, growth and development. </p>
                 </div>
              </div>

            </div>

          </article>


        </div>

      </div>

    )
  }
}
