

import "fullpage.js/vendors/scrolloverflow"; 
import ReactFullpage from '@fullpage/react-fullpage';
import HomeSection from './HomeSection';
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio"
function FullPage(){
  
  return (<ReactFullpage
    licenseKey = {''}
    scrollingSpeed = {1300}
    navigation={true}
    css3={true}
	  fadingEffect={true}
    navigationPosition='right'
    showActiveTooltip={false}
    navigationTooltips={['home', 'aboutme', 'portfolio']}
    anchors = {['home', 'aboutme', 'portfolio']}
    menu="#menu"
    render={({ state, fullpageApi }) => {
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
    }}
  />)
};
export default FullPage