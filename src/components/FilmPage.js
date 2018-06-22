import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FilmPanel from './main/FilmPanel';
import ContentArea from './main/ContentArea';
import './../../static/styles/film-panel.scss';

class FilmPage extends Component {
    render () {
        return (
            <div>
                {this.props.activeMovie.genres && 
                <FilmPanel 
                    movie={this.props.activeMovie} 
                />}
                <ContentArea 
                    movies={this.props.sameGenreMovies} 
                    activeMovie={this.props.activeMovie} 
                />
            </div>
        );
    }
}

export default FilmPage;

FilmPage.propTypes = {
    activeMovie: PropTypes.object,
    sameGenreMovies: PropTypes.array,
    getSameGenres: PropTypes.func,
    fetchMovieById: PropTypes.func,
    filmId: PropTypes.any,
    sortBy: PropTypes.string
};