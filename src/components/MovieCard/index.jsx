import React from "react";
import "./style.css";
import PropTypes from "prop-types";

class MovieCard extends React.Component {
  render() {
    const {
      tittle,
      descr,
      rating,
      onClickAddWatchlist,
      img,
      release_date
    } = this.props;
    return (
      <div className="MovieCard">
        <div>
          <span className="MovieInfo__rating">{rating}</span>
          <img src={img} alt="img" className="MovieCard__poster" />
          <h2 className="MovieInfo__title">{tittle}</h2>
          <p className="MovieInfo__descr">{descr} </p>
          <p className="MovieInfo__release">Release date: {release_date}</p>
        </div>
        <button
          className="MovieCard__btn "
          onClick={onClickAddWatchlist}
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
  rating: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired
};

export default MovieCard;
