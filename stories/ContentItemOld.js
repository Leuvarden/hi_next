import React from 'react'
import PropTypes from 'prop-types'
import ContentItemCaption from './ContentItemCaption'

const ContentItem = ({movie}) => {
    return (
   
            <figure 
                className="content-item"
                onClick= {() => { document.body.scrollTop = 0; document.documentElement.scrollTop = 0} }
            >

                <a href='#' id={movie.id}>
                    <img src={movie.poster_path} className="content-item_img" />
                </a>

                <ContentItemCaption movie={movie}/>
            </figure>

    )
}

ContentItem.propTypes = {
    movie: PropTypes.object
}

export default ContentItem