import { withRouter } from 'next/router';
import pink from '@material-ui/core/colors/pink';
import styled from 'styled-components';

const LogoContainer = styled.div`
    color: ${pink[500]};
    text-transform: lowercase;
    display: flex;
    justify-content: center;

    .inner {
        flex: 0 1 80%;
        margin: 10px 0;
    }

    .button-search {
        float: right;
        box-sizing: border-box;
        background: ${pink[500]};
        color: white;
        text-transform: uppercase;
        border-radius: 2px;
        padding: 5px 30px;
        cursor: pointer;
        border: 2px solid $actionItemColor;
        text-decoration: none;
      }
`
const Logo = ({router, children}) => {
    return (
        <LogoContainer>
            <div className="inner">
                netflixroulette
                {router.asPath.includes('films') && children}
            </div>
        </LogoContainer>
    );
};

export default withRouter(Logo);