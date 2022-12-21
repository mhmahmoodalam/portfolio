

import HomeSection from './HomeSection';
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio"
function FullPage(){
  
 return (
        <>
          <div className="section" >
            <HomeSection />
          </div>
          <div className="section">
            <AboutMe/>
          </div>
          <div className="section" >
            <Portfolio/>
          </div>
        </>
      );
 }
export default FullPage