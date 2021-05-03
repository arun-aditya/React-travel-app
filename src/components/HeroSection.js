import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import '../App.css';


function HeroSection(){
    return(
            <div className="hero-container">     
                {/* <video src='./video-1.mp4' autoPlay loop muted  /> */}


                <video src={require('../videos/video-2.mp4').default} autoPlay loop muted />
                
                {/* <video width="750" height="500" controls >
                     <source src="./video-1.mp4" type="-video/mp4" autoPlay loop muted />
                </video> */}

                <h1>Adventure Awaits</h1>
                <p>What are you waiting for</p>
                <div className="hero-btns">
                    <Button className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                GET STARTED       
             </Button>
                    <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    >
                       Watch Trailer <i className='far fa-play-circle'/>
                    </Button>
                </div>
            </div>
    );

}

export default HeroSection;