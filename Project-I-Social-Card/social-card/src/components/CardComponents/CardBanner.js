import React from 'react';
import './Card.css';
const CardBanner = () => {
    return(
        <div className="banner">
            <img src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"></img>
            <div className="banner-text">
            <h5>Get Started With React</h5>
            <p>React makes it painless to make interactive UIs. Design simple views for each state in your application.</p>
            <h6>reactjs.org</h6>
            </div>
        </div>

    );
}

export default CardBanner;