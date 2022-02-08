import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '1DCgTyxrn6s0VeZlkdtwiJRKc8V8DWFg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewContainer extends Component {
constructor(){
  super();
  this.state = {
    reviews: [],
  }
}


  componentDidMount(){
    fetch(URL)
    .then((response) => response.json())
    .then((response)=>this.setState({reviews: response.results}))

  }

  render(){

    return(
      <div className="latest-movie-reviews">
        <h1>MOVIE REVIEWS</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
