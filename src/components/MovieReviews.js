import React from 'react';



const MovieReviews = ({reviews}) => {

    const renderReviews = () => {
        return reviews.map(review => {
            return <div key={review.display_title} className="review">
                <h3>{review.display_title}</h3>
                <h5>{review.headline}</h5>
                <p>{review.summary_short}</p>
                    </div>
        })
    }

    return (
        <div className="review-list">
            {renderReviews()}
        </div>
    )
}

export default MovieReviews;

MovieReviews.defaultProps = {
    reviews: []
}

