import React from "react";
import { Route, Switch } from "react-router-dom";
import "./style.css";
import AboutNav from "../AboutNav/index";
import TeamList from "../TeamList";
import CareerInfo from "../CareerInfo";
import StackList from "../StackList";

const aboutLinks = [
  {
    path: "/team",
    text: "The Team"
  },
  {
    path: "/stack",
    text: "Our Stack"
  },
  {
    path: "/career",
    text: "Career"
  }
];

const AboutPage = props => {
  console.log(props.match.path);
  return (
    <div className="AboutPage">
      <div className="AboutPage__nav">
        <AboutNav items={aboutLinks} currentPath={props.match.path} />
      </div>
      <div className="AboutPage__body">
        <Switch>
          <Route path={`${props.match.path}/team`} component={TeamList} />
          <Route path={`${props.match.path}/stack`} component={StackList} />
          <Route path={`${props.match.path}/career`} component={CareerInfo} />
        </Switch>
      </div>
    </div>
  );
};

export default AboutPage;
