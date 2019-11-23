// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {

  //  console.log("MovieReview props: ",props)

    const renderReviews =()=>{
        return props.reviews.map(review => {
        return <div className="review" key={review.display_title} >{review.display_title}</div>
        })
    }

    return (
        <div className="review-list">
            {renderReviews()}
        </div>  
    )
    
}

export default MovieReviews