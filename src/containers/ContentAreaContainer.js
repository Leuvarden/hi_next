import orderBy from 'lodash/orderBy';
import { connect } from 'react-redux';
import ContentArea from './../components/main/ContentArea';
import { withRouter } from 'next/router';
import { setSearchParams } from './../actions/index';
import { createSelector } from 'reselect'

const sortMovies = (movies=[], sortBy='title') => orderBy(movies, [sortBy], 'asc');
const dataSelector = state => state.data.data
const sortSelector = state => state.sortBy

const memoizedSorting = createSelector(
    [dataSelector, sortSelector],
    (data, sortBy) => sortMovies(data, sortBy)
)

const mapStateToProps = (state) => {
    return {
        movies: memoizedSorting(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchParams: (params) => {
            dispatch(setSearchParams(params, dispatch));
        }
    };
};

export default 
withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(ContentArea)
);


