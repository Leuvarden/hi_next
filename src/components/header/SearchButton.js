import React from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

const SearchButton = ({ setSearchParams, searchParams, sortBy }) => {
    
    return (
        <Button  
            color="primary" variant="contained"
            // className="search-panel__button-search"
            onClick={() => {
                let term = document.getElementById('searchPanelInput');
                let query = term ? term.value : 'all';
                setSearchParams({
                    query, 
                    searchBy: searchParams.searchBy
                }, sortBy);
            } }
        >
            Search
        </Button>
    );
};

export default SearchButton;

SearchButton.propTypes = {
    searchParams: PropTypes.object,
    setSearchParams: PropTypes.func,
    sortBy: PropTypes.string
};