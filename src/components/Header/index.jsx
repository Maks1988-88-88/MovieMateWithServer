import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    const { items, headerLogo } = this.props;
    console.log(items);
    return (
      <header className="Header">
        <h1 className="Header__logo">
          {/* <Link exact to="/"> */}
          <Link to="/">
            {headerLogo}
          </Link>
        </h1>
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
