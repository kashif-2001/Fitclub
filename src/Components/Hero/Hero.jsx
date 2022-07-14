import React from 'react';
import Header from '../Header/Header';
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header />

            {/* the best add */}
            <div className="the-best-ad">
                <div></div>
                <span>the best fitness club in the town</span>
            </div>

            {/* Hero Heading */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div className='hero-decs'>
                    <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>
            {/* figures */}
            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>expert coaches</span>
                </div>

                <div>
                    <span>+978</span>
                    <span>Member joined</span>
                </div>

                <div>
                    <span>+50</span>
                    <span>Fitness programs</span>
                </div>
            </div>
        </div>
        <div className="right-h">world</div>
    </div>
  )
}

export default Hero;