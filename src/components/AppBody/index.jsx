import React from "react";
// import v4 from "uuid/v4";
// import posts from "../../posts";
import "./style.css";
import MovieCard from "../MovieCard";
import MovieCardCollection from "../MovieCardCollection";
import AppSidebar from "../AppSidebar";

class AppBody extends React.Component {
  state = {
    post: []
  };

  SearchCategories__btn = query => {
    fetch(
      `https://api.themoviedb.org/3/movie/${query}?api_key=680d1c453082be4c031bb516ed6208df&page=1&query=1&include_adult=false`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error" + response.statusText);
      })
      .then(data => {
        const films = data.results.map(film => ({
          id: film.id,
          release_date: film.release_date,
          descr: film.overview.slice(0, 100) + "...",
          tittle: film.title,
          rating: film.vote_average,
          poster_path:
            "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + film.poster_path
        }));
        this.setState({
          post: films
        });
      })
      .catch(err => console.error(err));
  };

  SearchForm__input = query => {
    console.log(query);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=680d1c453082be4c031bb516ed6208df&page=1&query=${query}&include_adult=false`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error" + response.statusText);
      })
      .then(data => {
        const films = data.results.map(film => ({
          id: film.id,
          release_date: film.release_date,
          descr: film.overview.slice(0, 100) + "...",
          tittle: film.title,
          rating: film.vote_average,
          poster_path:
            "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + film.poster_path
        }));
        this.setState({
          post: films
        });
      })
      .catch(err => console.error(err));
  };

  componentWillMount() {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=680d1c453082be4c031bb516ed6208df&page=1&query=1&include_adult=false"
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error" + response.statusText);
      })
      .then(data => {
        
        const films = data.results.map(film => ({
          id: film.id,
          release_date: film.release_date,
          descr: film.overview.slice(0, 100) + "...",
          tittle: film.title,
          rating: film.vote_average,
          poster_path:
            "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + film.poster_path
        }));
        // console.log(films.length);
        this.setState({
          post: films
        });
      })
      .catch(err => console.error(err));
  }

  // componentWillMount(){
  //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=680d1c453082be4c031bb516ed6208df&page=1&query=1&include_adult=false`)
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error("Error" + response.statusText);
  //     })
  //   .then(data => console.log(data))
  //   .catch (err => console.error(err));
  // }

  // onAddNewPost = (tittle, descr, rating) => {
  //   const newPost = {
  //     id: v4(),
  //     chipsList: [],
  //     descr: descr,
  //     rating: rating,
  //     tittle: tittle
  //   };
  //   console.log(newPost);
  //   this.setState({
  //     post: [...this.state.post, newPost]
  //   });
  // };

  onDeleteCard = id => {
    console.log(id);
    this.setState({
      post: this.state.post.filter(currentPost => currentPost.id !== id)
    });
  };

  // SearchSearchForm__input = value => console.log(value);

  render() {
    const { post } = this.state;
    console.log(post.length);
    if (post.length > 0) {
      return (
        <div className="App__body">
          {/* <MovieForm onFormSubmit={this.onAddNewPost} /> */}
          <AppSidebar
            Categories__btn={this.SearchCategories__btn}
            SearchForm__input2={this.SearchForm__input}
          />
          <MovieCardCollection>
            {post.map(post => (
              <MovieCard
                img={post.poster_path}
                tittle={post.tittle}
                descr={post.descr}
                rating={post.rating}
                key={post.id}
                release_date={post.release_date}
                onClick={() => {
                  this.onDeleteCard(post.id);
                }}
              />
            ))}
          </MovieCardCollection>
        </div>
      );}
      else {
         return (
           <div className="App__body">
             {/* <MovieForm onFormSubmit={this.onAddNewPost} /> */}
             <AppSidebar
               Categories__btn={this.SearchCategories__btn}
               SearchForm__input2={this.SearchForm__input}
             />
             <MovieCardCollection>
               <p className="MovieCardCollection__msg">
                 sorry, we did't find anything
               </p>
             </MovieCardCollection>
           </div>
         );
      }
  }
}

export default AppBody;
