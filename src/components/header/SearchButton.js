import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const SearchButton = ({ setSearchParams, searchParams, sortBy, classes }) => (       
    <Button  
        color="secondary" variant="contained"
        style={{float:'right'}}
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
)

export default SearchButton;

SearchButton.propTypes = {
    searchParams: PropTypes.object,
    setSearchParams: PropTypes.func,
    sortBy: PropTypes.string
};