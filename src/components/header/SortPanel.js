import React from 'react';
import SortButton from '../../containers/SortButtonContainer';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SortingPanel = styled.div`
    text-transform: capitalize;
    padding: 10px 0;
`  
const SearchPanelContainer = styled.div`
    flex: 0 1 80%;
    display: flex;
    flex-direction: column;
` 

const SortPanel = ({ moviesFound }) => {
    return (
        <SortingPanel>
            <span className="movies-count">
                {moviesFound} movies found
            </span>
    
            <span style={{float: 'right'}}>
                <label>Sort by:</label>
                <SortButton criterion='release_date'>release date</SortButton>
                <SortButton criterion='title'>title</SortButton>
            </span>
        </SortingPanel>
    );
};

export default SortPanel;

SortPanel.propTypes = {
    moviesFound: PropTypes.number
};