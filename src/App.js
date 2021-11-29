import transparentLogo from './assets/globeboarding-transparent.png'
import mountain from './assets/background-mountain.mp4'
import banner2 from './assets/banner2.png'
import banner3 from './assets/banner3.png'
import banner4 from './assets/banner4.png'


import './App.css';
// import { Button} from 'react-bootstrap';
import React, { Component } from 'react';

class App extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() { 

  let mountainVideo =     
  <video autoPlay loop muted className="bkgrnd" id="video-bg"> 
    <source src={mountain} type="video/mp4" />
  </video>


let navbar = <ul className="nav"> 
                <li><a href="#features"> <button type="button" className="btn-circle "><span> Features </span></button> </a></li>
                <li><a href="#memberships"> <button type="button" className="btn-circle "><span> Memberships </span></button> </a></li>
                <li><a href="#about"> <button type="button" className="btn-circle "><span> About </span></button> </a></li>
                <li><a href="https://dashboard.globeboarding.com/login"> <button type="button" className="btn-circle "><span> Manage Subscription </span></button> </a></li>
              </ul>

  let globeboardingImage = <img src={transparentLogo} alt='logo' className="brand-img"/>
  let slogan = <span className="slogan">Travel the globe. Now Boarding.</span>

  let anchorButton = 
  <a href="https://react.school" target="_blank" className='button-bar'>
    {/* <Button variant="custom" size="lg"> Link Button </Button> */}
    <button type="button" className="btn-circle "><span> Link Button </span></button>
  </a>

  let headerPage =       
  <div>
    <section className="parent-bg">
      {navbar}
      {globeboardingImage}
      {slogan}
      {mountainVideo}
    </section>
</div>


let secondBanner = <img src={banner2} alt='banner2' className='bkgrnd'/>
let thirdBanner = <img src={banner3} alt='banner3' className='bkgrnd'/>
let fourthBanner = <img src={banner4} alt='banner4' className='bkgrnd'/>


let features =  
<div className="banners" id="features"> 
  {secondBanner}
</div>


let memberships =  
<div className="banners" id="memberships"> 
  {thirdBanner}
</div>

let about =  
<div className="banners" id="about"> 
  {fourthBanner}
</div>

  return (
    <div>
      {headerPage}
      {features}
      {memberships}
      {about}
    </div>
  );
}
}
export default App;
