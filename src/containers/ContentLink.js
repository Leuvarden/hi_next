import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import pink from '@material-ui/core/colors/pink';

const ContentLink = ({ id, children }) => (
    <Link href={`/films?id=${id}`}  
        as={`/films/${id}`}
    >
        <a style={{textDecoration: 'none', color: pink[500]}}>{children}</a>
    </Link>
);

export default ContentLink;

ContentLink.propTypes = {
    id: PropTypes.number,
    children: PropTypes.any
};