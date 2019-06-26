import React from "react";
import { Route, NavLink } from "react-router-dom";
import "./style.css";
import users from "../../fakeDatabase";
import MemberCard from "../MemberCard";

const teamLinks = (teamMembers, path) =>
  teamMembers.map(tm => ({
    path: `${path}/${tm.id}`,
    name: tm.name,
    photo: tm.photo,
    position: tm.position
  }));

const getUserByID = (teamMembers, id) => teamMembers.find(tm => tm.id === id);

const TeamList = ({ match }) => {
  console.log(teamLinks(users, match.path));

  const ourTeamLinks = teamLinks(users, match.path);

  return (
    <div className="TeamList">
      <ul className="TeamList__members">
        {ourTeamLinks.map((tl, idx) => (
          <li key={idx}>
            <NavLink
              to={tl.path}
              className="TeamList__members__link"
              activeClassName="TeamList__members__link--active"
              key={idx}
            >
              {tl.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="TeamList__card">
        <Route
          path={`${match.path}/:userID`}
          render={props => {
            const userID = props.match.params.userID;
            const user = getUserByID(users, userID);

            return user ? <MemberCard {...user} {...props} /> : <p />;
          }}
        />
      </div>
    </div>
  );
};

export default TeamList;
