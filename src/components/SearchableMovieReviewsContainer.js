import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = { 
        reviews: [],
        searchTerm: ""
    }

    fetchReviews = () => {
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(fetchedReviews => this.setState({
            reviews: fetchedReviews.results
        }))
    }

    changeHandler = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        this.fetchReviews()
        this.setState({
            searchTerm: ""
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.submitHandler}>
                    <input type="text" onChange={this.changeHandler} value={this.state.searchTerm} placeholder="Search for movie reviews..."></input>
                    <input type="submit" value="Search!"></input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;
