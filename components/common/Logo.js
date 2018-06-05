import PropTypes from 'prop-types';
import Link from 'next/link'
import './../../scss/search-panel.scss';

const Logo = ({ path }) => {
    return (
        <div className="logo logo__container">
            <div className="logo__inner">
                netflixroulette
                <Link href="/">
                    <a className="search-panel__button-search">Search</a>
                </Link>
            </div>
        </div>
    );
};

export default Logo;

// Logo.propTypes = {
//     path: PropTypes.string
// };

// Logo.defaultProps = {
//     path: ''
// };