import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import pink from '@material-ui/core/colors/pink';

const Input = styled.input`
    display: block;
    width: 100%;
    margin: 5px 0;
    background: black;
    color: white;
    border: none;
    border-bottom: 2px solid ${pink[500]};
    padding: 5px;
`  

const SearchInput = ({searchParams, setSearchParams}) => {
    return (
        <Input 
            type="text" 
            id="searchPanelInput"
            onKeyDown={(e) => {
                if (e.keyCode === 13) { //enter
                    setSearchParams({
                        query: e.target.value, 
                        searchBy: searchParams.searchBy
                    });
                    e.target.value = '';
                }
            }}
        />
    );
};

export default SearchInput;

SearchInput.propTypes = {
    setSearchParams: PropTypes.func,
    searchParams: PropTypes.object
};
