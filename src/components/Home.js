import React, { Component } from 'react';
import '../App.css';

import Hero from './LandingComponents/Hero'
import Hero2 from './LandingComponents/Hero2'
import Hero3 from './LandingComponents/Hero3'
import Hero4 from './LandingComponents/Hero4'
import Hero5 from './LandingComponents/Hero5'
import Hero6 from './LandingComponents/Hero6'
import Timeline from './Timeline'


import LandingComponentTwo from './LandingComponents/LandingComponentTwo'
import LandingComponentThree from './LandingComponents/LandingComponentThree'
import LandingComponentFour from './LandingComponents/LandingComponentFour'

class Landing extends Component {


  render(){
    return(
      <div>
        <Hero />
        {/* <Hero3/> */}
        <LandingComponentTwo/>
        <LandingComponentFour/>
        {/* <Timeline/> */}

        {/* <Hero2 /> */}
        {/* <Hero4/> */}
        {/* <Hero5/> */}
        <LandingComponentThree/>
        <Hero6/>


        </div>
    )
  }
}

export default Landing;
