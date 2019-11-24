import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = { 
        searchTerm: '',
        reviews: []
     }

     searchTermSubmitHandler = (e) => {
        e.preventDefault()
        this.fetchReviews()
        this.setState({ searchTerm: ''  });
        
     }

     inputHandler = (e) => {
        this.setState({ searchTerm: e.target.value  })
     }

    fetchReviews = () => {
        fetch(URL + `&query=${this.state.searchTerm}`).then(resp => resp.json()).then(reviews => this.setState({ reviews: reviews.results })) 
    }     

    render() { 
        return ( 
            <div className="searchable-movie-reviews">
                <h2>Search for a Movie</h2>
                <form onSubmit={this.searchTermSubmitHandler}>
                    Movie Search<input onChange={this.inputHandler} type="text" name="searchTerm" value={this.state.searchTerm}></input>
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
         );
    }
}
 
export default SearchableMovieReviewsContainer;
