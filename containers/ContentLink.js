import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';

const ContentLink = ({ id, children }) => (
    <Link href={`/films?id=${id}`}  
    // as={`/films/${id}`}
    >
        <a>{children}</a>
    </Link>
);

export default ContentLink;

ContentLink.propTypes = {
    id: PropTypes.number,
    children: PropTypes.any
};