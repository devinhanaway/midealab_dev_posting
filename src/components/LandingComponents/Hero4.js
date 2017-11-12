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
                  <i className="material-icons">&#xE90F;</i>
                  <h2>You’re an Inspired Developer </h2>
                  <p>Give you a set of specs and user stories and you will build an interface that not only meets the requirements, but anticipates user experience features that were missed. You have a deep appreciation for and understanding of the people and platforms you’re developing for.</p>  

                 </div>
              </div>


              <div id="perk2" className="column">
                <div className="ui segment container" id="absolute_nopadding">

                  {/* <img className="ui medium centered image" src="../../../images/globalCitizen.jpg"/> */}
                <h2>Flexibility & Community</h2>
              <h3>You will have the freedom to work from anywhere, but also have an office and startup culture to </h3>
              </div>
            </div>

            </div>


            <div className="ui three column grid stackable" id="grid_bottom">


              <div id="perk3" className="column">
                <div className="ui segment container" id="absolute_nopadding">
                  {/* <img className="ui medium centered image" src="../../../images/connection.jpg"/> */}
                <h2>Competative Compensation + Freedom</h2>
              <h3>Being a part of Midealab's Dev Network doesn't mean you can't work other jobs. It just gaurentees competative pay and consistent work opportunities</h3>
                 </div>
              </div>


              {/* <div className="column">

              </div> */}

              <div id="perk4" className="column">
                <div className="ui segment container" id="absolute_nopadding">
                  {/* <img className="ui medium centered image" src="../../../images/connection.jpg"/> */}
                <h2>Competative Compensation + Freedom</h2>
              <h3>Being a part of Midealab's Dev Network doesn't mean you can't work other jobs. It just gaurentees competative pay and consistent work opportunities</h3>
                 </div>
              </div>

            </div>

          </article>


        </div>

      </div>

    )
  }
}
