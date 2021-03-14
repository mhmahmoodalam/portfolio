import "./AboutMe.css"
import { Row, Col } from "react-bootstrap";
import Skills from "./Skills"
import { animated, useSpring } from "react-spring";
import Image from 'react-bootstrap/Image'
import PhotoAvatar from "../../assets/avatar.jpg"
import SkillData from "./skillsData"
export default function AboutMe() {
  return (
      <>
      <div className="about-me">
        <AboutDescription/> 
        <Row style={{marginTop: '10px', marginBottom:'10px'}}>
          <Col lg={{ span: 8}}>
                <h2>Skills and Experience</h2>
                <h4>I am a full stack developer with over 6 years of experience.</h4>
                <h4>I am a currently working at Siemens Technologies.</h4>
                <h4> My latest skill is Xamarin for mobile app developement.</h4>                
                <h4> Click on the below tiles for more ...</h4>
            </Col>
        </Row>
        <Row style={{marginTop: '10px', marginBottom:'250px'}} > 
            
            {SkillData.map( (data,key) => (                          
              <Col lg={{ span: 4}}><Skills key='skill+${key}' data={data}/> </Col>             
            ))}
            
        </Row> 
      </div> 
       
      <WorkExperience/>
      </>      
       );
}

function AboutDescription(){
  return (
    <div className="sections">
      <section  className="content-block">
          <div className="container">
            <Row >
                <Col  lg={{ span: 12 }} >
                    <h1  >
                        <span className="header-slogan">
                            Cloud is the modern abacus. Mobiles are modern super computers. AI and super charged cars are real.
                        </span>
                    </h1>
                </Col>
              </Row>
          </div>
      </section>
      <section className="content-block" >
          <div className="container">
            <Row >
                <Col  lg={{ span: 4 }} >                    
                    <PhotoCanvas  />
                </Col>
                <Col  lg={{ span: 1 }} />
                <Col  lg={{ span: 7 }} >
                  <h4 style={{ fontSize:'1rem', lineHeight: '1.5rem', }} ><span className="description-text">I was born and  grew up in <span style={{ color: 'rgb(0, 0, 0)' }}>Bokaro, Jharkhand, India </span>. My first love was drawing. I would watch cartoons and then figure out how to draw the characters, Marvel is my favourite. I was a computer geek and would spend hours just breaking and fixing things. I once opened the whole hard disk just to clean it and then realising I had spoiled the drives, silly me didn't know the drives shouldn't be touched. But I learned. It wasn’t until high school that I finally got into web designing. I had a whole lot of softwares and movies I wanted to develop a catalog so could keep track of the disks they are in.</span></h4>
                  <p style={{ fontSize:'1rem', }} ><span className="description-text">I moved on to study Computer Science at Global Academy of Technology of Bengaluru, and began to grow my programming skills. I would participate into all kinds of hackathons, although I couldn't win in any of them but even after failing I learnt a lot. I also developed a fully working ping pong game based on CG and C language. I further utilized that skill to design a 3D room model which one can navigate into freely. My idea for a 3D map from google map was selected in one of the city hackathons. I could not complete it due to lack of android API knowledge, but doing all that I learnt the basics of software designing and how to bring your ideas into reality.</span></p>
                  <p style={{ fontSize:'1rem', }} ><span className="description-text">My first “real” gig was in my final year project when I developed a fully working <span style={{ color: 'rgb(0, 0, 0)' }} >Multi-Authentication system </span> based on JSF. It covered most of the modern authentication <span style={{ color: 'rgb(0, 0, 0)' }} >Password, Sms and Fingerprint </span> with data encryption using SHA256. It was one of the colleast project I have ever worked on. It took me 4 months days and nights to fully finish the system, reading fingerprint data was the toughest part. It’s then I learned to grind…like REALLY crank out work and do it with some quality.</span></p>
                  <p style={{ fontSize:'1rem', }} ><span className="description-text">After 4 years of that, I moved on to my first official developer job at <span style={{ color: 'rgb(0, 0, 0)' }} ><a href="https://infosys.com/" target="_blank" style={{ color: 'rgb(0, 0, 0)' }} ><span style={{ textDecoration: 'underline' }} >Infosys</span></a></span> in June 2014. I started as a Informatica MDM developer and soon moved on to Java backend developer. I worked on various stacks some major of which included<span style={{ color: 'rgb(0, 0, 0)' }} > springboot, hibernate, html, css, mongodb, sql, cucumber, tableau and AWS </span>. I learnt how to utilize the agile methodoligies to develop and deliver in time. I worked for two clients Nordstrom and Apple.</span></p>
                  <p style={{ fontSize:'1rem', }} ><span className="description-text">After 4.5 years of working as backend developer I finally got the urge to expand my skills and update in frontend. I landed a spot as Software Developer at <span style={{ color: 'rgb(0, 0, 0)' }} ><a href="https://new.siemens.com/in/en.html" target="_blank" style={{ color: 'rgb(0, 0, 0)' }} ><span style={{ textDecoration: 'underline' }} > Siemens Technologies</span></a></span> where I worked on frontend skills intially and then moved on to <span style={{ color: 'rgb(0, 0, 0)' }} > React, C#, Asp .net Core, Azure and sprint boot </span> . In June of 2019 I got an opportunity to work on mobile app developement. I have always been pasionate about UI developement, so I took the oppurtunity upskilled myslef in Xamarin and developed some really cool screens which I am really proud of.</span></p>
                  <p style={{ fontSize:'1rem', }} ><span className="description-text">I love what I do. The combination of latest stacks, bringing new ideas to reality and innovating things is what keeps me going. I like to keep learning new skills that can enable me to convert ideas into reality.</span></p>
                  <p style={{ fontSize:'1rem', }} ><span className="description-text">Don't hesitate to reach out if you'd like to chat about new ideas you want bring into reality, or just have a good ol' fashioned conversation.</span></p>
              </Col>
            </Row>
          </div>
      </section>
    </div>
  );
}


function PhotoCanvas() {
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } })) 

  return (    
      <animated.div 
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}>
        <div  className="avatar-div">
          <Image src={PhotoAvatar} rounded className="avatar-image" />
          </div>
      </animated.div>
  );
}

function WorkExperience(){
  return (
    <div className="work-exp">
      <Row className="justify-content-lg-center" style={{marginLeft: '0px', marginRight:'0px', borderBottom: '2px solid #351f39'}}>
          <Col lg={{ span: 4}} justify>
                <h2>2018 - <span style={{color: '#91684a'}}>Latest</span></h2>
            </Col>
            <Col lg={{ span: 4}}>
                <h2>Siemens Technologies</h2>
                <h4>Full Stack Developer</h4>
            </Col>
        </Row> 
        <Row className="justify-content-lg-center" style={{marginLeft: '0px', marginRight:'0px', marginTop: '10px'}}>
          <Col lg={{ span: 4}} justify>
                <h2>2014 - 2018 </h2>
            </Col>
            <Col lg={{ span: 4}}>
                <h2>Infosys Ltd</h2>
                <h4>Backend Developer</h4>
            </Col>
        </Row>     
    </div>
  );
}