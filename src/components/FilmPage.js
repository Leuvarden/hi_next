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
    
    //todo: FilmPage doesn't rerender after navigation through links, location of render persists
    componentDidMount() {
        this.props.fetchMovieById(this.props.router.query.id);
        this.props.getSameGenres(this.props.filmId, this.props.sortBy);
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