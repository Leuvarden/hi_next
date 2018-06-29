import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import EmptyContent from './contentItems/EmptyContent';
import ContentItem from './contentItems/ContentItem';
import Router from 'next/router';
import styled from 'styled-components';

const ContentAreaContainer = styled.section`
    background: white;
    margin: 0 10%;
    min-height: 400px;
    color: black;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    overflow: hidden;
`
class ContentArea extends Component {
    render() {   
        return (
            <ContentAreaContainer className='content-container'>
                {this.getContent()}
            </ContentAreaContainer>
        );
    }

    componentDidMount() {
        if (!Router.router.query) {
            return;
        }

        let searchBy = Router.router.query.searchBy
        let query = Router.router.query.query;

        if (query && query.length) {
            
            this.props.setSearchParams({
                query: query === 'all' ? '' : query, 
                searchBy});
        }
    }
    
    getContent() {
        if (!this.props.movies[0]) {
            return <EmptyContent />;
        }

        return this.props.movies.map((el) => {
            // if (this.props.activeMovie && el.title === this.props.activeMovie.title) {
            //     return null;
            // }
            return (
                <ContentItem
                    key={uniqueId(el.id)}
                    movie={el}
                />   
            );
        });
    }
}

export default ContentArea;

ContentArea.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.object
    ),
    activeMovie: PropTypes.object,
    setSearchParams: PropTypes.func,
    location: PropTypes.object,
};

ContentArea.defaultProps = {
    movies: []
};