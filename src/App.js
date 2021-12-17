import transparentLogo from './assets/globeboarding-transparent.png'
import mountain from './assets/background-mountain.mp4'
import { Helmet } from "react-helmet";

import './App.css';
import Features from './Features.js';
import Memberships from './Memberships.js'
import About from './About.js'
import React, { Component } from 'react';
class App extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
    }
  }


  render() { 

  let mountainVideo =     
  <video autoPlay playsinline loop muted className="bkgrnd" id="video-bg"> 
    <source src={mountain} type="video/mp4" />
  </video>


let navbar = <ul className="nav"> 
                <li><a href="#features"> <button type="button" className="btn-circle "><span> Features </span></button> </a></li>
                <li><a href="#memberships"> <button type="button" className="btn-circle "><span> Memberships </span></button> </a></li>
                <li><a href="#about"> <button type="button" className="btn-circle "><span> About </span></button> </a></li>
                <li><a href="https://dashboard.globeboarding.com/login"> <button type="button" className="btn-circle "><span> Account </span></button> </a></li>
              </ul>

  let globeboardingImage = <img src={transparentLogo} alt='logo' className="brand-img"/>

  let slogan = 
  <span className="slogan">
    Travel the globe. Now Boarding.
  </span>


  let headerPage =       
  <div>
    <section className="parent-bg">
      {navbar}
      {globeboardingImage}
      {slogan}
      {mountainVideo}
    </section>
</div>

  return (
    <div>
      {headerPage}
      <Features/>
      <Memberships/>
      <About/>
    </div>
  );
}
}
export default App;
