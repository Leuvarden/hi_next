import Logo from './common/Logo';
import ErrorBoundary from './common/Error'
import { Provider } from 'react-redux';
import store from './store';


const MainPage = ({children}) => (
    <Provider store={store}>
        <div>
            <Logo />
            <ErrorBoundary showOnError={<h1>Something went wrong</h1>}>
                {children}
            </ErrorBoundary>
            <Logo />
        </div>
    </ Provider>
);

export default MainPage;