import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Home from "./App";
import AboutMe from "./components/Landing/AboutMe"
import Timer from "./Navigation/ComigSoon"
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import Header from "./Navigation/Header";

const rootElement = document.getElementById("root");
const customHistory = createBrowserHistory();
ReactDOM.render(
  <StrictMode className="contact-content debug-border" >
    <Router history={customHistory}>
      
      <Header/>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/about-me" >
          <AboutMe />
        </Route>
        <Route path="/my-work" >
          <Timer />
        </Route>
        <Route path="/contact" >
          <Timer />
        </Route>
      </Switch>
    </Router>
  </StrictMode>,
  rootElement
);
