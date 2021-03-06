import uniqueId from 'lodash/uniqueId'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import EmptyContent from './contentItems/EmptyContent'
import ContentItem from './contentItems/ContentItem'
import './../../../static/styles/content-area.scss'
import Router from 'next/router'

class ContentArea extends Component {
    render() {   
        return (
            <section className='content-container'>
                {this.getContent()}
            </section>
        )
    }

    componentDidMount() {
        if (!Router.router.query) {
            return
        }

        let searchBy = Router.router.query.searchBy
        let query = (Router.router.query.query === 'all') ? '' : Router.router.query.query

        if (query && query.length) {
            this.props.setSearchParams({query, searchBy})
        }
    }
    
    getContent() {
        if (!this.props.movies[0]) {
            return <EmptyContent />
        }

        return this.props.movies.map((el) => {
            if (this.props.activeMovie && el.title === this.props.activeMovie.title) {
                return null
            }
            return (
                <ContentItem
                    key={uniqueId(el.id)}
                    movie={el}
                />   
            )
        })
    }
}

export default ContentArea

ContentArea.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.object
    ),
    activeMovie: PropTypes.object,
    setSearchParams: PropTypes.func,
    location: PropTypes.object,
}

ContentArea.defaultProps = {
    movies: []
}