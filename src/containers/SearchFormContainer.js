import { connect } from 'react-redux'
import SearchForm from '../components/header/SearchForm'
import { withRouter } from 'next/router'
import { setSearchParams } from '../actions'

let mapStateToProps = (state) => {
    return {
        searchParams: state.searchParams,
        sortBy: state.sortBy
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setSearchParams: (params, sortBy) => {
            
            dispatch(setSearchParams(params, dispatch, sortBy))

            if (params.query.length) {
                ownProps.router.push(`/?query=${params.query}&searchBy=${params.searchBy}`)
            } else {
                ownProps.router.push(`/?query=all&searchBy=${params.searchBy}`)
            }
        }
    }
}

export default 
withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SearchForm)
)
