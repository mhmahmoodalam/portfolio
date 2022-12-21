import React from 'react';
import { Image } from 'react-bootstrap'
import "./HomeSection.scss"
import PhotoAvatr from "../assets/images/photo_avatar.png"
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
import ShootingBackground from "./ShootingBackground"
import { useSpring, animated, interpolate  } from 'react-spring'
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`

function HomeSection() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  
  return (
    <div className="container-fluid" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>      
        <ShootingBackground/>
        <div className="row intro-row align-items-center">
            <div className="col-md-6 maintitle-column">
                <Fade bottom>
                  <h1>Hi! I'm <b style={{ color:"var(--tertiary)"}}>Mahmood Alam</b></h1>
                  <div className="intro-skill-type">I'm an expert in </div>
                  <Typewriter 
                    onInit={(typewriter) => {
                    typewriter                                    
                      .pauseFor(1000)
                      .typeString('Spring Boot, React, .Net Core & Xamarin.')
                      .pauseFor(700)
                      .deleteAll()                    
                      .pauseFor(500)
                      .typeString('AWS, Azure, Docker & kubernetes.')                   
                      .pauseFor(700)
                      .deleteAll()                    
                      .pauseFor(500)
                      .typeString('automataion and unit testing.')
                      .pauseFor(700)
                      .deleteAll()
                      .start();
                    }}
                    options={{
                      autoStart: true,
                      loop: true,
                      wrapperClassName: 'intro-skill-type',
                      cursorClassName:'intro-skill-type',
                      delay: 50,
                      deleteSpeed: 100
                    }}/>                  
                </Fade>
            </div>
            <div className="col-md-6 " >
              <div className="avatar-detail-container">
                  <animated.div style={{ transform: interpolate(props.xy,trans1) }}>
                    <div className="photoavatar-background"></div>
                    <Image className="photoAvatar" src={PhotoAvatr}/>
                  </animated.div>
                <Fade bottom>
                  <div className="detailsRow">
                    <div className="details-row-grid">
                      <div className="details-column">
                          <h5>Employer : </h5>
                          <h6>Siemens Technologies Ltd. </h6>
                      </div>
                      <div className="details-column">
                          <h5>Experience : </h5>
                          <h6>7 yrs.</h6>
                      </div>
                      <div className="details-column">
                          <h5>Role : </h5>
                          <h6>Fullstack Developer </h6>
                      </div>
                      <div className="details-column">
                          <h5>Connect : </h5>
                          <Social/>
                      </div>
                    </div>           
                  </div> 
                </Fade> 
              </div>
              
            </div>
        </div>
    </div>
  );
}

export function Social() {
  return (
    <div className="icons-social" >
      <a href="https://github.com/mhmahmoodalam">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://stackoverflow.com/users/story/1802380">
        <i className="fab fa-stack-overflow"></i>
      </a>
      <a href="https://www.linkedin.com/in/mhmahmoodalam">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://www.hackerrank.com/mhmahmoodalam">
        <i className="fab fa-hackerrank"></i>
      </a>
    </div>
  );
}


export default HomeSection;