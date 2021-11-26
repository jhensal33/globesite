import transparentLogo from './assets/globeboarding-transparent.png'
import mountain from './assets/background-mountain.mp4'
import './App.css';
import React, { Component } from 'react';

class App extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() { 

  let mountainVideo =     
  <video autoPlay loop muted className="bkgrnd-vid" id="video-bg"> 
    <source src={mountain} type="video/mp4" />
  </video>

  let globeboardingImage = <img src={transparentLogo} alt='logo' className="brand-img"/>
  let slogan = <span className="slogan" style={{color: 0xFFFF}}>Travel the globe. Now Boarding.</span>

  let headerPage =       
  <div>
    <section className="parent-bg">
      {globeboardingImage}
      {slogan}
      {mountainVideo}
    </section>
</div>

let bodyPage =  
<div> 
  <h1>Globeboarding</h1>
</div>

  return (
    <div>
        {headerPage}
        {bodyPage}
    </div>
  );
}
}
export default App;
