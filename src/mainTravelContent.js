import React from 'react';
import travel from './travel_main_bkg.svg';


class mainContent extends React.Component {
    render() {
      return (
        <div className="main-content">
                    <article className="main-text">
                        <h2>Where do you want to <span>explore?</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci beatae nisi asperiores molestias quas quasi vel voluptatibu.</p>
                        <div className="booking-btn">
                            <button className="btn-ticket">Lets Fly</button>
                            <button className="btn-book">Book Now</button>
                        </div>
                    </article>
                    <div className="travel-img">
                        <img className="travel-img" src={travel} alt="Tourist Attractions" />
                    </div>
        </div>
      )
    }
  }


export default mainContent;