import React from 'react';
// Code MovieReviews Here
const MovieReviews = props =>{
        return (
            <div className="review-list">
            {props.reviews.map(review => <div key={review.display_title} className="review"><h2>{review.display_title}</h2>
                <p>{review.headline}</p>
                <p>{review.summary_short}</p>
                <a href={review.link.url}>Review Link</a></div>)}
            </div>
        );
}

MovieReviews.defaultProps = {
    review: ""
  };

export default MovieReviews;



// {
//     "display_title": "Varda by Agnès",
//     "mpaa_rating": "",
//     "critics_pick": 1,
//     "byline": "A.O. Scott",
//     "headline": "‘Varda by Agnès’ Review: A Final Visit With an Irreplaceable Filmmaker",
//     "summary_short": "In her last film, Agnès Varda sums up a six-decade career.",
//     "publication_date": "2019-11-21",
//     "opening_date": "2019-11-20",
//     "date_updated": "2019-11-24 03:44:24",
//     "link": {
//       "type": "article",
//       "url": "http://www.nytimes.com/2019/11/21/movies/varda-by-agnes-review.html",
//       "suggested_link_text": "Read the New York Times Review of Varda by Agnès"
//     },
//     "multimedia": {
//       "type": "mediumThreeByTwo210",
//       "src": "https://static01.nyt.com/images/2019/11/22/arts/22AGNES-1/22AGNES-1-mediumThreeByTwo210.jpg",
//       "width": 210,
//       "height": 140
//     }
//   },