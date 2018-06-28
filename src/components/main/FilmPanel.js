import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import pink from '@material-ui/core/colors/pink';

const FilmPanelSection = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

const FilmPanelFigure = styled.figure`
    flex: 0 1 80%;
    display: flex;
    margin-bottom: 0;
`

const FilmPanelCaption = styled.figcaption`
    h1 {
        color: ${pink[500]};
    }

    .category,
    .overview {
    font-weight: 400;
    }

    .year {
    font-weight: 600;
    margin: 0 30px 0 0;
    }

    .duration {
    font-weight: 600;
    }
`
export class FilmPanel extends Component {
    render () {
        return this.props.movie && (
            <FilmPanelSection>
                <FilmPanelFigure>
                    {this.getPoster()}
                    {this.getCaption()}
                </FilmPanelFigure>
                {this.getSameGenres()}
            </FilmPanelSection>
        );
    }

    getCaption () {
        return (
            <FilmPanelCaption>
                <h1>{this.props.movie.title}</h1>
                <p className="category">
                    {this.props.movie.genres[0]}
                </p>
                <p className="year">
                    {this.props.movie.release_date.slice(0, 4)}
                </p>
                <p className="overview">
                    {this.props.movie.overview}
                </p>  
            </FilmPanelCaption>
        );
    }

    getPoster () {
        return (
            <div> 
                <img 
                src={this.props.movie.poster_path}
                style = {{
                    margin: '10px 40px 10px 0',
                    maxHeight: '320px'
                }}
                />
            </div>
        );
    }

    getSameGenres() {
        return (
            <FilmPanelFigure style={{    
                fontSize: '1.3em',
                marginBottom: '10px'
            }}>
                <span>Films by {this.props.movie.genres[0]} genre</span>
            </FilmPanelFigure>
        );
    }
}

export default FilmPanel;

FilmPanel.propTypes = {
    movie: PropTypes.object,
    genres: PropTypes.array,
    overview: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string
};