import PropTypes from 'prop-types';
import Router from 'next/router';
import { withRouter } from 'next/router';

const Logo = ({router, children}) => {
    return (
        <div className="logo logo__container">
            <div className="logo__inner">
                netflixroulette
                {router.asPath.includes('films') && children}
            </div>
        </div>
    );
};

export default withRouter(Logo);