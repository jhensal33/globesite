import React, { Component } from 'react';
import banner3 from './assets/banner3.png'

class Memberships extends React.Component{
    
    render() {

        let membershipBanner = <img src={banner3} alt='banner3' className='bkgrnd'/>

        let economyMem = "https://dashboard.globeboarding.com/purchase/wLldB5KVNFF294hcgNp6R?password=ECONOMY"
        let economyButton = <a href={economyMem} target="_blank"> <button type="button" className="btn-circle"><span> Subscribe </span></button> </a>

        let centurionMem = "https://dashboard.globeboarding.com/purchase/u9SukdAhI-dZDv_IMOmE9?password=CENTURION"
        let centurionButton = <a href={centurionMem} target="_blank"> <button type="button" className="btn-circle"><span> Subscribe </span></button> </a>

    return (
        <div className="banners" id="memberships"> 
            <section className="parent-bg">
            {membershipBanner}
            {/* <div className="square-mems"> */}

                {/* <div className='column'>
                    <div className='row1'>
                        <h3>Economy</h3>
                        <p>Our Economy plan is well suited for all levels of travel. 
                        Booking just one of our deals will likely pay for your membership for up to a decade or more.
                        <br></br> <br></br>
                        This includes all of our economy level flight deals for all locations.
                        </p>
                        {economyButton}
                    </div>
                    <div className='row2'>
                        <h3>Centurion</h3>
                        <p>Centurion is great for both the first time traveler and the vastly experienced traveler. 
                        If you need extra help setting up your first trip, or want the most exclusive deals to truly see the world, 
                        Centurion is for you. 
                        </p>
                        {centurionButton}
                    </div>
                </div> */}


                {/* <div className="grid-container-features">
                    <div className="grid-item-gray">
                        <h3>Economy</h3>
                        <p>Our Economy plan is well suited for all levels of travel. 
                        Booking just one of our deals will likely pay for your membership for up to a decade or more.
                        <br></br> <br></br>
                        This includes all of our economy level flight deals for all locations.
                        </p>
                        {economyButton}
                        <br></br>
                        <br></br>
                        <p> </p>
                    </div>
                    <div className="grid-item-blue">
                        <h3>Centurion</h3>
                        <p>Centurion is great for both the first time traveler and the vastly experienced traveler. 
                        If you need extra help setting up your first trip, or want the most exclusive deals to truly see the world, 
                        Centurion is for you. 
                        </p>
                        {centurionButton}
                        <br></br>
                        <br></br>
                        <p> </p>
                    </div>
                </div> */}

            <div className="square-features">
                <div className="grid-container-2">
                <div className="grid-item"><h3>$500+<p>Average savings per booked flight</p></h3></div>
                <div className="grid-item-blue">               
                    <h3>Centurion
                        <p>Centurion is great for both the first time traveler and the vastly experienced traveler. 
                        If you need extra help setting up your first trip, or want the most exclusive deals to truly see the world, 
                        Centurion is for you. 
                        </p>
                        {centurionButton}
                        </h3>
                </div>
            </div>
            
            </div>
            </section>
        </div>
      );

    }

}
export default Memberships;