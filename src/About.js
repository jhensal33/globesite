import React, { Component } from 'react';
import banner4 from './assets/banner4.png'

class Memberships extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      windowWidth: this.props.width,
      windowHeight: this.props.height
    }
  }
    
    render() {

        let fourthBanner = <img src={banner4} alt='banner4' className='bkgrnd'/>

        let title = <h1>How we operate</h1>

        let textWidth = Math.round(this.state.windowWidth * 0.5);

        const style = {
          width: {textWidth}
        };

        let about = <p>
          {/* Wherever you are located, wherever you are looking to travel - we will help you get there affordably. Our proprietary software scans the internet for optimal travel prices from any location to any destination. Our services are great for any level of traveler; whether you're looking to see the world for pennies on the dollar, or to find insane deals on luxurious vacations. One deal through us will pay for many years of membership alone.
          <br></br>
          <br></br>
          Globeboarding finds and curates the best deals available for you. Currently, these deals are communicated to you through Discord, which is a server/chat application like Skype or Slack. We recommend downloading Discord on all of your devices and creating an account prior to signing up.
          Deals are most readily available and likely to appear three to twelve months in advance. If you have any questions please feel free to contact us below! */}
        </p>
    return (
      <div className="banners" id="about"> 
      <section className="parent-bg">
        {fourthBanner}
        <div className="about">
          {title}
          {about}
        </div>
        </section>
        <span className="footer">
          <p>footer</p>
        </span>

      </div>
      );

    }

}
export default Memberships;