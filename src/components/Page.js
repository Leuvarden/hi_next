import Logo from './common/Logo';
import ErrorBoundary from './common/Error'
import { Provider } from 'react-redux';
import store from './store';
import Link from 'next/link'


const MainPage = ({children}) => (
    <Provider store={store}>
        <div>
            <Logo>                
                <Link href="/">
                    <a className="search-panel__button-search">Search</a>
                </Link>
            </Logo>
            <ErrorBoundary showOnError={<h1>Something went wrong</h1>}>
                {children}
            </ErrorBoundary>
            <Logo />
        </div>
    </ Provider>
);

export default MainPage;