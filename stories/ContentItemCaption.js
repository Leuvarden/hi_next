import React from 'react'
import PropTypes from 'prop-types'

const ContentItemCaption = ({movie}) => {
    return (
        <figcaption className="content-item__description">
            <span className="content-item_year">
                {movie.release_date.slice(0, 4)}
            </span>

            <h3 className="content-item_title">
                <a href='#' id={movie.id}>
                    {movie.title}
                </a>
            </h3>

            <span className="content-item_genre">
                {movie.genres.length > 1 ? 
                    `${movie.genres[0]} & ${movie.genres[1]}` : 
                    movie.genres[0]}
            </span>
        </figcaption>
    )
}

export default ContentItemCaption

ContentItemCaption.propTypes = {
    movie: PropTypes.object
}