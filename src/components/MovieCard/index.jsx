import React from "react";
// import v4 from "uuid/v4";
import "./style.css";
import PropTypes from "prop-types";

class MovieCard extends React.Component {
  render() {
    const { tittle, descr, rating, onClick, img } = this.props;
    return (
      <div className="MovieCard">

        <div>
          <span className="MovieInfo__rating">{rating}</span>
          <img src={img} alt="img" className='MovieCard__poster'/>
          <h2 className="MovieInfo__title">{tittle}</h2>
          <p className="MovieInfo__descr">{descr} </p>
          <p className='MovieInfo__release'>Release date: 2019</p>
        </div>
        <button
          className="MovieCard__btn "
          onClick={onClick}
        >
          +
        </button>
      </div>
    );
  }
}

MovieCard.propTypes = {
  tittle: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default MovieCard;
