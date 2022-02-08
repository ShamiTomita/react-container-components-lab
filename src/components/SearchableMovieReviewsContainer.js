import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '1DCgTyxrn6s0VeZlkdtwiJRKc8V8DWFg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component{
  state={
    searchTerm: '',
    reviews: []
  }

  handleSearchInput = (event) =>
    this.setState({searchTerm: event.target.value})

    handleSubmit = (event) => {
      event.preventDefault();
      fetch(URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({reviews: res.results}))
    };

    render(){
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Reviews!</label>
          <input
          id="search-input"
          type="text"
          onChange={this.handleSearchInput}
          />
          <button type="submit">SUBMIT</button>
          </form>
          {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
      )
    }
}
export default SearchableMovieReviewsContainer
