import React from "react";
// import v4 from "uuid/v4";
import posts from "../../posts";
import "./style.css";
import MovieCard from "../MovieCard";
import MovieCardCollection from "../MovieCardCollection";
import AppSidebar from "../AppSidebar";

class AppBody extends React.Component {
  state = {
    post: [...posts]
  };

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

  componentWillMount() {
    fetch("https://api.themoviedb.org/3/search/movie?api_key=680d1c453082be4c031bb516ed6208df&page=1&query=1&include_adult=false", {
      headers: new Headers({
        Authorization:
          "563492ad6f91700001000001972aa481984848e1a57e5f8fa48c679d"
      })
    })
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
            "https://image.tmdb.org/t/p/w300_and_h450_bestv2" +
            film.poster_path
        }));

        // console.log(films[0].descr.slice(0, 100) + '...');

        this.setState({
          post: films
        });
      })
      // console.log(data))
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

  // poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + movie.poster_path
 // API Key(v3 auth) 680d1c453082be4c031bb516ed6208df
 // Example API Request https://api.themoviedb.org/3/movie/550?api_key=680d1c453082be4c031bb516ed6208df



  onDeleteCard = id => {
    console.log(id);
    this.setState({
      post: this.state.post.filter(currentPost => currentPost.id !== id)
    });
  };

  render() {
    const { post } = this.state;
    return (
      <div className="App__body">
        {/* <MovieForm onFormSubmit={this.onAddNewPost} /> */}
        <AppSidebar />
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
    );
  }
}

export default AppBody;
