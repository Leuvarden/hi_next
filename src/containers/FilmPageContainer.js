import { connect } from 'react-redux'
import FilmPage from './../components/FilmPage'
import { withRouter } from 'next/router'
import { fetchMovieById, fetchSameGenres} from './../thunks/FetchMovies'

let mapStateToProps = (state, ownProps) => {
    return {
        filmId: ownProps.router.query.id,
        sortBy: state.sortBy,
        activeMovie: state.activeMovie,
        sameGenreMovies: state.sameGenreMovies
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieById: (id) => {
            dispatch(fetchMovieById(id))
        },
        getSameGenres: (id, sortBy) => {
            dispatch(fetchSameGenres(id, sortBy))
        }
    }

}

export default 
withRouter(
    connect(
        mapStateToProps, 
        mapDispatchToProps
    )(FilmPage)
)

