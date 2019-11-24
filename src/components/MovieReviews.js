// // Code MovieReviews Here
// import React from 'react';

// const MovieReviews = ({reviews}) =>{
    
//     return (
//         <div className="review-list">
//             {reviews.map(review=> {
//                 return (
//                     <div className='list' key={review.display_title}>
//                         <h3>{review.display_title}</h3>
//                         <p>{review.summary_short}</p>
//                         <a className="review-link" href={review.link.url}>
//                             {review.headline}
//                         </a>
//                         <br/>
//                         <span className="author">{review.byline}</span>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// MovieReviews.defaultProps = {
//     reviews: []
// }
// export default MovieReviews;
import React from 'react';

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (

    <div
      key={headline}
      className="review"
    >
      <header>
        <a
          className="review-link"
          href={link.url}
        >
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;