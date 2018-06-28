import React from 'react';
import SearchFormContainer from './../../containers/SearchFormContainer';
import SortPanelContainer from './../../containers/SortPanelContainer';
import styled from 'styled-components';

const SearchPanelSection = styled.section`
    flex: 0 1 auto;
    background: black;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
`  
const SearchPanelContainer = styled.div`
    flex: 0 1 80%;
    display: flex;
    flex-direction: column;
`  

const SearchPanel = () => {
    return (
        <SearchPanelSection>
            <SearchPanelContainer>
                <SearchFormContainer />
                <SortPanelContainer />
            </SearchPanelContainer>
        </SearchPanelSection>
    );
};

export default SearchPanel;