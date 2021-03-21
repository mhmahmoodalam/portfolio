import { Image } from "react-bootstrap"
import { useSpring, animated, interpolate  } from 'react-spring'
import "./Portfolio.scss"
import MobileAppTwoImageStart from "../assets/images/mobile_app2_start.jpg"
import MobileAppTwoImageMiddle from "../assets/images/mobile_app2_middle.jpg"
import MobileAppTwoImageEnd from "../assets/images/mobile_app2_end.jpg"
export default function Portfolio(){
    return(
        <div className="container">
            <div className="row portfolio-items">
                <div className="col-md-6 reel-info">
                    <h3>Mobile App Development (Xamarin)</h3>
                </div>
                <div className="col-md-6 reel-display">
                    <div className="container portfolio-reel-item">
                            <div className="row">
                                <div className="col-md-6">
                                        <div className="reel-Image-strip-down">
                                            <Image className="reel-image-box" src={MobileAppTwoImageStart}></Image> 
                                            <Image className="reel-image-box" src={MobileAppTwoImageMiddle}></Image>
                                            <Image className="reel-image-box" src={MobileAppTwoImageEnd}></Image>
                                        </div>
                                </div>
                                <div className="col-md-6">
                                        <div className="reel-Image-strip-up">
                                            <Image className="reel-image-box" src={MobileAppTwoImageStart}></Image> 
                                            <Image className="reel-image-box" src={MobileAppTwoImageMiddle}></Image>
                                            <Image className="reel-image-box" src={MobileAppTwoImageEnd}></Image>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}