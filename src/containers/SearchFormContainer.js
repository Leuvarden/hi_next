import { connect } from 'react-redux';
import SearchForm from '../components/header/SearchForm';
import { withRouter } from 'next/router';
import { setSearchParams } from '../actions';
import { createSelector } from 'reselect'

const searchSelector1 = state =>  state.searchParams.query
const searchSelector2 = state => state.searchParams.searchBy
// 
const memoizedSearchParams = createSelector(
    [searchSelector1, searchSelector2],
    (query, searchBy) => ({query, searchBy})
)

let mapStateToProps = (state) => {
    return {
        searchParams: memoizedSearchParams(state),
        sortBy: state.sortBy
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setSearchParams: (params, sortBy) => {
            if (params.query.length) {
                ownProps.router.push(`/?query=${params.query}&searchBy=${params.searchBy}`);
            } else {
                ownProps.router.push(`/?query=all&searchBy=${params.searchBy}`);
            }
            
            dispatch(setSearchParams(params, dispatch, sortBy));

        }
    };
};

export default 
withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SearchForm)
);
