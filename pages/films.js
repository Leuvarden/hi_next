import React, { Component } from 'react'
import Page from './../src/components/Page'
import FilmPage from './../src/components/FilmPage'
import { fetchMovieById, fetchSameGenres } from './../src/thunks/FetchMovies'
import { connect } from 'react-redux';
import './../static/styles/body.scss'

class Films extends React.Component {
    static async getInitialProps ({ req, store, isServer, pathname, query }) {
      await store.dispatch(fetchMovieById(query.id));
    }
  
    render () {
      return <div>
         <Page>
             <FilmPage 
                id={this.props.id} 
                activeMovie={this.props.activeMovie}
                sameGenreMovies={this.props.sameGenreMovies}
                />
         </Page>
      </div>
      
    }
  }

  let mapStateToProps = (state) => {
    return {
        sortBy: state.sortBy,
        activeMovie: state.activeMovie,
        sameGenreMovies: state.sameGenreMovies
    };
};

  export default connect(mapStateToProps)(Films)