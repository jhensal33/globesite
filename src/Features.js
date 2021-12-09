import React, { Component } from 'react';
import banner2 from './assets/banner2.png'

class Features extends React.Component{
    
    
    render() {

        let featuresBanner = <img src={banner2} alt='banner2' className='bkgrnd'/>

    return (
        <div className="banners" id="features"> 
        <section className="parent-bg">
        {featuresBanner}
            <div className="square-features">
                <div className="grid-container">
                <div className="grid-item"><h3>$500+<p>Average savings per booked flight</p></h3></div>
                <div className="grid-item"><h3>Free<p>Learn to travel for free with credit cards</p></h3></div>
                <div className="grid-item"><h3>1 on 1<p>1 on 1 support for your travel and credit needs</p></h3></div> 
                <div className="grid-item"><h3>800+<p>Start boosting your credit score</p></h3></div>
                <div className="grid-item"><h3>All<p>We support all major airlines, cruise lines, and lodgings</p></h3></div>
                <div className="grid-item"><h3>All 7<p>We support travel to and from all 7 continents</p></h3></div>
            </div>
            </div>
        </section>
        </div>
      );

    }

}
export default Features;