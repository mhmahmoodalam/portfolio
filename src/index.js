import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AboutMe from "./components/AboutMe";
import Header from "./Navigation/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
const customHistory = createBrowserHistory();
ReactDOM.render(
  <StrictMode>
    <Router history={customHistory}>
      <Switch>
        <Route path="/" Component={App} />
        <Route path="/aboutme" Component={AboutMe} />
      </Switch>
      <Header />
      <App />
    </Router>
  </StrictMode>,
  rootElement
);
