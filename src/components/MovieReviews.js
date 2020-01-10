// Code MovieReviews Here
import React from 'react'

const Review = ({ headline, byline, link, summaryShort }) => {
  return (
    <div key={headline} className='review'>
      <header>
        <a className='review-link' href={link.url}>
          {headline}
        </a>
        <br />
        <span className='author'>{byline}</span>
      </header>
      <blockquote>{summaryShort}</blockquote>
    </div>
  )
}

const MovieReviews = ({ reviews }) => <div className='review-list'>{reviews.map(Review)}</div>

MovieReviews.defaultProps = { reviews: [] }

export default MovieReviews

function FUNCTION_NAME(){
	fetch(SITE)
	.then (resp => resp.json())
	.then (json => json.forEach(callout))
}

// <h1>{review.display_title}</h1>
// <h3>by {review.byline}</h3>
// <h5>{review.headline}</h5>
// {review.summary_short}
// <a href={review.link.url}>Read review</a>
