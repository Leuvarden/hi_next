import Logo from './common/Logo';
import ErrorBoundary from './common/Error'
import Link from 'next/link'

const MainPage = ({children}) => (
        <div>
            <Logo>                
                <Link href="/">
                    <a className="button-search">Search</a>
                </Link>
            </Logo>
            <ErrorBoundary showOnError={<h1>Something went wrong</h1>}>
                {children}
            </ErrorBoundary>
            <Logo />
        </div>
);

export default MainPage;