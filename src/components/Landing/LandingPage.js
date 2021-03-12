import "./LandingPage.css";
import { Row, Col } from "react-bootstrap";
import Card from "./Card";
import Social from "./Social";
import { useTransition, animated } from "react-spring";
import { useHistory } from "react-router-dom";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
export default function LandingPage() {
  let history = useHistory();
  function handleRouteChange() {
    history.push("/aboutme");
  }
  return (
    <ReactScrollWheelHandler upHandler={handleRouteChange}>
      <div className="landing-page-title">
        <Row>
          <Title />
          <Avatar />
        </Row>
      </div>
    </ReactScrollWheelHandler>
  );
}
function Title() {
  const transitions = useTransition(true, null, {
    from: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });

  return transitions.map(({ show, props, key }) => (
    <Col lg={{ span: 6 }} key="key_title_main_col" className="title">
      <animated.div key="key_title_main" style={props}>
        <div key="title-header" className="title-header">
          Muhammed Mahmood Alam
        </div>
        <span key="title-underBar" className="title-underBar"></span>
        <div key="title-role" className="title-role">
          Full Stack Developer | Code Fanatic | Gamer
        </div>
        <Social key="title_social" />
      </animated.div>
    </Col>
  ));
}

function Avatar() {
  const transitions = useTransition(true, null, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(100%,0,0)" }
  });

  return transitions.map(({ show, props, key }) => (
    <Col lg={{ span: 6 }} key="key_avatar_maincol">
      <animated.div key="key_avatar_main" style={props}>
        <Card key="key_avatar" />
      </animated.div>
    </Col>
  ));
}
