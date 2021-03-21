import Fade from 'react-reveal/Fade';
import "./AboutMe.scss"
import Skills from "./Skills"
import SkillsData from "./skillsData"
export default function AboutMe() {
    return (
        <div>
            <div className="download-container">
                <a  className="download-cv" href ="https://drive.google.com/file/d/1476uasRca7olndpJoFVXEE4Fq1vuqgqq/view?usp=sharing" download="Resume_Muhammed.pdf"><i className="fas fa-download"></i></a>
            </div>
            <Fade down>
                <div className="container container-header">
                            <div className="inner max-w-576">
                                <h2><span>Resume</span></h2>
                                <h3>Education &amp; Experience</h3>
                                <div className="divider divider-1-reverse divider-1-1"></div>
                                <div className="divider divider-1-reverse divider-1-2"></div>
                            </div>
                </div>
            </Fade>
            <div className="container container-resume">
                    <div className="row">
                        <div className="col-md-6">
                            <Fade left>
                                <div className="section-resume-header">
                                    <h4 className="resume-title">Education</h4>
                                    <ul>
                                        <li>
                                            <div className="resume-item">
                                                <div className="resume-head">

                                                    <span className="resume-icon fas fa-graduation-cap graduation-crown"></span>
                                                    <h5>Global Academy of Technology</h5>
                                                    <h6>Computer Science Engineering | Bengaluru, India <small>(2010-2014)</small></h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>Bachelors degree in computer Science. Developed a ping pong ball game using CG and Final year project on Multi-Authentication system using OTP, Fingerprint and password with SHA-256 encryption of data.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <span className="resume-icon fas fa-certificate"></span>
                                                    <h5>BISS 11D</h5>
                                                    <h6>High School | Bokaro, India <small>(2007-2009)</small></h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>High School degree with Physics, Chemistry and Maths Major. Developed an html based movie catalogue for personal movies collection usign microsoft publisher.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-md-6">
                            <Fade right>
                                <div className="section-resume-header">
                                    <h4 className="resume-title">Experience</h4>
                                    <ul>
                                        <li>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <span className="resume-icon fas fa-layer-group"></span>
                                                    <h5>Fullstack Developer</h5>
                                                    <h6>Siemens Technologies| Bengaluru, India <small>(2018-Present*)</small></h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>Design and develop react web app for patient management. Extract microservices from existing Java spring boot monolith into asp .net core microservices. Develop mobile app features using Xamarin. Write automation, unit test and integration tests for the existing system. Train and share knowledge among team on latest technologies.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <span className="resume-icon fab fa-java"></span>
                                                    <h5>Java Backend Developer</h5>
                                                    <h6>Infosys Ltd| Hyderabad, India <small>(2014-2018)</small></h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>Provide POC for spring boot restful web service. Develop spring boot web application to handle customer data using agile methodology. Used Spring IOC to manage the beans. Involved with exposing and consuming REST based web services. Develop AWS Java lambda functions to auto build environment. Write unit test cases for test plan and code coverage.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            <div className="container">                 
                <Fade below>
                    <div className="row">
                        {SkillsData.map( (data,key) => (                        
                                <div className="col-md-4" ><Skills key={'skill' + key} data={data}/> </div> 
                                        
                            ))}
                    </div>
                </Fade>
            </div>
        </div>
    )
}