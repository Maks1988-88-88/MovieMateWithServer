import React from "react";
import v4 from "uuid/v4";
import "./style.css";
import Header from "../Header/index";
import Movies from "../AppBody/index";
import Home from "../Home";
import AboutPage from "../AboutPage";
import { Route, Switch, Redirect } from "react-router-dom";


const navLinks = [
  {
    path: "/about",
    text: "ABOUT"
  },
  {
    path: "/movies",
    text: "MOVIES"
  },
  {
    path: "/",
    text: "HOME"
  }
];


class App extends React.Component {
  render() {
    return (
      <div className="App" id={v4()}>
        <Header headerLogo="Movie Mate" items={navLinks} />
        <Switch>
          <Route exact path="/" component={Home} /> />
          <Route path="/movies" component={Movies} />
          <Route path="/about" component={AboutPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
