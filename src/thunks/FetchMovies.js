import { 
    setMoviesToStore, 
    selectMovie, 
    setSameGenresMovies 
} from './../actions';
import 'isomorphic-unfetch'

const url = 'http://react-cdp-api.herokuapp.com/movies';

export const fetchMovies = (criterion, term) => {
    return (dispatch) => {
        return fetch(url)
            .then(response => response.json())
            .then(response => 
                dispatch(setSameGenresMovies(response.data, criterion, term))
            )
            .catch(() => {
                dispatch(setSameGenresMovies([]));
            });
    };
};

export const fetchMoviesForSearch = (searchQuery, searchBy, sortBy) => {
    return (dispatch) => {
        let urlSearch =  `${url}/?search=${searchQuery}&searchBy=${searchBy}`;
        if (sortBy) {
            urlSearch  += `&sortBy=${sortBy}`;
        }

        return fetch(urlSearch)
            .then(res =>  res.json())
            .then(res => {
                dispatch(setMoviesToStore(res.data));
            })
            .catch(() => {
                dispatch(setMoviesToStore([]));
            });
    }; 
};

export const fetchMovieById = (id) => {
    return (dispatch) => {
        let urlSearch = `${url}/${id}`;

        return fetch(urlSearch)
            .then(res => res.json())
            .then(res => dispatch(selectMovie(res)) )
            .catch(() => {
                dispatch(selectMovie({}))
            });
    };
};

export const fetchSameGenres = (genre) => {
    return (dispatch) => {
        let urlSearch =  `${url}/?search=${genre}&searchBy=genres`;

        return fetch(urlSearch)
            .then(res =>  res.json())
            .then(res => 
                dispatch(setSameGenresMovies(res.data)) 
            );
    }; 
};