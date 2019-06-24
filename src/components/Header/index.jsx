import React from "react";
import v4 from "uuid/v4";
import PropTypes from "prop-types";
import "./style.css";
import { Link } from "react-router-dom";


// const navNames = ["HOME", "MOVIES", "ABOUT"];

class Header extends React.Component {
  // navName = navNames.map(nav => (
  //   <li className="Navigation__item" key={v4()}>
  //     <a href="http://localhost:3000/" className="Navigation__link">
  //       {nav}
  //     </a>
  //   </li>
  // ));
  render() {
    const { items, headerLogo } = this.props;
    console.log(items);
    return (
      <header className="Header">
        <h1 className="Header__logo">
          <Link exact to="/">
            {headerLogo}
          </Link>
        </h1>
        {/* <ul className="Navigation">{this.navName}</ul> */}
        <ul className="Navigation">
          {items.map(i => (
            <li key={i.path} className="Navigation__item">
              <Link className="Navigation__link" to={i.path}>
                {i.text}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    );
  }
}

Header.propTypes = {
  headerLogo: PropTypes.string.isRequired
};

export default Header;
