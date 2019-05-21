import React from "react";
import PropTypes from "prop-types";
// import v4 from "uuid/v4";
import "./style.css";

class AppSidebar extends React.Component {
  static propTypes = {
    Categories__btn: PropTypes.func.isRequired,
    SearchForm__input2: PropTypes.func.isRequired
  };
  // state = {
  //   inputTitleValue: "",
  //   inputDescriptionValue: "",
  //   inputRatingValue: ""
  // };

  // _handleInputChange = evt => {
  //   const value = evt.target.value;
  //   const name = evt.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // _handleSubmit = evt => {
  //   evt.preventDefault();
  //   const {
  //     inputTitleValue,
  //     inputDescriptionValue,
  //     inputRatingValue
  //   } = this.state;
  //   this.props.onFormSubmit(
  //     inputTitleValue,
  //     inputDescriptionValue,
  //     inputRatingValue
  //   );
  //   this.setState({
  //     inputTitleValue: "",
  //     inputDescriptionValue: "",
  //     inputRatingValue: ""
  //   });
  // };
  state = {
    InputValues: ""
  };

  _searchValues = evt => {
    let name = evt.target.name;
    this.props.Categories__btn(name);
  };

  _searchInputValues = evt => {
    let value = evt.target.value;
    const name = evt.target.name;
    this.setState({
      [name]: value
    });
  };

  _searchInputValuesonSubmit = evt => {
    evt.preventDefault();
    const { InputValues } = this.state;
    this.props.SearchForm__input2(InputValues);
    this.setState({
      InputValues: ""
    });

    // this.props.SearchForm__input2(value);
  };

  render() {
    // const {
    //   inputTitleValue,
    //   inputDescriptionValue,
    //   inputRatingValue
    // } = this.state;
    // const ratingScores = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    // const ratingScore = ratingScores.map(rating => (
    //   <option value={rating} key={v4()}>
    //     {rating}
    //   </option>
    // ));
    // const { getFilm } = this.props;
    const { InputValues } = this.state;
    return (
      // <form className="MovieForm" onSubmit={this._handleSubmit}>
      //   <label className="MovieForm__label">
      //     Title
      //     <input
      //       type="text"
      //       className="MovieForm__input"
      //       value={inputTitleValue}
      //       name="inputTitleValue"
      //       onChange={this._handleInputChange}
      //     />
      //   </label>
      //   <label className="MovieForm__label">
      //     Description
      //     <textarea
      //       className="MovieForm__txtarea"
      //       rows="8"
      //       type="text"
      //       value={inputDescriptionValue}
      //       name="inputDescriptionValue"
      //       onChange={this._handleInputChange}
      //     />
      //   </label>
      //   <label className="MovieForm__label">
      //     Rating
      //     <select
      //       className="MovieForm__input"
      //       value={inputRatingValue}
      //       name="inputRatingValue"
      //       onChange={this._handleInputChange}
      //     >
      //       {ratingScore}
      //     </select>
      //   </label>
      //   <button className="MovieForm__submit" type="submit">
      //     submit
      //   </button>
      // </form>
      <div className="App__sidebar">
        <form className="SearchForm" onSubmit={this._searchInputValuesonSubmit}>
          <input
            type="text"
            className="SearchForm__input"
            name="InputValues"
            value={InputValues}
            onChange={this._searchInputValues}
          />
          <button className="SearchForm__btn" type="submit">
            search
          </button>
        </form>
        <div className="SearchCategories">
          <button
            className="SearchCategories__btn"
            name="popular"
            onClick={this._searchValues}
          >
            popular
          </button>
          <button
            className="SearchCategories__btn"
            name="top_rated"
            onClick={this._searchValues}
          >
            top rated
          </button>
          <button
            className="SearchCategories__btn"
            name="upcoming"
            onClick={this._searchValues}
          >
            upcoming
          </button>
        </div>
        <div className="Watchlist">
          <h2 className="Watchlist__title">Watchlist</h2>
          <p className="Watchlist__msg">Add movies to watchlist...</p>
        </div>
      </div>
    );
  }
}

export default AppSidebar;
