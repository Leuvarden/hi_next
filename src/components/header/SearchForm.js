import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SearchButton from './SearchButton';
import FilterButtons from './FilterButtons';
import SearchInput from './SearchInput';
import styled from 'styled-components';

const Label = styled.label`
    display: block;
    width: 100%;
    margin: 5px 0;
`  
const Filter = styled.div`
    padding: 10px 0;
`

const SearchForm = ({searchParams, setSearchParams}) => {
    return ( 
        <Fragment>
            <div>
                <Label htmlFor="searchPanelInput">Find your movie</Label>
                <SearchInput 
                    searchParams={searchParams} 
                    setSearchParams={setSearchParams} 
                />
            </div>
        
            <Filter>
                <label id="filterDescription">Search by:</label>
                <FilterButtons 
                    searchParams={searchParams} 
                    setSearchParams={setSearchParams}
                />

                <SearchButton  
                    searchParams={searchParams} 
                    setSearchParams={setSearchParams} 
                />
            </Filter>
        </Fragment>
    );
};

export default SearchForm;

SearchForm.propTypes = {
    setSearchParams: PropTypes.func,
    searchParams: PropTypes.object
};

