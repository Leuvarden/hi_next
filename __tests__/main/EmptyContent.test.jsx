import React from 'react';
import EmptyContent from './../../src/components/main/contentItems/EmptyContent';

/* eslint-disable no-undef */
describe ('EmptyContent', () => {

    it('renders as expected', () => {
        const empty = shallow(<EmptyContent />);
    
        expect(empty).toMatchSnapshot();
    });

});