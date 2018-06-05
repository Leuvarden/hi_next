import React from 'react';
import SearchFormContainer from './../../containers/SearchFormContainer';
import SortPanelContainer from './../../containers/SortPanelContainer';
import './../../scss/search-panel.scss';

const SearchPanel = () => {
    return (
        <section className="search-panel">
            <div className="search-panel__container">
                <SearchFormContainer />
                {/* <SortPanelContainer /> */}
                hi searchpanel
            </div>
        </section>
    );
};

export default SearchPanel;